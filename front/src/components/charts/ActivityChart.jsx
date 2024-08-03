import PropTypes from "prop-types";
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
import { activityUnits } from "../../utils/consts";

/**
 * Objet représentant les données d'une activité (kg et kCal)
 *
 * @typedef {Object} ActivityDataObject
 * @property {number} kilogram Le poids en kg
 * @property {number} calories Les calories en kCal
 * @property {number} day L'indice du jour
 */

/**
 * Ce composant affiche les données d'activité sous forme de graphique à barres.
 * Les barres représentent le poids (kg) et les calories brûlées (kCal) avec des
 * couleurs distinctes. Un tooltip personnalisé affiche des détails supplémentaires
 * lors du survol des barres.
 *
 * @component
 * @param {{data: Array.<ActivityDataObject>}} props Les propriétés du composant.
 * @param {Array.<ActivityDataObject>} props.data Les données d'activité à afficher.
 * @returns {JSX.Element} Un élément JSX contenant le graphique à barres et les icônes associées.
 */
function ActivityChart({ data }) {
  return (
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
          dataKey="day"
          tickLine={false}
          axisLine={{ stroke: "#dedede" }}
          tick={{ stroke: "#9b9eac", fontWeight: 400 }}
          dy={14}
        />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          stroke="#282d30"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tick={{ stroke: "#9b9eac", fontWeight: "400" }}
          type="number"
          domain={["dataMin - 5", "auto"]}
          dx={14}
        />
        <YAxis
          yAxisId="calories"
          orientation="left"
          stroke="#e60000"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          hide={true}
          domain={["dataMin - 50", "auto"]}
          dx={-16}
        />
        <Tooltip content={ActivityCustomTooltip} />
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
  );
}

/**
 * Ce composant affiche des informations contextuelles dans un tooltip lorsque la
 * souris est sur un élément du graphique. Il gère les unités pour différents types
 * de données (poids, calories, etc.).
 *
 * @private
 * @component
 * @param {{payload: Array.<Object>}} props Les propriétés du composant.
 * @param {Array<Object>} props.payload Les données associées au tooltip, chaque entrée contient la valeur et la clé de données.
 * @param {boolean} props.active Indique si le tooltip est actif (affiché).
 * @returns {JSX.Element|null} Un élément `div` avec les informations du tooltip si `active` est vrai et `payload` contient des données, sinon `null`.
 */
function ActivityCustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="tooltip">
        {payload.map(({ dataKey, value }, index) => (
          <p key={index}>
            {value}
            {activityUnits[dataKey.toLowerCase()] ?? ""}
          </p>
        ))}
      </div>
    );
  }

  return null;
}

ActivityCustomTooltip.propTypes = {
  payload: PropTypes.array,
  active: PropTypes.bool,
};

ActivityChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ActivityChart;
