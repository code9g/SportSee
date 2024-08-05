import PropTypes from "prop-types";
import Activity from "../components/Activity";
import Average from "../components/Average";
import Error from "../components/Error";
import KeyMetrics from "../components/KeyMetrics";
import Loading from "../components/Loading";
import NoData from "../components/NoData";
import Performance from "../components/Performance";
import Score from "../components/Score";
import useApp from "../hooks/useApp";
import useFetch from "../hooks/useFetch";
import UserProvider from "../providers/UserProvider";
import fetchUserApi from "../services/fetchUserApi";

/**
 * Objet définisant une section
 *
 * @typedef {Object} SectionObject
 * @property {string} name Préfixe à utiliser pour définir la classe de la section (*-section)
 * @property {JSX.Element} element L'élément JSX à placer dans la section
 */

/**
 * Tableau pour générer les sections à afficher
 *
 * @type {Array.<SectionObject>}
 */
const sections = [
  { name: "metrics", element: <KeyMetrics /> },
  { name: "activity", element: <Activity /> },
  { name: "average", element: <Average /> },
  { name: "performance", element: <Performance /> },
  { name: "score", element: <Score /> },
];

/**
 * Composant pour afficher la page de profil d'un utilisateur en récupérant ses données
 * par le biais de son identifiant (id) et afficher les informations et les graphiques
 * le concernant
 *
 * @component
 * @param {{id: number}} props Les propriétés du composant.
 * @param {number} [props.id] Id de l'utilisateur.
 * @returns {JSX.Element} Un élément JSX contenant la page de profil.
 */
function Profil({ id }) {
  const { defaultProfilId } = useApp();

  if (id === undefined) {
    id = defaultProfilId;
  }

  const {
    isLoading,
    isAborted,
    error,
    data: user,
  } = useFetch(id, fetchUserApi, "user", null);

  if (isLoading || isAborted) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!user) {
    return <NoData />;
  }

  return (
    <UserProvider user={user}>
      <div className="profil container">
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
  id: PropTypes.number,
};

export default Profil;
