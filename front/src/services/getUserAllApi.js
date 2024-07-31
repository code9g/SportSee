import getUserActivityApi from "./getUserActivityApi";
import getUserApi from "./getUserApi";
import getUserAverageSessionsApi from "./getUserAverageSessionsApi";
import getUserPerformanceApi from "./getUserPerformanceApi";

async function getUserAllApi(id) {
  const result = await getUserApi(id);

  const activity = await getUserActivityApi(id);
  const average = await getUserAverageSessionsApi(id);
  const performance = await getUserPerformanceApi(id);

  result.activity = activity.sessions;
  result.average = average.sessions;
  result.performance = { kind: performance.kind, data: performance.data };
  return result;
}

export default getUserAllApi;
