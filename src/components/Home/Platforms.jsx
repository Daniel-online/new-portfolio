import Hero from "../Content/Hero"
// import thumbHero from "/assets/Pages/yellow/thumb-plataforms.jpg"
const Platforms = () => {
    return (
        <div>
            <Hero
                id="platforms"
                title=""
                data={[]}

                hasButton={true}
                hasText={true}

                bgImage={thumbHero}
                scrollRef="beneficios"
                scrollStyle={""}

                titleStyle={"transition transform ease-in-out delay-100 text-border-lg border-white text-5xl h-1/2  text-yellow-500 font-bold"}
                style={"px-6 bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen  overflow-hidden place-content-center w-screen"}

            />
        </div>
    )
}

export default Platforms
