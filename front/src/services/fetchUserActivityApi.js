import fetchApi from "./fetchApi";

/**
 * Fonction API permettant de récuperer des données de l'activité d'un utilisateur
 *
 * Cette fonction permet de récupérer les données de l'activité d'un utilisateur
 * en fonction de son identifiant.
 *
 * @async
 * @param {number} userId Identifiant de l'utilisateur
 * @returns {Promesse} Retourne une promesse
 */
const fetchUserActivityApi = async (userId) =>
  fetchApi(userId, "/activity").then((activity) => activity.sessions);

export default fetchUserActivityApi;
