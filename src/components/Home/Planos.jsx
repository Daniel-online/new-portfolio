import Carousel from "../Content/Carousel"
import VoidHero from "../Content/VoidHero"
import voidData from "./../../Data/voidData.json"
import imgUrl from "/testHero.jpeg"

const Planos = () => {
  return (
    <div id="planos">


      <VoidHero
        title={"Nossos Planos"}
        data={voidData}
        hasButton={true}
        bgImage={''}
        scrollRef="navbar"
        titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-7xl h-1/5 text-yellow-500 font-bold"}
        style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center"}
        component={<Carousel style="transform drop-shadow-md transition delay-100 hover:drop-shadow-2xl p-4 rounded-xl flex flex-col items-center h-auto "/>}
        componentStyle={"flex flex row items-center place-content-center justify-evenly"}
/>

    </div>
  )
}

export default Planos
