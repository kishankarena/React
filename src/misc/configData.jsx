export const getUserData = async (pageNum) => {
  const response = await fetch(
    `https://reqres.in/api/users?page=${pageNum}`
  ).then((r) => r.json());
  return response;
};
