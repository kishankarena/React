const initialValue = {
  userData: { name: "", email: "", phoneNo: "", photo: "" },
  isLogged: false,
};
export const userDataReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "submit": {
      const { name, email, phoneNo, photo } = action.payload;
      return {
        ...state,
        userData: {
          name,
          email,
          phoneNo,
          photo,
        },
        isLogged: true,
      };
    }
    case "logout":
      return { userData: initialValue.userData };

    default:
      return state;
  }
};
