import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound";
import NotYetImplemented from "./pages/NotYetImplemented";
import Profil from "./pages/Profil";

function App() {
  const defaultUserId = 18;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Navigate to="/home" />} />
            <Route path="home" element={<NotYetImplemented />} />
            <Route path="profil" element={<Profil id={defaultUserId} />} />
            <Route path="setting" element={<NotYetImplemented />} />
            <Route path="forum" element={<NotYetImplemented />} />

            <Route path="user/:id">
              <Route path="" element={"Développeur"} />
              <Route path="activity" element={"Activité"} />
              <Route path="average-sessions" element={"Average Sessions"} />
              <Route path="performance" element={"performance"} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
