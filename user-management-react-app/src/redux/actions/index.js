export const submit = (userData) => {
  return {
    type: "submit",
    payload: userData,
  };
};
export const logout = () => {
  return {
    type: "logout",
  };
};
