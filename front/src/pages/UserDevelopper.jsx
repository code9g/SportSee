import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import calorieIcon from "../assets/icons/calorie.svg";
import carbohydrateIcon from "../assets/icons/carbohydrate.svg";
import lipidIcon from "../assets/icons/lipid.svg";
import proteinIcon from "../assets/icons/protein.svg";
import KeyMetricsSection from "../components/KeyMetricsSection";
import ScoreSection from "../components/ScoreSection";
import getUserApi from "../services/getUserApi";

const categories = [
  { label: "Calories", unit: "kCal", icon: calorieIcon, key: "calorieCount" },
  { label: "Proteines", unit: "g", icon: proteinIcon, key: "proteinCount" },
  {
    label: "Glucides",
    unit: "g",
    icon: carbohydrateIcon,
    key: "carbohydrateCount",
  },
  { label: "Lipides", unit: "g", icon: lipidIcon, key: "lipidCount" },
];

function UserDevelopper() {
  const { id } = useParams();

  const [user, setUser] = useState(null);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingAll = async () => {
      const user = await getUserApi(parseInt(id, 10));
      setUser(user);
      console.log(user);
    };
    setIsLoading(true);
    setError(null);
    fetchingAll()
      .catch((e) => {
        setError("Failed to fetch user data");
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <>En chargement</>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <>Pas de donnée utilisateur</>;
  }

  return (
    <>
      <div className="container">
        <div className="info">
          <h2 className="title" style={{ textAlign: "center" }}>
            Données concernant l&apos;utilisateur&nbsp;:
            <br />
            <span className="first-name">
              {user.userInfos.firstName} ({user.id})
            </span>
          </h2>
        </div>
        <div>
          <table
            style={{
              width: "100%",
              border: "1px solid green",
              marginBottom: "2rem",
            }}
          >
            <thead>
              <tr>
                <th>key</th>
                <th>value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>todayScore</td>
                <td>{user.todayScore}</td>
              </tr>
              <tr>
                <td>score</td>
                <td>{user.score}</td>
              </tr>
              <tr>
                <td>firstName</td>
                <td>{user.userInfos.firstName}</td>
              </tr>
              <tr>
                <td>lastName</td>
                <td>{user.userInfos.lastName}</td>
              </tr>
              <tr>
                <td>age</td>
                <td>{user.userInfos.age}</td>
              </tr>
            </tbody>
          </table>
          <table
            style={{
              width: "100%",
              border: "1px solid green",
              marginBottom: "2rem",
            }}
          >
            <thead>
              <tr>
                <th scope="col">key</th>
                <th scope="col">icon</th>
                <th scope="col">label</th>
                <th scope="col">value</th>
                <th scope="col">unit</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <th scope="row">{category.key}</th>
                  <td>
                    <img src={category.icon} alt="" />
                  </td>
                  <td>{category.label}</td>
                  <td>{user.keyData[category.key]}</td>
                  <td>{category.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ display: "flex", gap: "4rem", justifyContent: "center" }}>
          <ScoreSection userId={user.id} />
          <KeyMetricsSection userId={user.id} />
        </div>
      </div>
    </>
  );
}

UserDevelopper.propTypes = {
  id: PropTypes.number,
};

export default UserDevelopper;
