import "./../styles-css/header.css";
import MenuButton from "./Bmenu/MenuButton";
import { menuItems } from "./Bmenu/menu-items";
import { useState } from "react";
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="header-container">
        <a href="#" className="brand-title">
          Space Cakes
        </a>
        <ul className="nav-menu">
          <li className="nav-li">Каталог</li>
          <li className="nav-li">Контакти</li>
          <li className="nav-li">Інгрідієнти</li>
        </ul>

        <MenuButton className="border-menu" id="border-button">
          {" "}
          🍰
        </MenuButton>
      </div>
    </header>
  );
}
