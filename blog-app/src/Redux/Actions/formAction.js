export const formAction = data => {
  return {
    type: "FORM_ACTION",
    data
  };
};

export const editAction = data => {
  return {
    type: "EDIT_ACTION",
    data
  };
};

export const deleteAction = data => {
  return {
    type: "DELETE_ACTION",
    data
  };
};
