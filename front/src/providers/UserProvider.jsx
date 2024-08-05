import PropTypes from "prop-types";
import UserContext from "../contexts/UserContext";

/**
 * Composant de mise en place d'un provider du contexte UserContext,
 * afin de "partager" les données d'un utilisateur, en évitant le "props drilling"
 *
 * @component
 * @param {{ user: Object, children: any }} props
 * @param {Object} props.user
 * @param {any} props.children
 * @returns {JSX.Element} Retourne le provider du contexte UserContext avec ses enfants
 */
function UserProvider({ user, children }) {
  const value = { user };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.any,
};

export default UserProvider;
