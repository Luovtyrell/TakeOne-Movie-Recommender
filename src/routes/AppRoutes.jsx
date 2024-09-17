import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import CounterPage from "../pages/counterPage/CounterPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CounterPage" element={<CounterPage />} />
    </Routes>
  );
}

export default AppRoutes;
