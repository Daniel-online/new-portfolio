import PropTypes from "prop-types"

const Button = ({onClick, disabled, icon, className, children}) => {
  return (
    <button title="button" type="button"
        onClick={onClick}
        className={`${className}`}
        disabled={disabled}
    >
        {icon}
        {children}
    </button>

  )
}

Button.propTypes={
    onClick: PropTypes.func.isRequired, // Function prop
    children: PropTypes.node.isRequired, // React node prop
    icon: PropTypes.any,
    className: PropTypes.string,          // String prop (optional)
    disabled: PropTypes.bool               // Boolean prop (optional)
}
export default Button
