import PropTypes from "prop-types"
const Text = (
    {
        style,
        data,
        title,
        titleStyle,
        spanStyle,
        subTitleStyle }
) => {

    return (
        <div className={style}>
            <h2 className={titleStyle}>{title}</h2>
            {data.map((item, index) => {
                return <>
                    <span className={spanStyle} key={index}>
                        <h4 className={`${subTitleStyle}`}>{item.subTitle}</h4>
                        <a href={item.link}>{item.button}</a>
                    </span>
                </>
            }
            )}
        </div>
    )
}
Text.propTypes = {
    style: PropTypes.string,
    bgImage: PropTypes.string,
    imageAlt: PropTypes.string,
    sideImage: PropTypes.string,
    data: PropTypes.array,

    title: PropTypes.string,
    titleStyle: PropTypes.string,
    spanStyle: PropTypes.string,
    subTitleStyle: PropTypes.string
}
export default Text
