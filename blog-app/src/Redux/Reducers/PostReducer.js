const postReducer = (state = initialState, action) => {
  let action_type = action.type;
  switch (action_type) {
    case "POSTS_LOADED":
      return {
        ...state,
        posts: action.data
      };
    case "POST_LINKS_LOADED":
      return {
        ...state,
        post: action.data
      };
    case "POST_COMMENTS_LOADED":
      return {
        ...state,
        comments: action.data
      };
    default:
      return state;
  }
};

const initialState = {
  posts: [],
  post: [],
  comments: []
};

export default postReducer;
