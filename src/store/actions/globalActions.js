import {
  DOWNVOTE,
  UPVOTE,
  TOGGLESTAR,
  ADDMEME
} from "../consts";

export const upvote = (id) => {
  return { type: UPVOTE, payload: id };
};
export const downvote = (id) => {
  return { type: DOWNVOTE, payload: id };
};
export const toggleStar = (id) => {
  return { type: TOGGLESTAR, payload: id };
};
export const addMeme = (meme) => {
  return { type: ADDMEME, payload: meme };
};



