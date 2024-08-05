import fetchApi from "./fetchApi";

/**
 * Fonction asynchrone permettant de récuperer des données d'un utilisateur
 * en fonction de son identifiant (id).
 *
 * @async
 * @param {number} id Identifiant de l'utilisateur
 * @param {boolean} mocked Indique si les données doivent être "mocké"
 * @param {Array} args Liste des arguments à inclure dans l'appel de l'api
 * @returns {Promesse} Retourne une promesse
 */
const fetchUserApi = async (id, mocked, ...args) =>
  fetchApi(id, mocked, "", ...args);

export default fetchUserApi;
