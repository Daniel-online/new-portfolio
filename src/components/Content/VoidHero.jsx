import PropTypes from "prop-types";
import ScrollButton from "../Buttons/ScrollButton";
const VoidHero = ({
    id,
    title,
    style,
    titleStyle,
    scrollRef,
    hasButton,
    bgImage,
    component,
    componentStyle
}) => {
    const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

    if (hasButton == true) {
        return (
            <div id={id} className={`${style}`} style={backgroundStyle}>
                <h2 className={`${titleStyle}`}>{title}</h2>
                <div className={componentStyle}>
                    {component}
                </div>

                <ScrollButton href={scrollRef} />
            </div>
        )
    }
    else {
        return (
            <div id={id} className={`${style}`} style={backgroundStyle}>
                <h2 className={`${titleStyle}`}>{title}</h2>
                {component}
            </div>
        )
    }
}
VoidHero.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.string,
    id: PropTypes.string,
    hasButton: PropTypes.bool,
    bgImage: PropTypes.string,
    scrollRef: PropTypes.string,
    titleStyle: PropTypes.string,
    component: PropTypes.object,
    componentStyle: PropTypes.string
}
export default VoidHero
