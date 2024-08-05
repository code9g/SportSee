import fetchApi from "./fetchApi";

/**
 * Fonction asynchrone permettant de récuperer des données sur la durée moyenne
 * des sessions d'un utilisateur en fonction de son identifiant (userId)
 *
 * @async
 * @param {number} userId Identifiant de l'utilisateur
 * @param {Array} args Liste des arguments à inclure dans l'appel de l'api
 * @returns {Promesse} Retourne une promesse
 */
const fetchUserAverageSessionsApi = async (userId, ...args) =>
  fetchApi(userId, "average-sessions", ...args).then(
    (average) => average?.sessions
  );

export default fetchUserAverageSessionsApi;
