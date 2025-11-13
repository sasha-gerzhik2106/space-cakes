import { Routes, Route } from "react-router";

import CommonLayout from "~/layouts/common/CommonLayout";

import HomePage from "~/pages/Home/Home";
import CakesPage from "~/pages/Cakes/Cakes";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<CommonLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/cakes" element={<CakesPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
