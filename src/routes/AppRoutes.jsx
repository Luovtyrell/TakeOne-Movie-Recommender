import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import FiltersPage from "../pages/FiltersPage/FiltersPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filters" element={<FiltersPage />} />
    </Routes>
  );
}

export default AppRoutes;
