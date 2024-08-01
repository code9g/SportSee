import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ActivitySection from "../components/ActivitySection";
import AverageSection from "../components/AverageSection";
import Error from "../components/Error";
import KeyMetricsSection from "../components/KeyMetricsSection";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import PerformanceSection from "../components/PerformanceSection";
import ScoreSection from "../components/ScoreSection";
import getUserApi from "../services/getUserApi";

function Profil({ id }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    getUserApi(id)
      .then((user) => {
        setUser(user);
        console.log("User data:", user);
      })
      .catch((e) => {
        setError("Failed to fetch user data");
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!user) {
    return <NoData />;
  }

  return (
    <>
      <div className="container">
        <div className="info">
          <h2 className="title">
            Bonjour{" "}
            <span className="first-name">{user.userInfos.firstName}</span>
          </h2>
          <p className="message">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
        <div className="charts">
          <KeyMetricsSection user={user} />
          <ActivitySection user={user} />
          <AverageSection user={user} />
          <PerformanceSection user={user} />
          <ScoreSection user={user} />
        </div>
      </div>
    </>
  );
}

Profil.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Profil;
