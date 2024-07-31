import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Profil from "./pages/Profil";

function App() {
  const defaultUserId = 12;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Navigate to="/profil" />} />
            <Route path="profil" element={<Profil id={defaultUserId} />} />
          </Route>
          <Route path="/user/:id">
            <Route path="" element={"Développeur"} />
            <Route path="activity" element={"Activité"} />
            <Route path="average-sessions" element={"Average Sessions"} />
            <Route path="performance" element={"performance"} />
          </Route>
          <Route path="*" element={"Error 404"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
