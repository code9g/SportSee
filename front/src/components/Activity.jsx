import PropTypes from "prop-types";

import useFetch from "../hooks/useFetch";
import fetchUserActivityApi from "../services/fetchUserActivityApi";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import ActivityChart from "./charts/ActivityChart";

/**
 * Composant pour charger les données et afficher l'activité quotidienne de l'utilisateur sous forme
 * de graphique à barres.
 *
 * Ce composant récupère les données d'activité pour un utilisateur spécifique et les affiche en utilisant
 * un graphique à barres. Les barres représentent le poids (kg) et les calories brûlées (kCal) avec des
 * couleurs distinctes. Un tooltip personnalisé affiche des détails supplémentaires lors du survol des barres.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur pour les données d'activité sont récupérées.
 * @returns {JSX.Element} Un élément JSX contenant le graphique à barres et les icônes associées.
 */
function Activity({ user }) {
  const {
    isLoading,
    error,
    data: activity,
  } = useFetch(user.id, fetchUserActivityApi, "activity", []);

  if (isLoading) {
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

Activity.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Activity;
