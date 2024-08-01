import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import calorieIcon from "../assets/icons/calorie.svg";
import carbohydrateIcon from "../assets/icons/carbohydrate.svg";
import lipidIcon from "../assets/icons/lipid.svg";
import proteinIcon from "../assets/icons/protein.svg";
import getUserApi from "../services/getUserApi";
import KeyMetric from "./KeyMetric";

const categories = [
  { label: "Calories", unit: "kCal", icon: calorieIcon, key: "calorieCount" },
  { label: "Proteines", unit: "g", icon: proteinIcon, key: "proteinCount" },
  {
    label: "Glucides",
    unit: "g",
    icon: carbohydrateIcon,
    key: "carbohydrateCount",
  },
  { label: "Lipides", unit: "g", icon: lipidIcon, key: "lipidCount" },
];

/**
 * Composant pour afficher les métriques de l'utilisateur.
 *
 * Ce composant récupère les données de session pour un utilisateur spécifique et les affiche.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel les données de performance sont récupérées.
 * @returns {JSX.Element} - Un élément JSX contenant les métriques.
 */
function KeyMetricsSection({ userId }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const metrics = (await getUserApi(userId))?.keyData;
      setData(metrics);
    };

    setIsLoading(true);
    setError(null);
    fetching()
      .catch((e) => {
        setError("Failed to fetch metrics data");
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return <div>Chargement des données</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="metrics">
      {categories.map(({ key, label, icon, unit }, index) => (
        <KeyMetric
          key={index}
          label={label}
          icon={icon}
          unit={unit}
          value={data[key]}
        />
      ))}
    </section>
  );
}

KeyMetricsSection.propTypes = {
  userId: PropTypes.number,
};

export default KeyMetricsSection;
