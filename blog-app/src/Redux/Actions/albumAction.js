export const albumAction = data => {
  return {
    type: "ALBUM_LOADED",
    data
  };
};

export const photoAction = data => {
  return {
    type: "PHOTO_LOADED",
    data
  };
};
