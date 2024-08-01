import { useParams } from "react-router-dom";
import Error from "../components/Error";
import Profil from "./Profil";

function Developper() {
  const { id } = useParams();

  return /$\d+^/.test(id) ? (
    <Profil id={parseInt(id, 10)} />
  ) : (
    <Error message="Identifiant d'utilisateur non valide" />
  );
}

export default Developper;
