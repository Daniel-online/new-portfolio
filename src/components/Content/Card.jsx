import PropTypes from "prop-types";
import Action from "../Buttons/Action";

const Card = ({
  subTitle,
  title,
  text,
  image,
  alt,
  style,
  imageStyle,
  textStyle,
  id,
  buttonTitle,
  buttonStyle,
  actionStyle,
  buttonImage,
  buttonRef,
}) => {
  return (
    <>

      <div

        className={`${style} transform hover:scale-105 drop-shadow-md transition delay-100 hover:drop-shadow-2xl rounded-xl flex flex-col `}
      >
        {/* Container de imagem proporcional */}
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl ">
          <img
            className={`${imageStyle} absolute top-0 left-0 w-full h-full object-cover`}
            src={image}
            alt={alt}
            loading="lazy"
          />
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="font-bold text-lg sm:text-xl font-extrabold text-red-600 mb-1 text-center">
            {title}
          </h3>
          <h5 className="font-semibold mb-4 text-center">{subTitle}</h5>

          {/* Área de texto com scroll se necessário */}
          <div className="flex-grow mb-4 overflow-y-auto max-h-48 pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent scrollable">
            <div className={`text-center leading-relaxed text-sm sm:text-base whitespace-pre-line ${textStyle || ""}`}>{text}</div>
          </div>

          <div className="mt-auto">
            <Action
              id={id}
              title={buttonTitle}
              style={actionStyle}
              buttonStyle={buttonStyle}
              bgImage={buttonImage}
              href={buttonRef || "#"}
            />
          </div>
        </div>
      </div>
      
    </>
  );
};

Card.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  textStyle: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  cardData: PropTypes.array,
  style: PropTypes.string,
  imageStyle: PropTypes.string,
  id: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonStyle: PropTypes.string,
  actionStyle: PropTypes.string,
  buttonImage: PropTypes.string,
  buttonRef: PropTypes.string,
};

export default Card;
