import Navbar from "../components/Navigation/Navbar"
import Hero from "../components/Content/Hero.jsx"

import Action from "../components/Buttons/Action.jsx"
import Footer from "../components/Footer/Footer";
import footerData from "./../Data/footerData.json"
import navbarData from "./../Data/navbarData.json"
import whatsappRef from "./../Data/whatsappRef.json";

// Use proper paths - adjust based on where Home.jsx is located
import bambuterapia from "@assets/Bambuterapia.jpg";
import ventosoterapia from "@assets/Ventosoterapia.jpg";
import pedrasQuentes from "@assets/PedrasQuentes.jpg";
import depoimentos from "@assets/depoimentos/depoimentos_wide.png";
import Depilacao from "@assets/depilacao.jpg";
import tantrica from "@assets/profiles/tantrica-hq.jpg";
import nuru from "@assets/profiles/nuru-hq.jpg";
import relaxante from "@assets/profiles/relaxante-hq.jpg";
import secreta from "@assets/massagemSecreta.jpg";
// import notebook from "./../../src/assets/src/assets/Comercial/other/notebook.jpg"
import teamData from "./../components/Team/teamData.js";
import { useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import SideView from "../components/Content/SideView.jsx";
import AboutUs from "./AboutUs.jsx";
import Team from "../components/Team/Team.tsx";
import SideBackgroundVideo from "../components/Content/SideBackgroundVideo.jsx";
import Scroller from "../components/Animated/Scroller.jsx";
import WhatsappButton from "../components/Buttons/WhatsappButton.jsx";
// import 

const Home = () => {
    useEffect(() => {
        document.title = "Belong Together - Home";
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
  title="Estou aqui para te proporcionar uma EXPERIÊNCIA"
  text={
    <>
      Você merece o{" "}
      <span className="italic bg-gradient-to-r  from-yellow-400 via-white to-yellow-300 bg-clip-text text-transparent">
        MELHOR
      </span>
      .<br /><br />
      Massagem profissional, cuidado real e resultados imediatos, além de serviços exclusivos para elevar seu autocuidado ao nível que você merece.
    </>
  }
  actionLabel="CONHECER MAIS"
  actionHref="#sobre"
  sideDirection={false} // direita
/>
            {/* Apresentacao Inicial ; Possivelmente tertei que escrever um componente novo*/}

            {/* Introducao do Massagista */}
            <AboutUs
                id="sobre">

            </AboutUs>
            {/* Depoimentos Section */}
            {/* Depoimentos Section - Using img tag */}
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
            {/* cards de apresentacao */}
            <Team
                id="tratamentos"
                data={teamData}
                title={'EXPERIÊNCIAS DE MASSOTERAPIA'}
                titleStyle={`bg-black capitalize text-4xl p-2 place-items-center p-8 font-extrabold text-red-600 `}
                style={"bg-black p-4 h-auto w-full flex place-items-center grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 auto-rows-max"}
            />

            {/* Explicacao de cada Tratamento

            */}
            <SideView
                id="terapia7"
                isSectionTitle={true}
                sectionTitle={"MASSAGEM SECRETA"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
                    Técnicas exclusivas, desenvolvidas com anos de experiência em massoterapia.
Um serviço de luxo PREMIUM, feito na medida certa para despertar sua curiosidade… 🤫   `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={secreta}
                imageStyle={"w-full h-auto rounded-r-full"}
                referralLink={whatsappRef[7].link}
            />

            <SideView
                id="terapia6"
                isSectionTitle={true}
                sectionTitle={"NURU ERÓTICA | RELAXANTE + SENSITIVE"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`A Massagem Nuru é uma experiência única, em que o terapeuta utiliza todo o seu corpo de forma sensível e conectada. Ideal para quem busca um novo nível de prazer e relaxamento, combinando técnicas de massagem erótica e relaxante.

O principal objetivo é proporcionar bem-estar profundo, prazer intenso e momentos de entrega total, com confiança e segurança durante todo o atendimento.

Durante o processo, também pode ser incorporada a Lingam ou Yoni Massagem, elevando a experiência a um estágio de satisfação e intimidade jamais imaginados.😈
                                   `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={nuru}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[5].link}
            />
            <SideView
                id="terapia5"
                sectionTitle={"MASSAGEM TÂNTRICA | RELAXANTE + SENSITIVE"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
                    Descubra a Massagem Relaxante elevada a uma nova arte: um encontro de profundo bem-estar e despertar sensual, guiado por **mãos profissionais** e experientes.

Nossa  técnica é a soma de anos de prática e aprimoramento, integrando o melhor das massagens clássicas com o toque sutil e consciente que evoca o erotismo e o prazer. Cada movimento é executado com precisão e sensibilidade, visando não apenas o alívio das tensões musculares, mas a expansão de todas as suas sensações.

Permita-se entregar a este ritual onde o cuidado profissional se une ao despertar do erotismo. É o momento ideal para desligar a mente, relaxar profundamente e redescobrir a beleza e a sensualidade do seu próprio corpo, através de um toque que é técnico, respeitoso e inesquecível.


`}


                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={tantrica}
                imageStyle={"w-full h-auto rounded-r-full"}
                referralLink={whatsappRef[4].link}
            />

            <SideView
                id="terapia4"
                isSectionTitle={true}
                sectionTitle={"MASSAGEM RELAXANTE | RELAXANTE + SENSITIVE + ALONGAMENTOS"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`
Trabalha toda a musculatura, proporcionando alívio de tensões e relaxamento profundo. Técnicas de fricção, amassamento, shiatsu, reflexologia podal e alongamentos promovem o fluxo de energia pelo corpo, cuidando da sua saúde física e emocional.

Uma experiência essencial para restaurar o bem-estar completo e renovar suas energias.


                                        `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={relaxante}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[6].link}

            />




            <SideView
                id="terapia3"
                isSectionTitle={true}
                sectionTitle={" MASSAGEM COM PEDRAS QUENTES"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
  Relaxamento profundo e calor terapêutico.

Pedras aquecidas são aplicadas estrategicamente para aliviar tensões, aumentar a circulação e desbloquear energias. Uma experiência que revitaliza o corpo e acalma a mente, trazendo conforto, prazer e bem-estar absoluto.
                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={1}
                image={pedrasQuentes}
                imageStyle={"w-full h-auto rounded-r-full"}
                referralLink={whatsappRef[3].link}
            />
            <SideView
                id="terapia2"
                isSectionTitle={true}
                sectionTitle={"VENTOSA TERAPIA"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`

Descompressão, alívio e renovação.
Técnica que utiliza copos para estimular a circulação, soltar tensões musculares e liberar energia acumulada. Uma experiência que revitaliza o corpo, promove relaxamento profundo e sensação de leveza.`}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={ventosoterapia}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[2].link}
            />
            <SideView
                id="terapia1"
                isSectionTitle={true}
                sectionTitle={"BAMBUTERAPIA"}
                sectionStyle={"bg-black"}
                sideDirection={false}
                text={`
Força, precisão e relaxamento profundo.
A técnica utiliza bambus de diferentes tamanhos para amassar, descontrair e revitalizar a musculatura, promovendo alívio de tensões e melhora da circulação. Uma experiência única que une técnica, conforto e bem-estar completo.                `}
                textStyle={"text-white font-medium p-2"}
                titleStyle={"text-red-500 p-4 flex place-content-center"}
                // therapyLevel={0}
                image={bambuterapia}
                imageStyle={"w-full h-auto rounded-r-full"}
                referralLink={whatsappRef[1].link}
            />

            <SideView
                id="terapia0"
                isSectionTitle={true}
                sectionTitle={"DEPILAÇÃO À MÁQUINA"}
                sectionStyle={"bg-black"}
                sideDirection={true}
                text={`

Precisão, conforto e resultado imediato.
Técnica profissional que garante remoção de pelos de forma eficaz, deixando a pele lisinha, macia e sem irritações. Um serviço pensado para bem-estar, cuidado e autoestima elevada.                    `}
                textStyle={"text-red-500 font-medium p-2"}
                titleStyle={"text-white p-4 flex place-content-center"}
                // therapyLevel={1}
                image={Depilacao}
                imageStyle={"w-full h-auto rounded-l-full"}
                referralLink={whatsappRef[0].link}
            />

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