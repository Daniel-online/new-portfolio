import PropTypes from "prop-types";

const TextBreaker = ({ text = "", style = "" }) => {
  if (!text || !String(text).trim()) return null;

  const paragraphs = String(text)
    .split(/\n+/)
    .map(p => p.trim())
    .filter(Boolean);

  return (
    <>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className={`
            ${style}
            text-justify
            leading-relaxed
            tracking-wide
            text-sm
            sm:text-base
            mb-3
          `}
          style={{
            textAlign: "justify",
            textJustify: "inter-word",
            hyphens: "auto",
            WebkitHyphens: "auto",
            MozHyphens: "auto",
          }}
        >
          {p}
        </p>
      ))}
    </>
  );
};

TextBreaker.propTypes = {
  text: PropTypes.string,
  style: PropTypes.string,
};

export default TextBreaker;
