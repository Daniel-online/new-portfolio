import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"

import Action from "../components/Buttons/Action.jsx"
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import whatsappRef from "./../Data/whatsappRef.json";

// Use proper paths - adjust based on where Home.jsx is located

// import notebook from "./../../src/assets/src/assets/Comercial/other/notebook.jpg"
// import teamData from "./../components/Team/teamData.js";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
// import SideView from "../components/Content/SideView.jsx";
// import AboutUs from "./AboutUs.jsx";
// import Team from "../components/Team/Team.tsx";
import SideBackgroundVideo from "../components/Content/SideBackgroundVideo.jsx";
// import Scroller from "../components/Animated/Scroller.jsx";
import WhatsappButton from "../components/Buttons/WhatsappButton.jsx";
import { TypeAnimation } from "react-type-animation";
// import 

const Home = () => {
    useEffect(() => {
        document.title = "DANIEL IS ONLINE - Home";
    }, []);
    return (

        <div className="overflow-x-hidden">
            <WhatsappButton
                style="z-50 fixed bottom-5 right-5 flex items-center justify-center bg-green-500 text-white w-20 h-20 rounded-full"
            />
            <Navbar
                data={navbarData}
            />

            <SideBackgroundVideo
                title={<>
                            <TypeAnimation sequence={["Hello, i am Daniel", 4000, "Olá, eu sou Daniel", 4000, "Bonjour, je suis Daniel", 4000, "Hola soy Daniel", 4000, "こんにちは、私はダニエルです", 4000, "שלום, אני דניאל", 4000, "你好，我是丹尼尔", 4000, "مرحبا، أنا دانيال", 4000, "Привет, я Дэниел", 4000]}
                                speed={25}
                                deletionSpeed={20}
                                repeat={Infinity}
                                style={{ fontSize: '2em' }}>
                            </TypeAnimation>
                </>}
                text={
                    <div className="text-xl">
                        FULL-STACK DEVELOPER & NODE.JS {" "}
                        <span className="    italic text-bold
    bg-gradient-to-r from-pink-600 via--indigo-600 to-purple-600
    bg-clip-text text-transparent
    animate-gradient-x
    [background-size:200%_200%] ">
                             SPECIALIST
                        </span>
                        .<br /><br />
                        Massagem profissional, cuidado real e resultados imediatos, além de serviços exclusivos para elevar seu autocuidado ao nível que você merece.
                    </div>
                }
                actionLabel="CONHECER MAIS"
                actionHref="#sobre"
                sideDirection={false} // direita
            />
{/* 
            <AboutUs
                id="sobre">

            </AboutUs> */}
{/* 
            <Hero
                id="depoimentos"
                title=""
                data={[]}
                hasText={false}
                hasButton={false}
                bgImage={depoimentos}
                titleStyle="text-white text-4xl sm:text-6xl font-bold drop-shadow-lg"
                style="bg-black"
                scrollRef="#about"
                scrollStyle="text-white bg-red-500 hover:bg-black"
                spanStyle=""
            />



            <Scroller />

            <Team
                id="tratamentos"
                data={teamData}
                title={'EXPERIÊNCIAS DE MASSOTERAPIA'}
                titleStyle={`bg-black capitalize text-4xl p-2 place-items-center p-8 font-extrabold text-red-600 `}
                style={"bg-black p-4 h-auto w-full flex place-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max"}
            /> */}




            <div className="bg-black py-24 px-8 flex flex-col items-center justify-center text-center">
                <Action
                    id="contato"
                    title={
                        <span className="flex items-center gap-3">
                            <IoLogoWhatsapp
                                className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300 group-hover:text-red-500"
                            />
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">
                                Agende sua EXPERIÊNCIA pelo nosso WhatsApp!
                            </span>
                        </span>
                    }
                    style="flex flex-col items-center justify-center gap-6"
                    buttonStyle={`
    group
    flex items-center justify-center gap-3
    bg-green-500 text-white font-extrabold tracking-wide bg-opacity-90
    px-8 sm:px-10 py-4 sm:py-6 rounded-full text-lg sm:text-xl md:text-2xl
    border border-red-700 shadow-xl
    hover:bg-white hover:text-red-600 hover:scale-105
    active:scale-95 transition-all duration-300 ease-in-out
  `}
                    href="https://wa.me/5521999462860?text=Olá! Eu não encontrei todas as informações que precisava no site e gostaria de saber mais sobre os serviços oferecidos."
                />

            </div>


            <Footer
                id={'footer'}
                data={footerData}
            />

        </div>
    )
}

export default Home