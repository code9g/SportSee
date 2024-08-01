import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import ActivityDevelopper from "./pages/ActivityDevelopper";
import AverageDevelopper from "./pages/AverageDevelopper";
import NotFound from "./pages/NotFound";
import NotYetImplemented from "./pages/NotYetImplemented";
import PerformanceDevelopper from "./pages/PerformanceDevelopper";
import Profil from "./pages/Profil";
import UserDevelopper from "./pages/UserDevelopper";

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
              <Route path="" element={<UserDevelopper />} />
              <Route path="activity" element={<ActivityDevelopper />} />
              <Route path="average-sessions" element={<AverageDevelopper />} />
              <Route path="performance" element={<PerformanceDevelopper />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
