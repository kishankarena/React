export default async function getUserData() {
  const response = await fetch("https://reqres.in/api/users?page=1")
    .then((r) => r.json())
    .then((result) => 
      result.data
    );
  console.log(response);
  return response;
}
