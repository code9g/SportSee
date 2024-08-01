import { URL_API } from "../utils/consts";

/**
 *  Fonction API générique permettant de récuperer des données
 *
 * Cette fonction permet de récupérer les données en fonction de l'identifiant
 * de l'utilisateur (userId) et du chemin (path) pour interroger une API REST
 *
 * @async
 * @param {number} userId Identifiant de l'utilisateur
 * @param {string} [path=""] Endpoints de l'API REST
 * @returns {Promesse} Retourne une promesse
 */
const fetchApi = async (userId, path = "") =>
  fetch(`${URL_API}/user/${userId}${path}`)
    .then((response) => response.json())
    .then((json) => json?.data);

export default fetchApi;
