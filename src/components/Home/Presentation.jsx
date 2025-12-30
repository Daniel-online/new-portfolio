import Hero from "../Content/Hero"
// import imgUrl from "./../../../public/assets/Pages/purple/thumb-comercial-1.jpg"
// import heroTestData from "./../../Data/heroTestData.json"


const Presentation = () => {
  return (
    <div className="flex flex-col" id="presentation">
      <Hero
        id="presentation"
        title={""}
        data={[]}

        hasButton={true}
        hasText={true}

        bgImage={imgUrl}
        scrollRef={"platforms"}
        scrollStyle={"bottom"}
        titleStyle={"text-border-lg border-white text-7xl h-1/2 text-yellow-500 font-bold"}

        subTitleStyle={"text-5xl items-center flex flex-col content-center w-1/2 text-white font-bold"}
        textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
        //altere aqui o posicionamento dos items, evite usar spanStyle
        style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center w-screen"}
        spanStyle={"rounded-xl bg-opacity-70  bg-yellow-600 outline outline-white items-center flex flex-col content-center h-1/2 w-1/2 place-content-center"}

      />

    </div>
  )
}

export default Presentation
