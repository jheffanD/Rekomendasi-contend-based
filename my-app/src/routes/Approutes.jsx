import { Route, Routes } from "react-router-dom";
import Side1 from "../pages/side1";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Side1/>} />
      {/* <Route path="/" element={} /> */}
    </Routes>
  );
};

export default AppRoutes;