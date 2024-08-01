import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivitySection from "../components/ActivitySection";
import getUserActivityApi from "../services/getUserActivityApi";
import getUserApi from "../services/getUserApi";

function ActivityDevelopper() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingAll = async () => {
      const user = await getUserApi(parseInt(id, 10));
      const activity = await getUserActivityApi(user.id);
      setUser(user);
      setActivity(activity);
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
            Données d&apos;activité concernant l&apos;utilisateur&nbsp;:
            <br />
            <span className="first-name">
              {user.userInfos.firstName} ({user.id})
            </span>
          </h2>
        </div>
        <div>
          <table style={{ width: "100%", border: "1px solid green" }}>
            <caption>Activity</caption>
            <thead>
              <tr>
                <th scope="col">day</th>
                <th scope="col">kilogram (kg)</th>
                <th scope="col">calories (kCal)</th>
              </tr>
            </thead>
            <tbody>
              {activity.map((item, index) => (
                <tr key={index}>
                  <td>{item.day}</td>
                  <td>{item.kilogram}</td>
                  <td>{item.calories}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ActivitySection userId={user.id} />
      </div>
    </>
  );
}

export default ActivityDevelopper;
