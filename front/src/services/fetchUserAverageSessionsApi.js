import fetchApi from "./fetchApi";

/**
 * Fonction API permettant de récuperer des données sur la durée moyenne
 * des sessions d'un utilisateur
 *
 * Cette fonction permet de récupérer les données sur la durée moyenne des sessions
 * d'un utilisateur en fonction de son identifiant
 *
 * @param {Number} userId - Identifiant de l'utilisateur
 *
 * @returns {Promesse} - Retourne une promesse
 */
const fetchUserAverageSessionsApi = async (userId) =>
  fetchApi(userId, "/average-sessions").then((average) => average?.sessions);

export default fetchUserAverageSessionsApi;
