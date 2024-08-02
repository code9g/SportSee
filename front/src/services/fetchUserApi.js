import fetchApi from "./fetchApi";

/**
 * Fonction API permettant de récuperer des données d'un utilisateur
 *
 * Cette fonction permet de récupérer les données d'un utilisateur
 * en fonction de son identifiant.
 * Note: C'est un alias de fetchApi !
 *
 * @async
 * @param {number} id Identifiant de l'utilisateur
 * @returns {Promesse} Retourne une promesse
 */
const fetchUserApi = async (id, ...args) => fetchApi(id, "", ...args);

export default fetchUserApi;
