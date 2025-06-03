  import { Routes, Route } from "react-router-dom";
  import Side1 from "../pages/side1";
  import Side2 from "../pages/side2";
  import Side3 from "../pages/side3";
  import Side4 from "../pages/side4";
  import RecommendationResult from "../pages/RecommendationResult";

  const AppRoutes = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="Home">
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
              </div>
            </>
          }
        />
        <Route path="/result" element={<RecommendationResult />} />
      </Routes>
    );
  };

  export default AppRoutes;
