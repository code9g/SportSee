import useUser from "../hooks/useUser";
import { metrics } from "../utils/consts";
import KeyMetric from "./KeyMetric";
import NoData from "./NoData";

/**
 * Composant pour afficher les métriques de l'utilisateur.
 *
 * Note: Il nécessite d'être utilisé dans un contexte "UserContext"
 *
 * @component
 * @returns {JSX.Element} Un élément JSX contenant les métriques.
 */
function KeyMetrics() {
  const { user } = useUser();

  if (!user.keyData) {
    return <NoData />;
  }

  return (
    <div className="metrics">
      {metrics.map(({ key, label, icon, unit }, index) => (
        <KeyMetric
          key={index}
          label={label}
          icon={icon}
          unit={unit}
          value={user.keyData[key]}
        />
      ))}
    </div>
  );
}

export default KeyMetrics;
