import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import getUserPerformanceApi from "../services/getUserPerformanceApi";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";
import PerformanceTick from "./PerformanceTick";

/**
 * Composant pour afficher les performances de l'utilisateur sous forme de graphique radar.
 *
 * Ce composant récupère les données de session pour un utilisateur spécifique et les affiche en utilisant
 * un graphique radar.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.user - L'utilisateur pour lequel les données de performance sont récupérées.
 * @returns {JSX.Element} - Un élément JSX contenant le graphique radar.
 */
function PerformanceSection({ user }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getUserPerformanceApi(user.id)
      .then((performance) => {
        console.log("Performance data:", performance.data);
        setData(
          performance.data
            .map((item) => ({
              value: item.value,
              kind: item.kind,
            }))
            .reverse()
        );
      })
      .catch((e) => {
        setError("Failed to fetch performance data");
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!data || data.length === 0) {
    return <NoData />;
  }

  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart outerRadius="70%" data={data}>
          <PolarGrid radialLines={false} stroke="#ffffff" />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={PerformanceTick}
          />
          <PolarRadiusAxis axisLine={false} tick={false} tickLine={false} />
          <Radar dataKey="value" stroke="none" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

PerformanceSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PerformanceSection;
