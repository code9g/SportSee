import useFetch from "../hooks/useFetch";
import useUser from "../hooks/useUser";
import fetchUserActivityApi from "../services/fetchUserActivityApi";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import ActivityChart from "./charts/ActivityChart";

/**
 * Ce composant récupère les données d'activité pour un utilisateur spécifique et les affiche en utilisant
 * un graphique à barres. Les barres représentent le poids (kg) et les calories brûlées (kCal) avec des
 * couleurs distinctes. Un tooltip personnalisé affiche des détails supplémentaires lors du survol des barres.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @component
 * @returns {JSX.Element} Un élément JSX contenant le graphique à barres et les icônes associées.
 */
function Activity() {
  const { user } = useUser();

  const {
    isLoading,
    isAborted,
    error,
    data: activity,
  } = useFetch(user.id, fetchUserActivityApi, "activity", []);

  if (isLoading || isAborted) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!activity || activity.length === 0) {
    return <NoData />;
  }

  const data = activity.map((item, index) => ({ ...item, day: index + 1 }));

  return <ActivityChart data={data} />;
}

export default Activity;
