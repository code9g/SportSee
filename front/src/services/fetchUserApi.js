import fetchApi from "./fetchApi";

async function fetchUserApi(id) {
  return fetchApi(id);
}

export default fetchUserApi;
