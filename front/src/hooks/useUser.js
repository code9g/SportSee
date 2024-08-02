import { useContext } from "react";
import UserContext from "../contexts/UserContext";

/**
 * Hook de gestion du contexte UserContext
 *
 * @returns {React.Context}
 */
const useUser = () => useContext(UserContext);

export default useUser;
