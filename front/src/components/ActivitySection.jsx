import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import getUserActivityApi from "../services/getUserActivityApi";
import ActivityTooltip from "./ActivityTooltip";

/**
 * Composant pour afficher l'activité quotidienne de l'utilisateur sous forme de graphique à barres.
 *
 * Ce composant récupère les données d'activité pour un utilisateur spécifique et les affiche en utilisant
 * un graphique à barres. Les barres représentent le poids (kg) et les calories brûlées (kCal) avec des
 * couleurs distinctes. Un tooltip personnalisé affiche des détails supplémentaires lors du survol des barres.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel les données d'activité sont récupérées.
 * @returns {JSX.Element} - Un élément JSX contenant le graphique à barres et les icônes associées.
 */
function ActivitySection({ userId }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetching = async () => {
      const activity = await getUserActivityApi(userId);
      console.log("Activity data:", activity);
      setData(
        activity.map((item, index) => ({
          ...item,
          num: index + 1,
        }))
      );
    };

    setIsLoading(true);
    setError(null);
    fetching()
      .catch((e) => {
        setError("Failed to fetch activity data");
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return <div>Chargement des données d&apos;activité</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section className="activity">
      <header className="header">
        <h1 className="title">Activité quotidienne</h1>
        <div className="legend">
          <span>
            <span className="circle circle-weight"></span> Poids (kg)
          </span>
          <span>
            <span className="circle circle-calorie"></span> Calories brûlées
            (kCal)
          </span>
        </div>
      </header>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="num"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dy={15}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount={4}
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14 }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip content={ActivityTooltip} />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

ActivitySection.propTypes = {
  userId: PropTypes.number,
};

export default ActivitySection;
