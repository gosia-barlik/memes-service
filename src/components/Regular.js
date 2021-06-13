import React from "react";
import { Container, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { upvote, downvote, toggleStar } from "../store/actions/globalActions";

import MemesList from "./memes/MemesList";

export default function Regular(props) {
  const dispatch = useDispatch();
  const memeReducer = useSelector((state) => state);

  const onUpvote = (e) => {
    // console.log(e.target);
    dispatch(upvote(e.target.id));
  };

  const onDownvote = (e) => {
    dispatch(downvote(e.target.id));
  };

  const onToggleStar = (e) => {
    // console.log(e.target.parentNode.parentNode.id);
    // console.log(memeReducer);
    dispatch(toggleStar(e.target.parentNode.parentNode.id));
  };

  const filterDatabase = (meme) => {
    return meme.isHot == props.isHot;
  };

  const memesList = memeReducer.memes.filter(filterDatabase);

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <MemesList
            memesList={memesList}
            onUpvote={onUpvote}
            onDownvote={onDownvote}
            onToggleStar={onToggleStar}
          />
        </Box>
      </Container>
    </Box>
  );
}
