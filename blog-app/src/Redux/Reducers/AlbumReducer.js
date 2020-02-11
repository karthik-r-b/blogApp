const albumReducer = (state = initialState, action) => {
  const action_type = action.type;
  switch (action_type) {
    case "ALBUM_LOADED":
      return {
        ...state,
        albums: action.data
      };

    case "PHOTO_LOADED":
      return {
        ...state,
        photos: action.data
      };

    default:
      return state;
  }
};

const initialState = {
  albums: [],
  photos: []
};

export default albumReducer;
