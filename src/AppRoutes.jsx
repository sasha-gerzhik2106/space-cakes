import { Routes, Route } from "react-router";
import routes from './constants/routes'
import CommonLayout from "~/layouts/common/CommonLayout";

import HomePage from "~/pages/Home/Home";
import CakesPage from "~/pages/Cakes/Cakes";
import Contactpage from "./pages/Contacts/Contact";
import Ingridients from "./pages/ingridients/Ingredients";
const AppRoutes = () => (
  <Routes>
    <Route  element={<CommonLayout />}>
      <Route path={routes.home} element={<HomePage />}/>
      <Route path={routes.cakes} element={<CakesPage />} />
      <Route path={routes.contacts} element={<Contactpage/>}/>
      <Route path={routes.ingridients} element={<Ingridients/>}/>
    </Route>
  </Routes>
);

export default AppRoutes;
