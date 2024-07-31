import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import ActivitySection from "../components/ActivitySection";
import AverageSection from "../components/AverageSection";
import PerformanceSection from "../components/PerformanceSection";
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
        <section className="score"></section>
        <section className="key"></section>
      </div>
    </>
  );
}

Profil.propTypes = {
  id: PropTypes.number,
};

export default Profil;
