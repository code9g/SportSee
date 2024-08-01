import calorieIcon from "../assets/icons/calorie.svg";
import carbohydrateIcon from "../assets/icons/carbohydrate.svg";
import lipidIcon from "../assets/icons/lipid.svg";
import proteinIcon from "../assets/icons/protein.svg";

/**
 * Constante content l'url vers le service API REST
 *
 * @type {string}
 */
export const URL_API = "http://localhost:3000";

/**
 * Tableau d'objets contenant les unités associés au clé
 * Les clés correspondent au type d'unité
 *
 * @type {Object.<string, string>}
 */
export const activityUnits = { kilogram: "kg", calories: "kCal" };

/**
 * Objet contenant les abréviations des jours de la semaine.
 * Les clés correspondent aux numéros des jours (1: lundi, 2: mardi, etc.).
 *
 * @type {Object.<number, string>}
 */
export const dayOfWeek = {
  1: "L",
  2: "M",
  3: "M",
  4: "J",
  5: "V",
  6: "S",
  7: "D",
};

/**
 * Tableau d'objets décrivant les propriétés métriques.
 * Chaque objet mappe un libellé lisible à une clé technique utilisée dans un objet de données.
 *
 * @type {Array<Object>}
 **/
export const keys = [
  { label: "Calories", unit: "kCal", icon: calorieIcon, key: "calorieCount" },
  { label: "Proteines", unit: "g", icon: proteinIcon, key: "proteinCount" },
  {
    label: "Glucides",
    unit: "g",
    icon: carbohydrateIcon,
    key: "carbohydrateCount",
  },
  { label: "Lipides", unit: "g", icon: lipidIcon, key: "lipidCount" },
];

/**
 * Tableau d'objets contenant les labels associés à l'indice de la categorie
 * Les clés correspondent à l'indice de la catégorie (1: cardio, etc...)
 *
 * @type {Object.<Number, String>}
 **/
export const kinds = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};
