import fetchApi from "./fetchApi";

const fetchUserAverageSessionsApi = async (id) =>
  fetchApi(id, "/average-sessions").then((average) => average?.sessions);

export default fetchUserAverageSessionsApi;
