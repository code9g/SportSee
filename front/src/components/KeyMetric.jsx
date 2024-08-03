import PropTypes from "prop-types";

/**
 * Composant pour afficher une métrique de l'utilisateur.
 *
 * @component
 * @param {{label: string, value: number, icon: any, unit: string}} props Les propriétés du composant.
 * @param {string} props.label L'intitulé de la métrique.
 * @param {number} props.value La valeur de la métrique
 * @param {any} props.icon L'icône de la métrique
 * @param {string} props.unit L'unité de la métrique
 * @returns {JSX.Element} Un élément JSX contenant la métrique.
 */
function KeyMetric({ label, value, icon, unit }) {
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
  icon: PropTypes.any,
  unit: PropTypes.string,
};

export default KeyMetric;
