import fetchApi from "./fetchApi";

const fetchUserActivityApi = async (id) =>
  fetchApi(id, "/activity").then((activity) => activity.sessions);

export default fetchUserActivityApi;
