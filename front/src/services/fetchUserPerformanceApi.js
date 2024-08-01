import fetchApi from "./fetchApi";

const fetchUserPerformanceApi = async (id) => fetchApi(id, "/performance");

export default fetchUserPerformanceApi;
