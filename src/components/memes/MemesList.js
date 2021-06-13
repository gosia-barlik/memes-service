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
  // console.log(props.database);
  return (
    <Grid
      container
      className={classes.root}
      spacing={8}
      className='memeslist-container'>
      {props.memesList.map((meme) => {
        return (
          <MemeSingle
            meme={meme}
            onUpvote={props.onUpvote}
            onDownvote={props.onDownvote}
            onToggleStar={props.onToggleStar}
          />
        );
      })}
    </Grid>
  );
}
