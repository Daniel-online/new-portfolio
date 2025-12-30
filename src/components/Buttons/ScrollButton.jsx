import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { MdOutlineArrowCircleDown } from "react-icons/md";
// import { HashLink } from 'react-router-hash-link';
const ScrollButton = (
    {
        href,
        style
    }
) => {

    const handleClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Element with id "${href}" not found.`);
        }
    };

    return (
        <a className={`z-0 rounded-full bottom-8 transition`} href={`#${href}`} onClick={handleClick}>
            < IoMdHeart
                className={`transition  size-24  hover:bg-opacity-30 hover:bg-white animate-bounce rounded-full  bg-cover ${style}`}
            />
        </a>
    )

}
ScrollButton.propTypes = {
    href: PropTypes.string,
    style: PropTypes.string
}
export default ScrollButton
