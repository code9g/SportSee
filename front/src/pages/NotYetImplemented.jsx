/**
 * Composant pour afficher que la fonctionnalité n'a pas encore été implémentée
 *
 * @component
 * @returns {JSX.Element}
 */
function NotYetImplemented() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontWeight: 700,
          fontSize: "5rem",
          textAlign: "center",
        }}
      >
        Cette fonctionnalité n&apos;a pas
        <br />
        encore été mise en place
      </p>
    </div>
  );
}

export default NotYetImplemented;
