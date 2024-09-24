import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ResultsPage from "../pages/ResultsPage/ResultsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
}

export default AppRoutes;
