import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import MoodProvider from "./context/MoodProvider";

function App() {
  return (
    <MoodProvider>
      <Router>
        <AppRoutes />
      </Router>
    </MoodProvider>
  );
}

export default App;
