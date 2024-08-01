import calorieIcon from "../assets/icons/calorie.svg";
import carbohydrateIcon from "../assets/icons/carbohydrate.svg";
import lipidIcon from "../assets/icons/lipid.svg";
import proteinIcon from "../assets/icons/protein.svg";

const keys = [
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

export default keys;
