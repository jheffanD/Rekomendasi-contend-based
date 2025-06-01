import { Routes, Route } from "react-router-dom";
import Side1 from "../pages/side1";
import Side2 from "../pages/side2";
import Side3 from "../pages/side3";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Side1 />} />
      <Route path="/side2" element={<Side2 />} />
      <Route path="/side3" element={<Side3 />} />
    </Routes>
  );
};

export default AppRoutes;
