import { Route, Routes } from "react-router-dom";
import Side1 from "../pages/side1";
import Side2 from "../pages/side2";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Side1/>} />
      <Route path="/side2" element={<Side2/>} />
    </Routes>
  );
};

export default AppRoutes;