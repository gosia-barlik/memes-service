import { UPVOTE, DOWNVOTE } from "../consts";

const initialState = {
  memes: [
    {
      title: "Mem 1",
      upvotes: 6,
      downvotes: 0,
      img: "./static/images/mem1.jpg",
      id: 1,
    },
    {
      title: "Mem 2",
      upvotes: 3,
      downvotes: 0,
      img: "./static/images/mem2.jpg",
      id: 2,
    },
    {
      title: "Mem 3",
      upvotes: 2,
      downvotes: 1,
      img: "./static/images/mem3.jpg",
      id: 3,
    },
    {
      title: "Mem 4",
      upvotes: 6,
      downvotes: 0,
      img: "./static/images/mem4.jpg",
      id: 4,
    },
    {
      title: "Mem 5",
      upvotes: 6,
      downvotes: 0,
      img: "./static/images/mem5.jpg",
      id: 5,
    },
  ],
};

const upVote = (state, searchedId) => {
  state.memes.forEach((item) => {
    if (`up-${item.id}`== searchedId) {
      item.upvotes++;
    }
    console.log(state)
  });
  return state;
};

export const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPVOTE: {
      return upVote(state, action.payload);
    }
    // case DOWNVOTE: {
    //   return {
    //     ...state,
    //     downvotes: + 1,
    //   };
    // }

    default: {
      return state;
    }
  }
};
