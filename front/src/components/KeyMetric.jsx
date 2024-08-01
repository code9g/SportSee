import PropTypes from "prop-types";

/**
 * Composant pour afficher une métrique de l'utilisateur.
 *
 * Ce composant affiche une métrique de l'utilisateur.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {String} props.label - L'intitulé de la métrique.
 * @param {Number} props.value - La valeur de la métrique
 * @param {Object} props.icon - L'icône de la métrique
 * @param {String} props.unit - L'unité de la métrique
 * @returns {JSX.Element} - Un élément JSX contenant la métrique.
 */
export default function KeyMetric({ label, value, icon, unit }) {
  return (
    <article className="category">
      <img className="icon" src={icon} alt={`Icone de ${label}`} />
      <div className="content">
        <p className="value">
          {value.toLocaleString("en-US")}
          {unit}
        </p>
        <h4 className="title">{label}</h4>
      </div>
    </article>
  );
}

KeyMetric.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
  icon: PropTypes.object,
  unit: PropTypes.string,
};
