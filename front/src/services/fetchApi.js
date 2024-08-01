const URL_API = "http://localhost:3000";

const fetchApi = async (userId, path = "") =>
  fetch(`${URL_API}/user/${userId}${path}`)
    .then((response) => response.json())
    .then((json) => json?.data);

export default fetchApi;
