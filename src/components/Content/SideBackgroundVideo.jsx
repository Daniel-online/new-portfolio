import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import srcMobile from "./../../assets/videos/mobile_vs.mp4";
import srcDesktop from "./../../assets/videos/new-dsktp-bg.mp4";

const SideBackgroundVideo = ({
    title,
    text,
    actionLabel,
    actionHref,
    sideDirection = true, // true = conteúdo à direita | false = à esquerda
}) => {
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
        <div className="relative w-full h-screen overflow-hidden">
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
              bg-gradient-to-r from-red-700 via-pink-600 to-red-600
              bg-clip-text text-transparent animate-gradient-text
            "
                    >
                        {title}
                    </h1>

                    <div className="text-sm sm:text-base text-white font-bold leading-relaxed mb-6">
                        {text}
                    </div>

                    <a
                        href={actionHref}
                        className="bg-red-500 backdrop-blur-sm border border-white border-opacity-50
              text-white font-bold px-6 py-3 rounded-full
              hover:bg-white hover:text-red-500 transition-all
              hover:scale-105 active:scale-95 shadow-lg"
                    >
                        {actionLabel}
                    </a>
                </div>

                {/* DESKTOP → lado configurável (igual SideView) */}
          <div
  className={`hidden lg:flex w-full px-16 ${
    sideDirection ? "justify-end" : "justify-start"
  }`}
>
  <div className="w-full max-w-2xl">
    {/* TEXTO (lado configurável) */}
    <div className={sideDirection ? "text-right" : "text-left"}>
      <h1
        className="
          text-5xl font-bold mb-6
          bg-gradient-to-r from-red-700 via-pink-600 to-red-600
          bg-clip-text text-transparent animate-gradient-text
        "
      >
        {title}
      </h1>

      <div className="text-xl text-white font-bold leading-relaxed mb-8">
        {text}
      </div>
    </div>

    {/* BOTÃO (sempre centralizado) */}
    <div className="flex justify-center">
      <a
        href={actionHref}
        className="bg-red-500 backdrop-blur-sm border border-white border-opacity-50
          text-white font-bold px-8 py-3 rounded-full
          hover:bg-white hover:text-red-500 transition-all
          hover:scale-105 active:scale-95 shadow-lg"
      >
        {actionLabel}
      </a>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

SideBackgroundVideo.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.node.isRequired, // ✅ aceita <span>, <br />, JSX
    actionLabel: PropTypes.string.isRequired,
    actionHref: PropTypes.string.isRequired,
    sideDirection: PropTypes.bool,
};

export default SideBackgroundVideo;
