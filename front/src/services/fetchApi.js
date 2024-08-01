const URL_API = "http://localhost:3000";

async function fetchApi(userId, path = "") {
  return (
    await fetch(`${URL_API}/user/${userId}${path}`).then((response) =>
      response.json()
    )
  )?.data;
}

export default fetchApi;
