import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import MemeSingle from "./MemeSingle";
import { Container, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  upvote,
  downvote,
  toggleStar,
} from "../../store/actions/globalActions";

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
  const dispatch = useDispatch();
  const memeReducer = useSelector((state) => state);

  const onUpvote = (e) => {
    dispatch(upvote(e.currentTarget.id));
  };

  const onDownvote = (e) => {
    dispatch(downvote(e.currentTarget.id));
  };

  const onToggleStar = (e) => {
    dispatch(toggleStar(e.currentTarget.id));
  };

  const filterMemes = (meme) => {
    if (props.isFavorite) return meme.isFavorite == true;
    else return meme.isHot == props.isHot;
  };

  const memesList = memeReducer.memes.filter(filterMemes);
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
          {memesList.map((meme) => {
            return (
              <MemeSingle
                meme={meme}
                onUpvote={onUpvote}
                onDownvote={onDownvote}
                onToggleStar={onToggleStar}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
