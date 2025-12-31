import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Typewriter = ({ text, delay, infinite }) => {

  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(
    () => {
      let timeout;

      if (currentIndex <= text.length) {
        timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
      }else if (infinite == true) {
        setCurrentIndex(0);
        setCurrentText('');
      }
      return () => clearTimeout(timeout);

    }, [currentIndex, delay, text, infinite]);

  return <span>{currentText}</span>;

}

Typewriter.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
  infinite: PropTypes.bool.isRequired
}

Typewriter.defaultProps = {
  text: '',
  delay: 100,
  infinite: true
}

export default Typewriter;
