const initialValue = {
  data: { name: "", email: "", phoneNo: "", photo: "" },
};
export const userDataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "submit": {
      const { name, email, phoneNo, photo } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          name,
          email,
          phoneNo,
          photo,
        },
      };
    }
    case "logout":
      return {
        ...state,
        initialValue,
      };
    default:
      return state;
  }
};
