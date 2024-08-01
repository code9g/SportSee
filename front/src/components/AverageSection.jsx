import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dayOfWeek from "../consts/dayOfWeek";
import useFetch from "../hooks/useFetch";
import fetchUserAverageSessionsApi from "../services/fetchUserAverageSessionsApi";
import AverageTooltip from "./AverageTooltip";
import Error from "./Error";
import Loading from "./Loading";
import NoData from "./NoData";

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

  const data = average.map((item, index) => ({
    ...item,
    num: index + 1,
  }));

  return (
    <section className="average">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
        >
          <defs>
            <linearGradient id="line-gradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
            </linearGradient>
          </defs>
          <text
            x={10}
            y={30}
            textAnchor="left"
            style={{
              fontSize: "1.5rem",
              fontWeight: 500,
              fill: "#ffffff",
              fillOpacity: "0.5",
            }}
          >
            Durée moyenne des sessions
          </text>
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#ffffff", fillOpacity: "50%" }}
            stroke="#ffffff"
            tickMargin={10}
            tickFormatter={(day) => dayOfWeek[day - 1].short}
          />
          <YAxis
            dataKey="sessionLength"
            hide={true}
            domain={["dataMin - 10", "dataMax + 20"]}
          />
          <Line
            dataKey="sessionLength"
            type="natural"
            stroke="url(#line-gradient)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{
              stroke: "#FFFFFF",
              strokeOpacity: "50%",
              strokeWidth: 10,
            }}
          />
          <Tooltip
            content={AverageTooltip}
            cursor={{
              stroke: "#000000",
              strokeOpacity: "10%",
              strokeWidth: "20%",
              height: "100%",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

AverageSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AverageSection;
