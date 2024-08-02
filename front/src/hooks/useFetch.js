import { useEffect, useState } from "react";

/**
 * Hook de gestion du fetch des données
 *
 * Ce hook permet de gérer le chargement, les erreurs et les données à récupèrer
 *
 * @param {number} id L'identifiant de l'utilisateur
 * @param {function} fetcher L'API a utiliser pour récupèrer les données (async)
 * @param {string} title Titre informatif des données pour l'affichage des données et des erreurs dans la console
 * @param {*} defaultData Données par défaut
 * @returns {{data: *; isLoading: boolean; isAborted: boolean; error: ?string}} Un objet contenant isLoading, error et data
 */
function useFetch(id, fetcher, title, defaultData) {
  const [data, setData] = useState(defaultData);
  const [isLoading, setIsLoading] = useState(true);
  const [isAborted, setIsAborted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetcher(id, { signal: abortController.signal })
      .then((data) => {
        setData(data);
        setError(null);
        setIsAborted(false);
        console.log(`Données '${title}':`, data);
      })
      .catch((e) => {
        if (e instanceof DOMException && e.name === "AbortError") {
          setError(`Annulation du chargement des données '${title}' !`);
          console.warn(`Annulation du chargement des données '${title}' !`);
          setIsAborted(true);
        } else {
          setError(`Echec de chargement des données '${title}' !`);
          console.error(e);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      abortController.abort();
    };
  }, [id, title, fetcher]);

  return { data, isLoading, isAborted, error };
}

export default useFetch;
