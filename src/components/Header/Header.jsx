import { Link } from "react-router";
import MenuButton from "../Bmenu/MenuButton";

import routes from "~/constants/routes";

import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to={routes.home} className="brand-title">
          Space Cakes
        </Link>
        <ul className="nav-menu">
          <li className="nav-li">Каталог</li>
          <li className="nav-li">Контакти</li>
          <li className="nav-li">Інгрідієнти</li>
        </ul>

        <MenuButton className="border-menu" id="border-button">
          🍰
        </MenuButton>
      </div>
    </header>
  );
}
