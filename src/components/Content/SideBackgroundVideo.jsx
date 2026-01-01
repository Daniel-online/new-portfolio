import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Transform3D from "../Animated/Transform3D.jsx";
import profileFloat from "./../../assets/profiles/pixel-art-me-round.png"
const SideBackgroundVideo = ({
  id,
  title,
  text,
  actionLabel,
  actionHref,
  sideDirection = true, // true = conteúdo à direita | false = à esquerda
}) => {
  const srcMobile = import.meta.env.VITE_BACKGROUND_VIDEO_MOBILE;
  const srcDesktop = import.meta.env.VITE_BACKGROUND_VIDEO_DESKTOP;

  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  // NÃO ALTERAR: autoplay mobile
  useEffect(() => {
    if (videoRef.current && videoLoaded) {
      videoRef.current.play().catch(() => {
        const playVideo = () => {
          videoRef.current?.play();
          document.removeEventListener("click", playVideo);
        };
        document.addEventListener("click", playVideo);
      });
    }
  }, [videoLoaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden" id={id}>
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster="/smoke-gui-poster.jpg"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        onLoadedData={() => setVideoLoaded(true)}
      >
        <source src={srcMobile} media="(max-width: 768px)" type="video/mp4" />
        <source src={srcDesktop} media="(min-width: 769px)" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full w-full flex items-center">
        {/* MOBILE → sempre centralizado */}
        <div className="flex flex-col items-center text-center px-4 w-full lg:hidden">
          <h1
            className="
              text-2xl sm:text-4xl font-bold mb-4
              bg-gradient-to-r from-purple-700 via-violet-600 to-indigo-800
              bg-clip-text text-transparent animate-gradient-text transition  hover:text-indigo-800 transition duration-300 hover:drop-shadow-[1_0_8px_#ffffff] 
            "
          >
            {title}
          </h1>

          <div className="text-sm sm:text-base text-white font-bold leading-relaxed mb-6">
            {text}
          </div>

          <a
            href={actionHref}
            className="animate-pulse bg-purple-700 backdrop-blur-sm border-2 border-violet-700
          text-white font-bold px-12 py-4  rounded-full
          hover:text-white transition-all
          hover:scale-105 active:scale-95 shadow-lg animate-gradient-text transition  hover:text-indigo-500 transition duration-300 hover:drop-shadow-[0_0_8px_#ff00cc]"
          >
            {actionLabel}
          </a>
        </div>

        {/* DESKTOP → lado configurável (igual SideView) */}
        <div
          className={`hidden lg:flex w-full px-16 ${sideDirection ? "justify-end" : "justify-start"
            }`}
        >
          <div className="w-full max-w-3xl">
            {/* TEXTO (lado configurável) */}
            <div className={sideDirection ? "text-right" : "text-left"}>
              <h1
                className="
          text-3xl font-bold mb-6
          bg-gradient-to-r from-purple-700 via-pink-600 to-purple-600
          bg-clip-text text-transparent
          animate-gradient-x
          [background-size:200%_200%]
          transition  hover:text-indigo-500 transition duration-300 hover:drop-shadow-[0_0_8px_#ff00cc]
              "
              >
                {title}
              </h1>

              <div className="text-xl text-white font-bold leading-relaxed mb-8">
                {text}
              </div>
            </div>

            {/* BOTÃO (sempre centralizado) */}
            <div className="flex justify-center ">
              <a
                href={actionHref}
                className="animate-pulse bg-purple-700 backdrop-blur-sm border-2 border-violet-700
          text-white font-bold px-12 py-4  rounded-full
          hover:text-white transition-all
          hover:scale-105 active:scale-95 shadow-lg animate-gradient-text transition  hover:text-indigo-500 transition duration-300 hover:drop-shadow-[0_0_8px_#ff00cc]"
              >
                {actionLabel}
              </a>
            </div>
          </div>
          {/* profile pic /> */}
          <div>
            <img
              src={profileFloat}
              alt="Pixel Art Profile"
              className="border-violet-800 border-4 w-80 h-auto ml-12 rounded-full animate-float-shadow transition  hover:text-violet-800 transition duration-300 hover:drop-shadow-[0_0_8px_#ff00cc]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SideBackgroundVideo.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired, // ✅ aceita <span>, <br />, JSX
  actionLabel: PropTypes.string.isRequired,
  actionHref: PropTypes.string.isRequired,
  sideDirection: PropTypes.bool,
};

export default SideBackgroundVideo;
