import { Link } from "react-router";
import MenuButton from "../Bmenu/MenuButton";
import { menuItems } from "../Bmenu/menu-items";
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
          {menuItems.map((item) => (
                            <li key={item.title}>
                              <Link to={item.pathname}>
                              {item.title}
                              </Link>
                              </li>
                          ))}
        </ul>

        <MenuButton className="border-menu" id="border-button">
          🍰
        </MenuButton>
      </div>
    </header>
  );
}
