import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Developper from "./pages/Developper";
import NotFound from "./pages/NotFound";
import NotYetImplemented from "./pages/NotYetImplemented";
import Profil from "./pages/Profil";
import Setting from "./pages/Setting";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Navigate to="/profil" />} />
            <Route path="home" element={<NotYetImplemented />} />
            <Route path="profil" element={<Profil />} />
            <Route path="setting" element={<Setting />} />
            <Route path="forum" element={<NotYetImplemented />} />

            <Route path="user/:id" element={<Developper />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
