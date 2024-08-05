import useFetch from "../hooks/useFetch";
import useUser from "../hooks/useUser";
import fetchUserPerformanceApi from "../services/fetchUserPerformanceApi";
import { kinds } from "../utils/consts";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import PerformanceChart from "./charts/PerformanceChart";

/**
 * Composant pour charger les données et afficher les performances de l'utilisateur sous forme de
 * graphique radar.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @component
 * @returns {JSX.Element} Un élément JSX contenant le graphique radar.
 */
function Performance() {
  const { user } = useUser();

  const {
    isLoading,
    isAborted,
    error,
    data: performance,
  } = useFetch(user.id, fetchUserPerformanceApi, "performance", []);

  if (isLoading || isAborted) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (
    !performance ||
    !performance.data ||
    !performance.kind ||
    performance.data.length === 0 ||
    performance.kind.length === 0
  ) {
    return <NoData />;
  }

  const data = performance.data
    .map((item) => ({
      value: item.value,
      kind: kinds[performance.kind[item.kind] ?? null] ?? "???",
    }))
    .reverse();

  return <PerformanceChart data={data} />;
}

export default Performance;
