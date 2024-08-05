import { Link } from "react-router-dom";
import useApp from "../hooks/useApp";

/**
 * Composant pour afficher la page de réglage
 *
 * @component
 * @returns {JSX.Element} Un élément JSX contenant la page de réglage.
 */
function Setting() {
  const { defaultProfilId, setDefaultProfilId, isMock, setIsMock } = useApp();

  const users = [
    { id: 12, name: "Karl" },
    { id: 18, name: "Cecilia" },
  ];

  return (
    <div className="setting container">
      <section>
        <h2 className="title">Général</h2>
        <div className="input-group">
          <label htmlFor="mocked">Utiliser les données locales</label>
          <label className="switch">
            <input
              id="mocked"
              type="checkbox"
              value={isMock}
              onChange={() => setIsMock((curr) => !curr)}
              checked={isMock}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="userid">Utilisateur par défaut (Profil)</label>
          <select
            id="userid"
            value={defaultProfilId}
            onChange={(e) => {
              console.log(e.target.value);
              setDefaultProfilId(parseInt(e.target.value, 10));
            }}
          >
            <option value="12">Karl</option>
            <option value="18">Cécilia</option>
          </select>
        </div>
      </section>
      <section>
        <h2 className="title">Développeur</h2>
        <div>
          {users.map((user) => (
            <p key={user.id}>
              Aller vers{" "}
              <Link style={{ color: "red" }} to={`/user/${user.id}`}>
                {`/user/${user.id}`}
              </Link>{" "}
              --- {user.name}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Setting;
