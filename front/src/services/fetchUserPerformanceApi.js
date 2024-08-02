import fetchApi from "./fetchApi";

/**
 * Fonction API permettant de récuperer des données sur la performance d'un
 * utilisateur
 *
 * Cette fonction permet de récupérer les données sur la performance d'un
 * utilisateur en fonction de son identifiant
 *
 * @async
 * @param {number} userId Identifiant de l'utilisateu
 * @returns {Promesse} Retourne une promesse
 */
const fetchUserPerformanceApi = async (userId, ...args) =>
  fetchApi(userId, "/performance", ...args);

export default fetchUserPerformanceApi;
