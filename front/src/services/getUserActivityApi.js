import { mocked, URL_API, USER_ACTIVITY } from "../utils/consts";

async function getUserActivityApi(id) {
  const result = (
    mocked
      ? USER_ACTIVITY.find((activity) => activity.userId === id)
      : await fetch(`${URL_API}/user/${id}/activity`).then((response) =>
          response.json()
        )
  )?.sessions;
  // POST TRAITMENT
  return result;
}

export default getUserActivityApi;
