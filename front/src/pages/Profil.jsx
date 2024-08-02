import PropTypes from "prop-types";
import Activity from "../components/Activity";
import Average from "../components/Average";
import Error from "../components/Error";
import KeyMetrics from "../components/KeyMetrics";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import Performance from "../components/Performance";
import Score from "../components/Score";
import useFetch from "../hooks/useFetch";
import UserProvider from "../providers/UserProvider";
import fetchUserApi from "../services/fetchUserApi";

/**
 * Composant pour afficher la page de profil d'un utilisateur.
 *
 * Ce composant récupère les données d'un utilisateur spécifique et affiche les informations et les graphiques.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {number} props.id Id de l'utilisateur.
 * @returns {JSX.Element} Un élément JSX contenant la page de profil.
 */
function Profil({ id }) {
  const {
    isLoading,
    error,
    data: user,
  } = useFetch(id, fetchUserApi, "user", null);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!user) {
    return <NoData />;
  }

  const sections = [
    { name: "metrics", element: <KeyMetrics /> },
    { name: "activity", element: <Activity /> },
    { name: "average", element: <Average /> },
    { name: "performance", element: <Performance /> },
    { name: "score", element: <Score /> },
  ];

  return (
    <UserProvider user={user}>
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
          {sections.map(({ name, element }, index) => (
            <section key={index} className={`${name}-section`}>
              {element}
            </section>
          ))}
        </div>
      </div>
    </UserProvider>
  );
}

Profil.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Profil;
