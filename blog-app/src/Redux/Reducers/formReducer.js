const formReducer = (state = initialState, action) => {
  let action_Type = action.type;
  switch (action_Type) {
    case "FORM_ACTION":
      return {
        ...state,
        formData: action.data
      };
    case "EDIT_ACTION":
      return {
        ...state,
        editData: action.data
      };
    case "DELETE_ACTION":
      return {
        ...state,
        deleteData: action.data
      };

    default:
      return state;
  }
};

const initialState = {
  formData: [],
  editData: [],
  deleteData: []
};

export default formReducer;
