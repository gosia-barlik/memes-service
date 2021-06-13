import { UPVOTE, DOWNVOTE, TOGGLESTAR, ADDMEME } from "../consts";

const initialState = {
  memes: [
    {
      title: "Mem 1",
      upvotes: 0,
      downvotes: 0,
      img: "./static/images/mem1.jpg",
      id: 1,
      isHot: false,
      isFavorite: false
    },
    {
      title: "Mem 2",
      upvotes: 0,
      downvotes: 0,
      img: "./static/images/mem2.jpg",
      id: 2,
      isHot: false,
      isFavorite: false
    },
    {
      title: "Mem 3",
      upvotes: 0,
      downvotes: 0,
      img: "./static/images/mem3.jpg",
      id: 3,
      isHot: false,
      isFavorite: false
    },
    {
      title: "Mem 4",
      upvotes: 0,
      downvotes: 0,
      img: "./static/images/mem4.jpg",
      id: 4,
      isHot: false,
      isFavorite: false
    },
    {
      title: "Mem 5",
      upvotes: 0,
      downvotes: 0,
      img: "./static/images/mem5.jpg",
      id: 5,
      isHot: false,
      isFavorite: false
    },
  ],
  
};

const upVote = (state, searchedId) => {
  state.memes.forEach((item) => {
    if (`up-${item.id}`== searchedId) {
      item.upvotes++;
      if(item.upvotes-item.downvotes > 5) {
        item.isHot=true; 
      }
    }
  });
  // state.memes.sort((a,b) => (a.id> b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
  return state;
};

const downVote = (state, searchedId) => {
  state.memes.forEach((item) => {
    if (`down-${item.id}`== searchedId) {
      item.downvotes++;
      if(item.upvotes-item.downvotes <= 5) {
        item.isHot=false; 
      }
    }
  });
  return state;
};

const toggleStar = (state, searchedId) => {
  state.memes.forEach((item) => {
    if (`star-${item.id}`== searchedId) {
      item.isFavorite = !item.isFavorite;
    }
  });
  return state;
};

const addMeme = (state, meme) => {
  state.memes.push(meme);
  return state.memes;
};

export const memeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPVOTE: {
      return {
        ...state,
        state: upVote(state, action.payload)
    }}
    case DOWNVOTE: {
      return {
        ...state,
        state: downVote(state, action.payload)
    }}
    case TOGGLESTAR: {
      return {
        ...state,
        state: toggleStar(state, action.payload)
    }}
    case ADDMEME: {
      return {
        ...state,
        memes: addMeme(state, action.payload)
    }}
    default: {
      return state;
    }
  }
};
