import PropTypes from "prop-types";
import NoData from "./NoData";
import ScoreChart from "./charts/ScoreChart";

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur pour lequel afficher le score.
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function Score({ user }) {
  if (user.todayScore === undefined && user.score === undefined) {
    return <NoData />;
  }

  const score = parseFloat(user.todayScore || user.score);

  return <ScoreChart score={score} />;
}

Score.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Score;
