import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
// import Side1 from "../src/pages/side1.jsx";
// import Side2 from "./pages/side2.jsx";
// import Side3 from "./pages/side3.jsx";
// import Side4 from "./pages/side4.jsx";
import AppRoutes from "./routes/Approutes.jsx";

function App() {
  return (
    <div className="bg-white " id="top">
      <Navbar />
      <AppRoutes />
      {/* <div id="Home">
        <Side1 />
      </div>
      <div id="recomend">
        <Side2 />
      </div>
      <div id="list">
        <Side3 />
      </div>
      <div id="about">
        <Side4 />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
