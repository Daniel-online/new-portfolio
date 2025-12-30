import PropTypes from "prop-types"

const Action = ({
    id,
    title,
    style,
    buttonStyle,
    bgImage,
    href
}) => {

    const backgroundStyle = bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {};

    const handleClick = (e) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const navbar = document.querySelector('nav');
                const navbarHeight = navbar?.offsetHeight || 0;

                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
        console.log("Action clicked:", href);

    };

    return (
        <div id={id} className={`flex items-center justify-center ${style}`} style={backgroundStyle}>
            <a
                href={href}
                className={buttonStyle}
                onClick={handleClick} // 👈 must be on the <a>
            >
                {title}
            </a>

        </div>
    )
}

Action.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string.isRequired,
    style: PropTypes.string,
    id: PropTypes.string,
    bgImage: PropTypes.string,
    buttonStyle: PropTypes.string,
}

export default Action