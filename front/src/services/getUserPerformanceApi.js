import { mocked, URL_API, USER_PERFORMANCE } from "../utils/consts";

async function getUserPerformanceApi(id) {
  const result = mocked
    ? USER_PERFORMANCE.find((performance) => performance.userId === id)
    : await fetch(`${URL_API}/user/${id}/performance`).then((response) =>
        response.json()
      );
  // POST TRAITMENT
  return result;
}

export default getUserPerformanceApi;
