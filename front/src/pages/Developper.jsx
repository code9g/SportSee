import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Profil from "./Profil";

/**
 * Composant pour afficher la page de profil d'un utilisateur via sa route pour le développeur.
 *
 * Ce composant récupère la route dont le développeur veut afficher les données d'un utilisateur.
 * Note: Ce composant n'est là que pour permettre au développeur d'observer le rendu des différents
 *       utilisateurs via la route /user/:id
 *
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
