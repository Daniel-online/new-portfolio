import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"
import DottedScroller from "../components/Navigation/DottedScroller.jsx";
import SideView from "../components/Content/SideView.jsx"

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
import AboutUs from "./AboutUs.jsx";
import Team from "../components/Team/Team.tsx";
import SideBackgroundVideo from "../components/Content/SideBackgroundVideo.jsx";
// import Scroller from "../components/Animated/Scroller.jsx";
import WhatsappButton from "../components/Buttons/WhatsappButton.jsx";
import { TypeAnimation } from "react-type-animation";
import teamData from "../components/Team/teamData.js";
// import 
const neonEffect = "bg-gradient-to-r from-pink-600 via--indigo-600 to-purple-600 bg-clip-text text-transparent  animate-gradient-x [background-size:200%_200%]";

const Home = () => {
    useEffect(() => {
        document.title = "DANIEL IS ONLINE - Home";
    }, []);
    return (

        <div className="overflow-x-hidden">
            <DottedScroller />
            <WhatsappButton
                style="z-50 fixed bottom-5 right-5 flex items-center justify-center bg-green-500 text-white w-20 h-20 rounded-full animate-bounce shadow-lg hover:bg-green-600 transition-colors duration-300"
            />
            <Navbar
                data={navbarData}
            />
            {/* navigation */}

            <SideBackgroundVideo
                id="home"
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
                        <span className={`italic text-bold ${neonEffect}`}
                        >
                            SPECIALIST
                        </span>
                        .<br /><br />
                        Massagem profissional, cuidado real e resultados imediatos, além de serviços exclusivos para elevar seu autocuidado ao nível que você merece.
                    </div>
                }
                actionLabel="CONHECER MAIS"
                actionHref="#portfolio"
                sideDirection={false} // direita

            />

            <Team
                data={teamData}
                id="portfolio"
                style={"bg-black p-4 h-auto w-full flex place-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max "}
                title={'PORTFOLIO'}
                titleStyle={` capitalize text-6xl p-2 place-items-center p-8 font-extrabold bg-black text-purple-600 `}

            />

            <AboutUs
                title={'STACK'}
                titleStyle={`text-6xl hover:text-violet-600 transition duration-300 hover:drop-shadow-[1_0_8px_#ffffff]`}
                style={`
                    bg-black bg-cover bg-center bg-no-repeat
                    flex flex-col justify-center items-center
                    min-h-[60dvh] w-full relative  
                    `}
                imgDesktop={''}
                imgMobile={''}
                hasText={true}
                hasButton={false}
                id="stack"
            />
            <SideView
                id="aboutme"
                sectionTitle={"ABOUT ME"}
                sectionStyle="bg-black border-violet-800 border-4 text-slate-200 w-fit mx-2"
                sideDirection={true}
                text={`Hello! I'm Daniel, a passionate Full-Stack Developer with a knack for crafting seamless web experiences. With expertise in Node.js and a love for coding, I thrive on turning complex problems into elegant solutions. When I'm not coding, you can find me exploring the latest tech trends or indulging in a good book. Let's connect and create something amazing together!`}
                textStyle={`text-lg text-gray-300`}

            />
            <div className="bg-black py-24 px-8 flex flex-col items-center justify-center text-center">
                <Action
                    id="contato"
                    title={
                        <span className="flex items-center gap-3 ">
                            <IoLogoWhatsapp
                                className="text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-colors duration-300 group-hover:text-white"
                            />
                            <span className="text-lg sm:text-xl md:text-2xl font-bold">
                                INTERESTED? LET'S TALK!
                            </span>
                        </span>
                    }
                    style="flex flex-col items-center justify-center gap-6"
                    buttonStyle={`
                              animate-pulse bg-purple-700 backdrop-blur-sm border-2 border-violet-700
          text-white font-bold px-12 py-4  rounded-full
          hover:text-white transition-all
          hover:scale-105 active:scale-95 shadow-lg animate-gradient-text transition  
          hover:text-indigo-500 transition duration-300 hover:drop-shadow-[0_0_8px_#ff00cc]"
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