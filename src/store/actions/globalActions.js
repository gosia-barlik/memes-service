import {
  DOWNVOTE,
  UPVOTE,
  TOGGLESTAR
} from "../consts";

export const upvote = (id) => {
  console.log(id)
  return { type: UPVOTE, payload: id };
};
export const downvote = (id) => {
  return { type: DOWNVOTE, payload: id };
};
export const toggleStar = (id) => {
  return { type: TOGGLESTAR, payload: id };
};


