import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Box } from "@material-ui/core";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
import { addMeme } from "../../store/actions/globalActions";

const useStyles = makeStyles({
  button: {
    "&.active": {
      fontWeight: 700,
    },
  },
});

export default function AddMemeForm() {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  const memeReducer = useSelector((state) => state);
  
  const [imgData, setImgData] = useState(null);
  const [title, setTitle] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);


  const onChangePicture = e => {
  const reader = new FileReader();
    if (e.target.files[0]) {
      reader.addEventListener("load", () => { 
        setImgData(reader.result); 
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getNewMemeId = () => {
    const {memes} = memeReducer;
    let lastObj = memes[memes.length-1];
    let newMemeId = lastObj.id+1;
    return newMemeId;
  }

  const handleSubmit = () => {
    const newMeme = {};
    const memeId = getNewMemeId();
    localStorage.setItem(`image-${memeId}`,imgData);      
    
    newMeme.id = memeId;
    newMeme.img = localStorage.getItem(`image-${memeId}`);
    newMeme.upvotes= 0;
    newMeme.downvotes= 0;
    newMeme.isHot= false;
    newMeme.isFavorite= false;

    dispatch(addMeme(newMeme));
    setIsFormSubmitted(true);
  }

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}>
      <Container maxWidth={false}>
        <Grid
          container
          className={classes.root}
          spacing={8}
          className='memeslist-container'>
          
          {isFormSubmitted && <Redirect to='/regular' />}

          <form className={classes.root} noValidate autoComplete='off'>
            <TextField value={title} onChange={e => setTitle(e.target.value)} label='Title' fullWidth={true} margin='normal' inputProps={{ style: {textAlign: 'left'} }}/>

            <Button variant='outlined' component='label' fullWidth={true} margin='normal' >
              Add image
              <input type='file' hidden onChange={onChangePicture}  />
            </Button>
            <span className="imagePreview">
                <img className="imagePreview" src={imgData} />
            </span>

            <Button type="submit" onClick={handleSubmit} variant='contained' component='label' fullWidth={true} margin='normal' >
              Save
            </Button>
          </form>
        </Grid>
      </Container>
    </Box>
  );
}
