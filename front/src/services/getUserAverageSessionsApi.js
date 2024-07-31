import { mocked, URL_API, USER_AVERAGE_SESSIONS } from "../utils/consts";

async function getUserAverageSessionsApi(id) {
  const result = (
    mocked
      ? USER_AVERAGE_SESSIONS.find((average) => average.userId === id)
      : await fetch(`${URL_API}/user/${id}/average-sessions`).then((response) =>
          response.json()
        )
  )?.sessions;
  // POST TRAITMENT
  return result;
}

export default getUserAverageSessionsApi;
