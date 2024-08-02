import PropTypes from "prop-types";
import UserContext from "../contexts/UserContext";

function UserProvider({ user, children }) {
  const value = { user };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserProvider;
