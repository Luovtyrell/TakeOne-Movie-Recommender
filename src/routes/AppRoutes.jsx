import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import MovieDetail from "../components/MovieDetails/MovieDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<ResultsPage />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  );
}

export default AppRoutes;
