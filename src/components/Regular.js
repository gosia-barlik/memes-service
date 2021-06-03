import React from "react";
import { Container, Box } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { upvote, downvote } from "../store/actions/globalActions";

import MemesList from "./memes/MemesList";

export default function Regular() {
  const dispatch = useDispatch();
  const memeReducer = useSelector((state) => state);
  
  const onUpvote = (e) => {
    // console.log(e.target.parentNode.id);
    dispatch(upvote(e.target.parentNode.id));
  };

  const onDownvote = (e) => {
    dispatch(downvote(e.target.parentNode.id));
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        py: 3,
      }}>
      <Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
          <MemesList database={memeReducer} onUpvote={onUpvote} onDownvote={onDownvote}/>
        </Box>
      </Container>
    </Box>
  );
}
