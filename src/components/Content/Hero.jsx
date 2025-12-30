import PropTypes from "prop-types";
import ScrollButton from "../Buttons/ScrollButton";
// import BackgroundVideo from "./BackgroundVideo";

const Hero = ({
  id,
  title,
  data = [],
  style = "",
  titleStyle = "",
  subTitleStyle = "",
  textStyle = "",
  hasButton = false,
  hasText = false,
  spanStyle = "",
  bgImage,
  scrollRef,
  scrollStyle = "",
}) => {
  return (
    <div
      id={id}
      className={`relative w-full flex flex-col items-center justify-center overflow-hidden ${style}`}
    >
      {/* ✅ Image layer (keeps full image visible, maintains aspect ratio) */}
      {bgImage && (
        <img
          src={bgImage}
          alt={title || "hero background"}
          className="w-full h-auto object-contain max-h-screen"
        />
      )}

      {/* ✅ Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h2 className={`${titleStyle}`}>{title}</h2>

        {hasText &&
          data.map((item, index) => (
            <span className={spanStyle} key={index}>
              {item.subTitle && (
                <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
              )}
              {item.text && <p className={`${textStyle}`}>{item.text}</p>}
            </span>
          ))}

        {hasButton && <ScrollButton style={scrollStyle} href={scrollRef} />}
      </div>
    </div>
  );
};


Hero.propTypes = {
  title: PropTypes.string.isRequired,
  style: PropTypes.string, // Style should be a string for Tailwind classes
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subTitle: PropTypes.string,
      text: PropTypes.string,
      button: PropTypes.string,
      link: PropTypes.string,
      imageUrlUrl: PropTypes.string,
    }),
  ),
  textStyle: PropTypes.string,
  scrollStyle: PropTypes.string,
  component: PropTypes.string,
  id: PropTypes.string,
  hasButton: PropTypes.bool,
  bgImage: PropTypes.string,
  scrollRef: PropTypes.string,
  spanStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
  titleStyle: PropTypes.string,
  hasText: PropTypes.bool
}
export default Hero
