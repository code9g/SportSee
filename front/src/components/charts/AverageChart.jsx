import PropTypes from "prop-types";
import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

/**
 * Objet représentant une donnée moyenne
 *
 * @typedef {Object} AverageDataObject
 * @property {string} day Jour de la semaine
 * @property {number} sessionLength Durée moyenne de la session
 */

/**
 * Ce composant affiche les données de session en utilisant un graphique linéaire. La ligne représente
 * la durée des sessions, avec des détails supplémentaires affichés dans un tooltip personnalisé lors
 *  du survol de la ligne.
 *
 * @param {{data: Array.<AverageDataObject>}} props Les propriétés du composant.
 * @param {Array.<AverageDataObject>} props.data Les données à afficher
 * @returns {JSX.Element} Un élément JSX contenant le graphique linéaire et le titre associé.
 */
function AverageChart({ data }) {
  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        style={{ background: "#ff0101", borderRadius: "0.5rem" }}
        margin={{ top: 70, right: 20, bottom: 10, left: 20 }}
      >
        <defs>
          <linearGradient id="line-gradient">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="30%" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="100%" />
          </linearGradient>
        </defs>
        <text
          x="10%"
          y="15%"
          fontSize="1.5rem"
          fontWeight={500}
          width={100}
          fill="#ffffff"
          opacity={0.5}
        >
          Durée moyenne des
          <tspan x="10%" y="24%">
            sessions
          </tspan>
        </text>
        <Line
          type="natural"
          dataKey="sessionLength"
          dot={false}
          stroke="url(#line-gradient)"
          unit={"min"}
          strokeWidth={2}
          activeDot={{
            stroke: "#ffffff",
            strokeOpacity: "50%",
            strokeWidth: 6,
          }}
        />
        <YAxis hide domain={["dataMin - 15", "dataMax + 10"]} />
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          stroke="#ffffff"
          opacity={0.5}
          fontSize="1.2rem"
          fontWeight={500}
        />
        <Tooltip content={<CustomTooltip />} cursor={<AverageCustomCursor />} />
      </LineChart>
    </ResponsiveContainer>
  );
}

/**
 * Composant de tooltip personnalisé qui affiche une valeur avec l'unité "min"
 * (minutes) lorsqu'un utilisateur survole un élément du graphique.
 *
 * @param {{payload: Array<Object>, active: boolean}} props Les propriétés du composant.
 * @param {Array<Object>} props.payload Les données associées au tooltip. Chaque entrée contient une valeur à afficher.
 * @param {boolean} props.active Indique si le tooltip est actif (affiché).
 *
 * @returns {JSX.Element|null} Un élément `div` avec la valeur et l'unité "min" si `payload` contient des données, sinon `null`.
 */
function CustomTooltip({ payload, active }) {
  if (active && payload.length) {
    return (
      <div className="tooltip">
        <p className="value">{payload[0].value} min</p>
      </div>
    );
  }

  return null;
}

/**
 * Composant de curseur personnalisé
 *
 * @param {{points: Array<Object>}} params
 * @param {Array<Object>} points Un tableau de points contenant les coordoonnées x et y.
 * @returns {JSX.Element} A JSX element représentant le curseur personnalisé.
 */
function AverageCustomCursor({ points }) {
  return (
    <Rectangle
      width={1000}
      height={1000}
      x={points[0].x}
      y={0}
      style={{ background: "black", opacity: 0.1 }}
    />
  );
}

CustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

AverageCustomCursor.propTypes = {
  points: PropTypes.array,
};

AverageChart.propTypes = {
  data: PropTypes.array,
};

export default AverageChart;
