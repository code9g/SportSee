import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import getUserApi from "../services/getUserApi";

function Profil({ id }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    getUserApi(id)
      .then((user) => {
        setUser(user);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <>En chargement</>;
  }

  if (!user) {
    return <>Pas de donnée utilisateur</>;
  }

  return (
    <>
      <div>{user && user.userInfos.firstName}</div>
    </>
  );
}

Profil.propTypes = {
  id: PropTypes.number,
};

export default Profil;
