import PropTypes from "prop-types";
import { useState } from "react";
import AppContext from "../contexts/AppContext";

/**
 * Composant de mise en place d'un provider du contexte AppContext,
 * afin de "partager" les données globales, en évitant le "props drilling"
 *
 * @component
 * @param {{ children: any }} props
 * @param {any} props.children
 * @returns {JSX.Element} Retourne le provider du contexte AppContext avec ses enfants
 */
function AppProvider({ children }) {
  const [defaultProfilId, setDefaultProfilId] = useState(18);
  const [isMock, setIsMock] = useState(false);

  const value = {
    defaultProfilId,
    setDefaultProfilId,
    isMock,
    setIsMock,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.any,
};

export default AppProvider;
