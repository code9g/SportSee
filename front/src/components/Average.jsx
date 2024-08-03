import useFetch from "../hooks/useFetch";
import useUser from "../hooks/useUser";
import fetchUserAverageSessionsApi from "../services/fetchUserAverageSessionsApi";
import { dayOfWeek } from "../utils/consts";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import AverageChart from "./charts/AverageChart";

/**
 * Composant pour charger les données et afficher la durée moyenne des sessions de l'utilisateur
 * sous forme de graphique linéaire.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @component
 * @returns {JSX.Element} Un élément JSX contenant le graphique linéaire et le titre associé.
 */
function Average() {
  const { user } = useUser();

  const {
    isLoading,
    isAborted,
    error,
    data: average,
  } = useFetch(user.id, fetchUserAverageSessionsApi, "average-sessions", []);

  if (isLoading || isAborted) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!average || average.length === 0) {
    return <NoData />;
  }

  const data = average.map((item) => ({
    day: dayOfWeek[item.day],
    sessionLength: item.sessionLength,
  }));

  return <AverageChart data={data} />;
}

export default Average;
