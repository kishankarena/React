export const response = fetch("https://reqres.in/api/users?page=1").then((r) =>
  r.json()
);
