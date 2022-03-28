export const getUserData = async (pageNum) => {
  const response = await fetch(
    `${process.env.REACT_APP_MY_API}?page=${pageNum}`
  ).then((r) => r.json());
  return response;
};
