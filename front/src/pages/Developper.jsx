import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Profil from "./Profil";

/**
 * Composant pour afficher la page de profil d'un utilisateur via la route /user:id pour vérifier
 * le profil d'un autre utilisateur par le développeur ou le testeur.
 *
 * @component
 * @returns {JSX.Element}
 */
function Developper() {
  const { id } = useParams();
  return /^\d+$/.test(id) ? (
    <Profil id={parseInt(id, 10)} />
  ) : (
    <Error message="Identifiant d'utilisateur non valide" />
  );
}

export default Developper;
