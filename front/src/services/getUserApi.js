import { mocked, URL_API, USER_MAIN_DATA } from "../utils/consts";

async function getUserApi(id) {
  const result = mocked
    ? USER_MAIN_DATA.find((user) => user.id === id)
    : await fetch(`${URL_API}/user/${id}`).then((response) => response.json());
  // POST TRAITMENT
  return result;
}

export default getUserApi;
