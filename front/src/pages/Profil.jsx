import PropTypes from "prop-types";
import ActivitySection from "../components/ActivitySection";
import AverageSection from "../components/AverageSection";
import Error from "../components/Error";
import KeyMetricsSection from "../components/KeyMetricsSection";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import PerformanceSection from "../components/PerformanceSection";
import ScoreSection from "../components/ScoreSection";
import useFetch from "../hooks/useFetch";
import fetchUserApi from "../services/fetchUserApi";

/**
 * Composant pour afficher la page de profil d'un utilisateur.
 *
 * Ce composant récupère les données d'un utilisateur spécifique et affiche les informations et les graphiques.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {number} props.id Id de l'utilisateur.
 * @returns {JSX.Element} Un élément JSX contenant la page de profil.
 */
function Profil({ id }) {
  const {
    isLoading,
    error,
    data: user,
  } = useFetch(id, fetchUserApi, "user", null);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!user) {
    return <NoData />;
  }

  return (
    <>
      <div className="container">
        <div className="info">
          <h2 className="title">
            Bonjour{" "}
            <span className="first-name">{user.userInfos.firstName}</span>
          </h2>
          <p className="message">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className="charts">
          <KeyMetricsSection user={user} />
          <ActivitySection user={user} />
          <AverageSection user={user} />
          <PerformanceSection user={user} />
          <ScoreSection user={user} />
        </div>
      </div>
    </>
  );
}

Profil.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Profil;
