import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { addMeme } from "../../store/actions/globalActions";
import { makeStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles({
  primaryButton: {
    marginTop: 12,
  },
  media: {
    height: 340,
    backgroundSize: "contain",
    backgroundRepeat: "noRepeat",
  },
  form : {
    maxWidth: 500
  },
  alert : {
    marginTop: 10
  }
});

export default function AddMemeForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const memeReducer = useSelector((state) => state);

  const [imgData, setImgData] = useState(null);
  const [title, setTitle] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  const onChangePicture = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const getNewMemeId = () => {
    const { memes } = memeReducer;
    let lastObj = memes[memes.length - 1];
    let newMemeId = lastObj.id + 1;
    return newMemeId;
  };

  const handleSubmit = (e) => {
      setValidationErrors([]);
      let localValidationErrors = [];

    if(imgData==null)
      localValidationErrors.push('You need to upload an image!');

    if(!title || title.length==0) 
      localValidationErrors.push('You need to add a title!')    

      
    if(localValidationErrors.length>0){
      setValidationErrors(localValidationErrors);
    }else{
      const newMeme = {};
      const memeId = getNewMemeId();
      localStorage.setItem(`image-${memeId}`, imgData);

      newMeme.title = title;
      newMeme.id = memeId;
      newMeme.img = localStorage.getItem(`image-${memeId}`);
      newMeme.upvotes = 0;
      newMeme.downvotes = 0;
      newMeme.isHot = false;
      newMeme.isFavorite = false;
      
      dispatch(addMeme(newMeme));
      setIsFormSubmitted(true);
    }
  };
 
  return (
   
    <>
      {isFormSubmitted && <Redirect to='/regular' />}
      {validationErrors && 
        validationErrors.map(
        (error)=><Alert severity="error" className={classes.alert}>{error}</Alert>)
      }
      <form 
      autoComplete='off' 
      className = {classes.form} >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label='Title'
          fullWidth={true}
          margin='normal'
          inputProps={{ style: { textAlign: "left" } }}
        />

        <Button
          variant='outlined'
          component='label'
          fullWidth={true}
          margin='normal'
          className={classes.primaryButton}>
          Add image
          <input type='file' hidden onChange={onChangePicture} />
        </Button>
        <span className='imagePreview'>
          <img className='imagePreview' src={imgData} alt={imgData ?'meme preview':''}/>
        </span>

        <Button
          onClick={handleSubmit}
          variant='contained'
          color="primary"
          fullWidth={true}
          margin='normal'
          className={classes.primaryButton}>
          Save
        </Button>
      </form>
    </>
  );
}
