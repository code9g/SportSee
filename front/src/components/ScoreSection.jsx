import PropTypes from "prop-types";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.user - L'utilisateur pour lequel afficher le score.
 *
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function ScoreSection({ user }) {
  const score = parseFloat(user.todayScore || user.score);

  const data = [{ name: "Score", value: score }];

  return (
    <section className="score">
      <h3 className="title">Score</h3>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="0%"
          outerRadius="0%"
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            data={[{ value: 1 }]}
            dataKey="value"
            barSize={140}
            fill="#ffffff"
            isAnimationActive={false}
          />
          <RadialBar
            dataKey="value"
            barSize={5}
            cornerRadius={100}
            fill="#FF0000"
          />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="label">
        <p className="percent">{Math.round(100 * score)} %</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </section>
  );
}

ScoreSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ScoreSection;
