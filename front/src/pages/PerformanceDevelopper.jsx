import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PerformanceSection from "../components/PerformanceSection";
import getUserApi from "../services/getUserApi";
import getUserPerformanceApi from "../services/getUserPerformanceApi";

const kinds = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};

function PerformanceDevelopper() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [performance, setPerformance] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingAll = async () => {
      const user = await getUserApi(parseInt(id, 10));
      const performance = await getUserPerformanceApi(user.id);
      setUser(user);
      setPerformance(performance);
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
            Données de performance concernant l&apos;utilisateur&nbsp;:
            <br />
            <span className="first-name">
              {user.userInfos.firstName} ({user.id})
            </span>
          </h2>
        </div>
        <table style={{ width: "100%", border: "1px solid green" }}>
          <caption>Average-Sessions</caption>
          <thead>
            <tr>
              <th scope="col">kind</th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            {performance.data.map((item, index) => (
              <tr key={index}>
                <td>
                  {item.kind} - {kinds[item.kind]} (
                  {performance.kind[item.kind]})
                </td>
                <td>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <PerformanceSection userId={user.id} />
      </div>
    </>
  );
}

export default PerformanceDevelopper;
