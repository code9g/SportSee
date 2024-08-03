import PropTypes from "prop-types";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

/**
 * Composant pour afficher le score sous forme de graphique radial.
 *
 * @component
 * @param {{score: number}} props Les propriétés du composant.
 * @param {number} props.score Le score à afficher.
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function ScoreChart({ score }) {
  const data = [{ name: "Score", value: score }];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="0%"
        outerRadius="0%"
        data={data}
        startAngle={90}
        endAngle={450}
      >
        <text x="0%" y="5%" fontSize="1.5rem" fontWeight={500}>
          Score
        </text>
        <RadialBar
          data={[{ value: 1 }]}
          dataKey="value"
          barSize={150}
          fill="#ffffff"
          isAnimationActive={false}
        />
        <RadialBar
          dataKey="value"
          barSize={10}
          cornerRadius={100}
          fill="#FF0000"
        />
        <text
          textAnchor="middle"
          fontSize="1.6rem"
          fontWeight={500}
          fill="#74798C"
        >
          <tspan
            x="50%"
            y="47%"
            fontSize="2.6rem"
            fontWeight={700}
            fill="#282D30"
          >
            {Math.round(score * 100)}%
          </tspan>
          <tspan x="50%" y="57%">
            de votre
          </tspan>
          <tspan x="50%" y="67%">
            objectif
          </tspan>
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

ScoreChart.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ScoreChart;
