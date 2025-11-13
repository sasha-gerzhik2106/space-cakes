import Inst from "../../assets/instagram 2.svg";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <a href="tel:+380980517871" className="phone-number">
        Номер телефону: +380980517871
      </a>
      <a href="https://www.instagram.com/space_cakes_od/" className="instagram">
        <img src={Inst} alt="" />
      </a>
    </footer>
  );
}
