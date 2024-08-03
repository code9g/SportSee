import useUser from "../hooks/useUser";
import NoData from "./NoData";
import ScoreChart from "./charts/ScoreChart";

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @component
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function Score() {
  const { user } = useUser();

  if (user.todayScore === undefined && user.score === undefined) {
    return <NoData />;
  }

  const score = parseFloat(user.todayScore || user.score);

  return <ScoreChart score={score} />;
}

export default Score;
