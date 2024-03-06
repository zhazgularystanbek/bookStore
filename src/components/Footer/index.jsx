import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <h1>BOOKShop</h1>
          <div className="contact_1">
            <h3>Способ оплаты</h3>
            <h3>Условия доставки</h3>
            <h3>Правила покупки</h3>
          </div>
          <div className="contact_2">
            <h3>FAQ</h3>
            <h3>О нас</h3>
          </div>
          <div className="contact_3">
            <h3>Связаться с нами:</h3>
            <h3>+996 222 533 735</h3>
            <h3>+996 222 533 735</h3>
            <h3>+996 222 533 735</h3>
            <div className="icons">
              <InstagramIcon className="icon" />
              <TelegramIcon className="icon" />
              <WhatsAppIcon className="icon" />
              <FacebookIcon className="icon" />
            </div>
          </div>
          <div className="contact_4">
            <h3>Адрес</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in
              dolor viverra feugiat neque, sed in. Mattis volutpat malesuada
              velit parturient aliquam, est. Mauris vitae velit laoreet faucibus
              nec amet velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
