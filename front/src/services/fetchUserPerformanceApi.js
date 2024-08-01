import fetchApi from "./fetchApi";

/**
 * Fonction API permettant de récuperer des données sur la performance d'un
 * utilisateur
 *
 * Cette fonction permet de récupérer les données sur la performance d'un
 * utilisateur en fonction de son identifiant
 *
 * @param {Number} userId - Identifiant de l'utilisateur
 *
 * @returns {Promesse} - Retourne une promesse
 */
const fetchUserPerformanceApi = async (userId) =>
  fetchApi(userId, "/performance");

export default fetchUserPerformanceApi;
