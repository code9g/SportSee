import PropTypes from "prop-types";
import Average from "./Average";

/**
 * Composant pour afficher la durée moyenne des sessions de l'utilisateur sous forme de graphique linéaire
 * dans une section.
 *
 * @param {Object} props Les propriétés du composant.
 * @param {Object} props.user L'utilisateur pour lequel les données de session sont récupérées.
 * @returns {JSX.Element} Un élément JSX contenant le graphique linéaire et le titre associé.
 */
function AverageSection({ user }) {
  return (
    <section className="average">
      <Average user={user} />
    </section>
  );
}
AverageSection.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AverageSection;
