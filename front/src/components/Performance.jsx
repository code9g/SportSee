import PropTypes from "prop-types";
import useFetch from "../hooks/useFetch";
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
 * Ce composant récupère les données de session pour un utilisateur spécifique et les affiche en utilisant
 * un graphique radar.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur pour lequel les données de performance sont récupérées.
 * @returns {JSX.Element} Un élément JSX contenant le graphique radar.
 */
function Performance({ user }) {
  const {
    isLoading,
    error,
    data: performance,
  } = useFetch(user.id, fetchUserPerformanceApi, "performance", []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!performance || performance.length === 0) {
    return <NoData />;
  }

  const data = performance.data
    .map((item) => ({ value: item.value, kind: kinds[item.kind] ?? "???" }))
    .reverse();

  return <PerformanceChart data={data} />;
}

Performance.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Performance;
