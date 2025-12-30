import PropTypes from "prop-types"
const Media = ({image}) => {
  return (
    <div>
      <img src={image} alt="media"></img>
    </div>
  )
}
Media.propTypes={
  image: PropTypes.object
}
export default Media
