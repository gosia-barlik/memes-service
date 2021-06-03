import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MemeSingle(props) {
  const classes = useStyles();
 
  return (

        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.meme.img}
              title={props.meme.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
              {props.meme.title}
              </Typography>
        
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary' id={`up-${props.meme.id}`} onClick = {props.onUpvote}>
              Upvote: 
              {props.meme.upvotes}
            </Button>
            <Button size='small' color='primary' id={`down-${props.meme.id}`} onClick = {props.onDownvote}>
              Downvote: 
              {props.meme.downvotes}
            </Button>
          </CardActions>
        </Card>

  );
}