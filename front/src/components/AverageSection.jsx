import PropTypes from "prop-types";
import dayOfWeek from "../consts/dayOfWeek";
import useFetch from "../hooks/useFetch";
import fetchUserAverageSessionsApi from "../services/fetchUserAverageSessionsApi";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import AverageChart from "./charts/AverageChart";

/**
 * Composant pour afficher la durée moyenne des sessions de l'utilisateur sous forme de graphique linéaire.
 *
 * Ce composant récupère les données de session pour un utilisateur spécifique et les affiche en utilisant
 * un graphique linéaire. La ligne représente la durée des sessions, avec des détails supplémentaires affichés
 * dans un tooltip personnalisé lors du survol de la ligne.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.user - L'utilisateur pour lequel les données de session sont récupérées.
 *
 * @returns {JSX.Element} - Un élément JSX contenant le graphique linéaire et le titre associé.
 */
function AverageSection({ user }) {
  const {
    isLoading,
    error,
    data: average,
  } = useFetch(user.id, fetchUserAverageSessionsApi, "average-sessions", []);

  if (isLoading) {
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

  return (
    <section className="average">
      <AverageChart data={data} />
    </section>
  );
}
AverageSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AverageSection;
