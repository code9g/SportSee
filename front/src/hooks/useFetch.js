import { useEffect, useState } from "react";

/**
 * Hook de gestion du fetch des données
 *
 * Ce hook permet de gérer le chargement, les erreurs et les données à récupèrer
 *
 * @param {Number} id - L'identifiant de l'utilisateur
 * @param {Function} api - L'api a utiliser pour récupèrer les données
 * @param {String} title - Titre informatif des données pour l'affichage des données et des erreurs dans la console
 * @param {Object|Array<Object>|Null} defaultData - Données par défaut
 *
 * @returns {Object} - Un objet contenant isLoading, error et data
 */
function useFetch(id, api, title, defaultData = []) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    api(id)
      .then((data) => {
        setData(data);
        console.log(`Données '${title}':`, data);
      })
      .catch((e) => {
        setError(`Echec de chargement des données '${title}' `);
        console.error(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id, title, api]);

  return { data, isLoading, error };
}

export default useFetch;
