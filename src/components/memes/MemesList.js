import React from "react";
import MemeSingle from "./MemeSingle";
import { useDispatch, useSelector } from "react-redux";
import {
  upvote,
  downvote,
  toggleStar,
} from "../../store/actions/globalActions";

export default function MemesList(props) {
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
    if (props.isFavorite) return meme.isFavorite === true;
    else return meme.isHot === props.isHot;
  };

  const memesList = memeReducer.memes.filter(filterMemes);
  return (
    <>
      {memesList.length === 0 ? (
        <h4>there is no meme here yet...</h4>
      ) : (
        memesList.map((meme) => {
          return (
            <MemeSingle
              meme={meme}
              onUpvote={onUpvote}
              onDownvote={onDownvote}
              onToggleStar={onToggleStar}
            />
          );
        })
      )}
    </>
  );
}
