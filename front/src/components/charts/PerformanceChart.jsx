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

/**
 * Tableau définiant les données de performance
 * @typedef {Object} PerformanceDataObject
 * @property {number} value Indice de la performance
 * @property {string} kind Libellé de la performance
 */

/**
 * Composant pour afficher les performances de l'utilisateur sous forme de graphique radar.
 *
 * @component
 * @param {{data: Array.<PerformanceDataObject>}} props Les propriétés du composant.
 * @param {Array.<PerformanceDataObject>} props.data Les données de performance à afficher.
 * @returns {JSX.Element} - Un élément JSX contenant le graphique radar.
 */
function PerformanceChart({ data }) {
  return (
    <section className="performance">
      <ResponsiveContainer width="100%" height={260}>
        <RadarChart outerRadius="70%" data={data}>
          <PolarGrid radialLines={false} stroke="#ffffff" />
          <PolarAngleAxis
            dataKey="kind"
            tickLine={false}
            tick={PerformanceCustomTick}
          />
          <PolarRadiusAxis axisLine={false} tick={false} tickLine={false} />
          <Radar dataKey="value" stroke="none" fill="rgba(255, 1, 1, 0.70)" />
        </RadarChart>
      </ResponsiveContainer>
    </section>
  );
}

/**
 * Composant de tick personnalisé pour afficher des informations sur le
 * type (kind) dans <Text>, permettant d'espacer le texte du radar
 *
 * @private
 * @component
 * @param {{payload: Array<Object>, x: number, y: number, cx: number, cy: number}} props Les propriétés du composant.
 * @param {{value: string}} props.payload Les données associées au tooltip, chaque entrée contient la valeur et la clé de données.
 * @param {string} props.payload.value L'intitulé du tooltip
 * @param {number} props.x La coordonnée en x du text
 * @param {number} props.y La coordonnée en y du text
 * @param {number} props.cx Le centre du graphique en x
 * @param {number} props.cy Le centre du graphique en y
 * @returns {JSX.Element} Un élément `div` avec les informations du tooltip si `active` est vrai et `payload` contient des données, sinon `null`.
 */
function PerformanceCustomTick({ payload, x, y, cx, cy, ...rest }) {
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
      {payload.value}
    </Text>
  );
}

PerformanceCustomTick.propTypes = {
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
