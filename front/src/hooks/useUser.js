import { useContext } from "react";
import UserContext from "../contexts/UserContext";

/**
 * Hook de retournant le contexte UserContext
 *
 * @returns {React.Context} Retourne le contexte de UserContext
 */
const useUser = () => useContext(UserContext);

export default useUser;
