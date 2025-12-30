import { useEffect } from "react"
// import Footer from "../components/Footer/Footer"
// import Navbar from "../components/Navigation/Navbar"
// import footerData from "./../Data/footerData.json"
// import navbarData from "./../Data/navbarData.json"
import Hero from "./../components/Content/Hero"
// import imgUrl from "/assets/Pages/purple/thumb-hero-phone.jpg"
import SignUp from "../components/Forms/SignUp"

const Afiliate = () => {
    useEffect(() => {
        document.title = "Seja Afiliado"
    })
    return (
        <>
            {/* <Navbar
                data={navbarData}
            /> */}

            <div className=" items-center flex flex-row">
                <SignUp />
                <Hero
                    title={""}
                    data={[]}
                    hasButton={false}
                    bgImage={imgUrl}
                    titleStyle={"text-border-lg border-white text-7xl h-1/2 text-yellow-500 font-bold"}
                    subTitleStyle={"items-center flex flex-col content-center w-1/2 text-white font-bold"}
                    textStyle={"indent-2 line-clamp-3 break-words text-wrap overflow-auto text-clip h-24 w-1/2 place-content-center text-white font-semibold"}
                    style={"bg-gradient-to-b from-violet-500 to-violet-900 items-center flex flex-col content-center h-screen w-5/6 place-content-center  "}

                />
            </div>
            {/* <Footer
                data={footerData}
            /> */}
        </>
    )
}

export default Afiliate
