function NotFound() {
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
      <h2
        style={{
          fontWeight: 700,
          fontSize: "5rem",
          textAlign: "center",
          color: "#ff0101",
          marginBottom: "4rem",
        }}
      >
        Erreur 404
      </h2>
      <p
        style={{
          fontWeight: 700,
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        Avez-vous trouvé votre chemin ?
      </p>
    </div>
  );
}

export default NotFound;
