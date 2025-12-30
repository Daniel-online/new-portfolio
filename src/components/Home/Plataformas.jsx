import PropTypes from "prop-types"
import Grid from "../Content/Grid"
import ScrollButton from "../Buttons/ScrollButton"
import Text from "../Content/Text"
import heroTestData from "./../../Data/heroTestData.json"
import AnimatedDiv from "../Animated/AnimatedDiv"
const Plataformas = (
  { id,
    style,
    scrollStyle,
    scrollRef,
    sideImage,
    // bgImage,
    imageAlt,
    imageStyle
  }) => {
  return (
    <div id={id} className={`${style}`}>
      <div className=" grid grid-rows-1 grid-cols-2">
        <div className="flex justify-center place-content-center ">
          <img src={sideImage} alt={imageAlt} className={imageStyle}></img>
        </div>
        <div className=" z-1 grid grid-rows-2">
          <Text
            style={'bg-red-500'}
            data={heroTestData}
            title={''}
            titleStyle={''}
            spanStyle={''}
            subTitleStyle={''}
          ></Text>
          {/* <AnimatedDiv>
            <h1 className="text-white text-2xl">I appear from the right!</h1>
          </AnimatedDiv> */}
          <Grid style="bg-green-500" />
        </div>
      </div>


      <div className={scrollStyle}>
        <ScrollButton href={scrollRef} />
      </div>
    </div>
  )
}

Plataformas.propTypes = {
  id: PropTypes.string,
  style: PropTypes.string,
  bgImage: PropTypes.string,
  imageAlt: PropTypes.string,
  imageStyle: PropTypes.string,
  sideImage: PropTypes.string,
  scrollRef: PropTypes.string,
  scrollStyle: PropTypes.string,
}
export default Plataformas
