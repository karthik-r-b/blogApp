export const postAction = data => {
  return {
    type: "POSTS_LOADED",
    data
  };
};

export const postLinkAction = data => {
  return {
    type: "POST_LINKS_LOADED",
    data
  };
};

export const postCommentsAction = data => {
  return {
    type: "POST_COMMENTS_LOADED",
    data
  };
};
