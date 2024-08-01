import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import KeyMetricsSection from "../components/KeyMetricsSection";
import ScoreSection from "../components/ScoreSection";
import getUserApi from "../services/getUserApi";

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
        <div className="charts">
          <KeyMetricsSection userId={user.id} />
          <ScoreSection userId={user.id} />
        </div>
      </div>
    </>
  );
}

UserDevelopper.propTypes = {
  id: PropTypes.number,
};

export default UserDevelopper;
