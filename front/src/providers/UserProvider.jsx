import PropTypes from "prop-types";
import UserContext from "../contexts/UserContext";

/**
 * Composant de mise en place d'un provider du contexte UserContext
 *
 * Permet de "partager" les données d'un utilisateur (user) à tous ses enfants (children)
 *
 * @param {{ user: Object; children: any; }} props
 * @param {Object} props.user
 * @param {*} props.children
 * @returns {JSX.Element} Retourne un JSX élément du provider du contexte UserContext avec ses enfants
 */
function UserProvider({ user, children }) {
  const value = { user };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserProvider;
