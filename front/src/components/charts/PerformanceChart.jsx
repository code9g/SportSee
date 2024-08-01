import PropTypes from "prop-types";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Text,
} from "recharts";
import kinds from "../../consts/kinds";

/**
 * Composant pour afficher les performances de l'utilisateur sous forme de graphique radar.
 *
 * Ce composant affiche les données de performance en utilisant un graphique radar.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Objet>} props.data - Les données de performance à afficher.
 *
 * @returns {JSX.Element} - Un élément JSX contenant le graphique radar.
 */
function PerformanceChart({ data }) {
  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart outerRadius="70%" data={data}>
          <PolarGrid radialLines={false} stroke="#ffffff" />
          <PolarAngleAxis dataKey="kind" tickLine={false} tick={CustomTick} />
          <PolarRadiusAxis axisLine={false} tick={false} tickLine={false} />
          <Radar dataKey="value" stroke="none" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

/**
 * Composant de tick personnalisé pour afficher des informations sur le type.
 *
 * Ce composant affiche des informations sur le type (kind) dans un <Text>, permettant d'espacer le texte du radar
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {Array<Object>} props.payload - Les données associées au tooltip, chaque entrée contient la valeur et la clé de données.
 * @param {Number} props.x - La coordonnée en x du text
 * @param {Number} props.y - La coordonnée en y du text
 * @param {Number} props.cx - Le centre du graphique en x
 * @param {Number} props.cy - Le centre du graphique en y
 *
 * @returns {JSX.Element} - Un élément `div` avec les informations du tooltip si `active` est vrai et `payload` contient des données, sinon `null`.
 */
function CustomTick({ payload, x, y, cx, cy, ...rest }) {
  return (
    <Text
      {...rest}
      verticalAnchor="middle"
      y={y + (y - cy) / 10}
      x={x + (x - cx) / 100}
      fill="#ffffff"
      fontSize="1.2rem"
      fontWeight={500}
    >
      {kinds[payload.value] ?? "???"}
    </Text>
  );
}

CustomTick.propTypes = {
  payload: PropTypes.object,
  x: PropTypes.number,
  y: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
  rest: PropTypes.object,
};

PerformanceChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default PerformanceChart;
