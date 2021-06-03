import {
  DOWNVOTE,
  UPVOTE
} from "../consts";

export const upvote = (id) => {
  console.log(id)
  return { type: UPVOTE, payload: id };
};
export const downvote = (id) => {
  return { type: DOWNVOTE, payload: id };
};


