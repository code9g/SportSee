import { URL_API } from "../utils/consts";

/**
 * Fonction asynchrone générique permettant de récuperer des données en
 * fonction de l'identifiant de l'utilisateur (id) et du chemin (endpoints)
 * pour interroger un service
 *
 * @async
 * @param {number} id Identifiant de l'utilisateur
 * @param {boolean} mocked Indique si les données doivent être "mocké"
 * @param {string} endpoints Endpoints de l'API REST
 * @param {Array} args Liste des arguments à inclure dans l'appel de l'api
 * @returns {Promesse} Retourne une promesse
 */
const fetchApi = async (id, mocked, endpoints, ...args) =>
  fetch(
    mocked
      ? `/user/${id}/${endpoints}.json`
      : `${URL_API}/user/${id}/${endpoints}`,
    ...args
  )
    .then((response) => response.json())
    .then((json) => json?.data);

export default fetchApi;
