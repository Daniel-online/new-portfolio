import PropTypes from "prop-types";


const Thumbnail = (
  { title,
    data,
    style,
    titleStyle,
    subTitleStyle,
    textStyle,
    hasButton,
    spanStyle }
) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  if (hasButton==true) {
    return (
      <div className={`${style} `}>
        <h2 className={`${titleStyle}`}>{title}</h2>
        {data.map((item, index) => {
          return <span className={spanStyle} key={index}>
            <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
            <a href={item.link}>{item.button}</a>
          </span>
        }
        )}
      </div>
    )
  }
  else {
    return (
      <div className={`${style} `}>
        <h2 className={`${titleStyle}`}>{title}</h2>
        {data.map((item, index) => {
          return <span className={spanStyle} key={index}>
            <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
            <p className={`${textStyle}`}>{item.text}</p>
          </span>
        }
        )}
      </div>
    )
  }
}

Thumbnail.propTypes = {
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
  hasButton: PropTypes.bool,
  spanStyle: PropTypes.string,
  subTitleStyle: PropTypes.string,
  titleStyle: PropTypes.string // Marked as required to ensure it's always provided

}
export default Thumbnail
