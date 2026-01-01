import PropTypes from "prop-types";
import TextBreaker from "./TextBreaker";
import Action from "../Buttons/Action";

const Cards = ({
  cardData,
  style,
  imageStyle,
  id,
  buttonTitle,
  buttonStyle,
  actionStyle,
  buttonImage,
  buttonRef,
}) => {
  return (
    <>
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`${style} transform hover:scale-105 drop-shadow-md transition delay-100 hover:drop-shadow-2xl rounded-xl flex flex-col `}
        >
          {/* Container de imagem proporcional */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-xl ">
            <img
              className={`${imageStyle} absolute top-0 left-0 w-full h-full object-cover`}
              src={card.image}
              alt={card.alt}
              loading="lazy"
            />
          </div>

          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-bold text-lg sm:text-xl font-extrabold mb-1 text-center">
              {card.title}
            </h3>
            <h5 className="font-semibold mb-4 text-center">{card.subTitle}</h5>

            {/* Área de texto com scroll se necessário */}
            <div className="flex-grow mb-4 overflow-y-auto max-h-48 pr-2 scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent scrollable">
              {/* descrição — TextBreaker cuida da justificação/estilização do texto */}
              <TextBreaker
                text={card.description}
                wordsPerParagraph={50}
                style={"text-white italic"}
              />
              <TextBreaker
                text={card.benefits}
                wordsPerParagraph={50}
                style={"text-white font-semibold"}
              />
            </div>

            <div className="mt-auto">
              <Action
                id={id}
                title={buttonTitle}
                style={actionStyle}
                buttonStyle={buttonStyle}
                bgImage={buttonImage}
                href={buttonRef[index]?.link || "#"}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

Cards.propTypes = {
  cardData: PropTypes.array,
  style: PropTypes.string,
  imageStyle: PropTypes.string,
  id: PropTypes.string,
  buttonTitle: PropTypes.string,
  buttonStyle: PropTypes.string,
  actionStyle: PropTypes.string,
  buttonImage: PropTypes.string,
  buttonRef: PropTypes.array,
};

export default Cards;
