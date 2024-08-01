import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";
import getUserApi from "../services/getUserApi";

/**
 * Composant pour afficher le score utilisateur sous forme de graphique radial.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.userId - L'identifiant de l'utilisateur pour lequel afficher le score.
 *
 * @returns {JSX.Element} Le composant affichant le score radial de l'utilisateur.
 */
function ScoreSection({ userId }) {
  const [score, setScore] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchting = async () => {
      const user = await getUserApi(userId);
      setScore(100 * parseFloat(user.todayScore || user.score));
    };

    setIsLoading(true);
    setError("");
    fetchting()
      .catch((e) => {
        setError("Failed to fetch user data");
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [userId]);

  if (isLoading) {
    return <div>Chargement des données en cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const data = [{ name: "Score", value: score / 100 }];

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
        <p className="percent">{score} %</p>
        <p>de votre</p>
        <p>objectif</p>
      </div>
    </section>
  );
}

ScoreSection.propTypes = {
  userId: PropTypes.number,
};

export default ScoreSection;
