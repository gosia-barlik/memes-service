import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MemeSingle from "./MemeSingle";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MemesList(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.root}
      spacing={8}
      className='memeslist-container'>
      {props.database.memes.map((meme) => {
       
        return <MemeSingle
        meme={meme}
          onUpvote={props.onUpvote}
          onDownvote={props.onDownvote}
        />
      }
      )}
    </Grid>
  );
}
