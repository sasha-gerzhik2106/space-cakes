import { Link } from "react-router";

import routes from "~/constants/routes";

import spImage from "~/images/photo-cake/sp.jpg";
import "./hero.css";

export default function Hero() {
  return (
    <section className="section-one">
      <p className="title-name outer">Кохання у кожному шматочку</p>
      <div className="hero-box">
        <img className="catalog-img" src={spImage} alt="sp" />
        <div className="hero-box__info">
          <p className="title-name inner">Кохання у кожному шматочку</p>
          <Link to={routes.cakes}>
            <button className="catalog-button">Перейти до каталогу</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
