import PropTypes from "prop-types"
import { HiOutlineStar } from "react-icons/hi2";
import { GoRuby } from "react-icons/go";

const Licenses = ({ licenseData, licenseStyle }) => {

  return (
    <div>
      {licenseData.map((item, index) => {
        <>
          <span key={index}
            className={`${item.size}+${licenseStyle}`}
          >{item.license}</span>
          <div className={item.iconStyle}>
            {item.premium ? <GoRuby /> : <HiOutlineStar />}
          </div>
        </>
      })}
    </div>
  )


}
Licenses.propTypes = {
  licenseData: PropTypes.arrayOf(
    PropTypes.shape({
      license: PropTypes.string.isRequired,
      size: PropTypes.string,
      premium: PropTypes.bool,
      iconStyle: PropTypes.string,
    })),

  licenseStyle: PropTypes.string
}

export default Licenses
