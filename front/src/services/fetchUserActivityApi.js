import fetchApi from "./fetchApi";

/**
 * Fonction asynchrone permettant de récuperer des données de l'activité d'un utilisateur
 * en fonction de son identifiant (userId)
 *
 * @async
 * @param {number} userId Identifiant de l'utilisateur
 * @param {boolean} mocked Indique si les données doivent être "mocké"
 * @param {Array} args Liste des arguments à inclure dans l'appel de l'api
 * @returns {Promesse} Retourne une promesse
 */
const fetchUserActivityApi = async (userId, mocked, ...args) =>
  fetchApi(userId, mocked, "activity", ...args).then(
    (activity) => activity.sessions
  );

export default fetchUserActivityApi;
