import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AverageSection from "../components/AverageSection";
import getUserApi from "../services/getUserApi";
import getUserAverageSessionsApi from "../services/getUserAverageSessionsApi";

function AverageDevelopper() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [average, setAverage] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingAll = async () => {
      const user = await getUserApi(parseInt(id, 10));
      const average = await getUserAverageSessionsApi(user.id);
      setUser(user);
      setAverage(average);
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
            Données de la durée des sessions concernant
            l&apos;utilisateur&nbsp;:
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
              <th scope="col">day</th>
              <th scope="col">sessionLength (mn)</th>
            </tr>
          </thead>
          <tbody>
            {average.map((item, index) => (
              <tr key={index}>
                <td>{["L", "M", "M", "J", "V", "S", "D"][item.day - 1]}</td>
                <td>{item.sessionLength}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <AverageSection userId={user.id} />
      </div>
    </>
  );
}

export default AverageDevelopper;
