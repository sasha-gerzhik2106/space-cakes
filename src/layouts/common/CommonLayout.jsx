import { Outlet } from "react-router";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

import "./CommonLayout.css";


const CommonLayout = () => (
  <>
    <Header />
    <div className="common-layout">
      <Outlet />
    </div>
    <Footer />
  </>
);

export default CommonLayout;
