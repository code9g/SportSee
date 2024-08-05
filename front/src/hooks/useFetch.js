import { useEffect, useState } from "react";

/**
 * L'objet retournée par la fonction useFetch
 *
 * @typedef {Object} UseFetchObject
 * @property {any} data
 *    Les Les données récupérées ou la valeur par défaut
 * @property {boolean} isLoading
 *    Indicateur de chargement en cours
 * @property {boolean} isAborted
 *    Indicateur d'annulation du chargement (est déclenché lorsque le
 *    composant est démonté, c'est souvent le cas avec le strict mode,
 *    qui effectue deux montage du composant)
 * @property {?string} error
 *    Contient le message d'erreur ou null si il n'y pas eu d'erreur
 */

/**
 * Hook de gestion du fetch des données en gérant le chargement, les erreurs
 * et les données à récupèrer :
 *
 *   - data      : Les données récupérées ou la valeur par défaut
 *   - isLoading : Indicateur de chargement en cours
 *   - isAborted : Indicateur d'annulation du chargement (est déclenché lorsque le
 *                 composant est démonté, c'est souvent le cas avec le strict mode,
 *                 qui effectue deux montage du composant)
 *   - error : Contient le message d'erreur ou null
 *
 * @param {number} id Identifiant de l'utilisateur
 * @param {function} fetcher Fonction asynchrone pour récupèrer les données (async)
 * @param {string} title Titre informatif des données pour l'affichage des données et des erreurs dans la console
 * @param {*} defaultData Données à utiliser par défaut
 * @returns {UseFetchObject} Un objet
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
          setError(`Echec de chargement des données !`);
          console.error(e);
          setIsAborted(false);
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
