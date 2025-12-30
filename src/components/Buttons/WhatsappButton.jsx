import { FaWhatsapp } from "react-icons/fa";
import Button from "./Button";


const WhatsappButton = ({style}) => {
  const openChat = () => {
    window.open(
      "https://wa.me/+553191526244?text=Olá! Eu tenho interesse nas suas experiências de massoterapia.",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Button
      className={style}
      onClick={openChat}
      disabled={false}
      icon={<FaWhatsapp size={50} />}
    />
  );
};

import PropTypes from "prop-types";

WhatsappButton.propTypes = {
  style: PropTypes.string
};

export default WhatsappButton;
