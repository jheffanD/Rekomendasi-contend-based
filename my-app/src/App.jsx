import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import AppRoutes from "./routes/Approutes.jsx";
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();
  const Hidenavbar = location.pathname === "/result";
  return (
    <div className="bg-white " id="top">
      {!Hidenavbar && <Navbar />}
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
