import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ActivitySection from "../components/ActivitySection";
import AverageSection from "../components/AverageSection";
import KeyMetricsSection from "../components/KeyMetricsSection";
import PerformanceSection from "../components/PerformanceSection";
import ScoreSection from "../components/ScoreSection";
import getUserAllApi from "../services/getUserAllApi";

function Profil({ id }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchingAll = async () => {
      try {
        const user = await getUserAllApi(id);
        setUser(user);
        console.log(user);
      } catch (e) {
        console.error(e);
      }
    };
    setIsLoading(true);
    fetchingAll().finally(() => {
      setIsLoading(false);
    });
  }, [id]);

  if (isLoading) {
    return <>En chargement</>;
  }

  if (!user) {
    return <>Pas de donnée utilisateur</>;
  }

  return (
    <>
      <div className="container">
        <h2 className="title-name">
          Bonjour{" "}
          <span className="primary-color">{user.userInfos.firstName}</span>
        </h2>
        <p className="info">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <ActivitySection userId={id} />
        <AverageSection userId={id} />
        <PerformanceSection userId={id} />
        <ScoreSection userId={id} />
        <KeyMetricsSection userId={id} />
      </div>
    </>
  );
}

Profil.propTypes = {
  id: PropTypes.number,
};

export default Profil;
