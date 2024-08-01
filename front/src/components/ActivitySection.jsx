import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ActivityTooltip from "./ActivityTooltip";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import getUserActivityApi from "../services/getUserActivityApi";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";

/**
 * Composant pour afficher l'activité quotidienne de l'utilisateur sous forme de graphique à barres.
 *
 * Ce composant récupère les données d'activité pour un utilisateur spécifique et les affiche en utilisant
 * un graphique à barres. Les barres représentent le poids (kg) et les calories brûlées (kCal) avec des
 * couleurs distinctes. Un tooltip personnalisé affiche des détails supplémentaires lors du survol des barres.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Number} props.user - L'utilisateur pour les données d'activité sont récupérées.
 *
 * @returns {JSX.Element} - Un élément JSX contenant le graphique à barres et les icônes associées.
 */
function ActivitySection({ user }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getUserActivityApi(user.id ? user.id : null)
      .then((activity) => {
        console.log("Activity data:", activity);
        setData(
          activity.map((item, index) => ({
            ...item,
            num: index + 1,
          }))
        );
      })
      .catch((e) => {
        setError("Failed to fetch activity data");
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

  if (!data) {
    return <NoData />;
  }

  return (
    <section className="activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barGap={12} barSize={8}>
          <text
            x={0}
            y={20}
            textAnchor="left"
            style={{
              fontSize: "1.4rem",
              fontWeight: 500,
              fill: "#000000",
            }}
          >
            Activité quotidienne
          </text>

          <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
          <XAxis
            dataKey="num"
            tickLine={false}
            axisLine={{ stroke: "#DEDEDE" }}
            tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
            dy={14}
          />
          <YAxis
            yAxisId="kilogram"
            orientation="right"
            stroke="#282D30"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
            type="number"
            domain={["dataMin - 5", "auto"]}
            dx={14}
          />
          <YAxis
            yAxisId="calories"
            orientation="left"
            stroke="#E60000"
            axisLine={false}
            tickLine={false}
            tickCount={3}
            hide={true}
            domain={["dataMin - 50", "auto"]}
            dx={-16}
          />
          <Tooltip content={ActivityTooltip} />
          <Legend
            layout="horizontal"
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize="0.8rem"
            wrapperStyle={{
              paddingBottom: "4rem",
              fontSize: "1.5rem",
            }}
          />
          <Bar
            yAxisId="kilogram"
            name="Poids (kg)"
            dataKey="kilogram"
            unit="kg"
            fill="#282D30"
            radius={[20, 20, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            unit="kCal"
            fill="#e60000"
            radius={[20, 20, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

ActivitySection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ActivitySection;
