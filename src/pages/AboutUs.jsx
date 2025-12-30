// src/components/Sections/AboutUs.jsx
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./../components/Content/Hero";
import Paragraph from "../components/Content/Paragraph";
import profilesData from "../Data/aboutus.js";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imgDesktop from "./../../src/assets/Sobre_mim.png";
import imgMobile from "./../../src/assets/Sobre_mim_mobile.png";

/**
 * Comportamento:
 * - Cada slide ocupa 100% da largura do carrossel (apenas 1 visível).
 * - Drag por pointer events (funciona em mouse e touch).
 * - Botões para avançar/voltar.
 * - No desktop o layout interno do slide é horizontal (imagem + texto).
 */

const AboutUs = ({ id }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);

  // para drag
  const posRef = useRef({
    startX: 0,
    currentTranslate: 0,
    prevTranslate: 0,
    dragging: false,
    animationFrame: null,
  });

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.title = "Sobre Nós";
  }, []);

  // mover via botões
  const clampIndex = (i) => Math.max(0, Math.min(i, profilesData.length - 1));
  const goTo = (i) => setIndex(clampIndex(i));
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  // Funções de pointer (drag)
  const pxToPercent = (px) => {
    const container = trackRef.current?.parentElement;
    if (!container) return 0;
    return (px / container.clientWidth) * 100;
  };

  const setTrackTransform = (percent) => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${percent}%)`;
    }
  };

  // Calcula o transform alvo a partir do index
  const applyIndexTransform = (idx, animate = true) => {
    // cada slide tem 100% -> deslocamento = -idx * 100%
    if (trackRef.current) {
      if (animate) {
        trackRef.current.style.transition = "transform 350ms ease";
      } else {
        trackRef.current.style.transition = "none";
      }
      setTrackTransform(-idx * 100);
      // reset previous translate storage
      posRef.current.prevTranslate = -idx * trackRef.current.parentElement.clientWidth;
    }
  };

  // Atualiza transform quando index muda
  useEffect(() => {
    applyIndexTransform(index, true);
  }, [index]);

  // pointer handlers
  const onPointerDown = (e) => {
    const pointerX = e.clientX ?? e.touches?.[0]?.clientX;
    posRef.current.startX = pointerX;
    posRef.current.dragging = true;
    // cancel transition for live drag
    if (trackRef.current) trackRef.current.style.transition = "none";
    // capture pointer for mouse
    if (e.target.setPointerCapture) e.target.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!posRef.current.dragging) return;
    const pointerX = e.clientX ?? e.touches?.[0]?.clientX;
    const deltaX = pointerX - posRef.current.startX; // px
    // convert px to percent relative to container width
    const percentDelta = pxToPercent(deltaX);
    // base percent is -index*100
    const base = -index * 100;
    setTrackTransform(base + (percentDelta));
  };

  const onPointerUp = (e) => {
    if (!posRef.current.dragging) return;
    posRef.current.dragging = false;
    const pointerX = e.clientX ?? (e.changedTouches && e.changedTouches[0].clientX) ?? 0;
    const deltaX = pointerX - posRef.current.startX;
    const threshold = (trackRef.current?.parentElement.clientWidth ?? window.innerWidth) * 0.15; // 15% width
    if (deltaX < -threshold && index < profilesData.length - 1) {
      // arrastou para esquerda -> next
      setIndex((v) => v + 1);
    } else if (deltaX > threshold && index > 0) {
      // arrastou para direita -> prev
      setIndex((v) => v - 1);
    } else {
      // insuficiente -> volta ao index atual
      applyIndexTransform(index, true);
    }
    // release pointer capture if needed
    if (e.target.releasePointerCapture && e.pointerId) {
      try { e.target.releasePointerCapture(e.pointerId); } catch (err) {}
    }
  };

  // Touch wrapper - adicionamos listeners no elemento pai do track (viewport)
  useEffect(() => {
    const viewport = trackRef.current?.parentElement;
    if (!viewport) return;

    // handlers adaptados para touch & pointer
    const handlePointerDown = (ev) => {
      // Normalize touch to have clientX on event
      if (ev.type === "touchstart") {
        onPointerDown({ clientX: ev.touches[0].clientX, target: ev.target, pointerId: null });
      } else {
        onPointerDown(ev);
      }
    };
    const handlePointerMove = (ev) => {
      if (ev.type === "touchmove") {
        onPointerMove({ clientX: ev.touches[0].clientX });
      } else {
        onPointerMove(ev);
      }
    };
    const handlePointerUp = (ev) => {
      if (ev.type === "touchend") {
        const changedX = ev.changedTouches && ev.changedTouches[0] ? ev.changedTouches[0].clientX : 0;
        onPointerUp({ clientX: changedX, target: ev.target });
      } else {
        onPointerUp(ev);
      }
    };

    viewport.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    // touch fallback
    viewport.addEventListener("touchstart", handlePointerDown, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      viewport.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);

      viewport.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [index]);

  // evita transição "pendurada" ao redimensionar
  useEffect(() => {
    const onResize = () => applyIndexTransform(index, false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [index]);

  const bgImage = isMobile ? imgMobile : imgDesktop;

  return (
    <section id={id} className="relative w-full overflow-hidden">
      <Hero
        title=""
        data={[]}
        hasText={false}
        hasButton={false}
        bgImage={bgImage}
        style={`
          bg-black bg-cover bg-center bg-no-repeat
          flex flex-col justify-center items-center
          min-h-[60dvh] w-full relative
        `}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
        <h1 className={`font-extrabold text-red-500 ${isMobile ? "text-4xl mb-4" : "text-6xl mb-6"}`}>
          TERAPEUTAS
        </h1>

        {/* viewport: área fixa que mostra exatamente 1 slide */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* botões */}
          <button
            aria-label="Anterior"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-red-500 p-3 rounded-full hover:bg-white transition"
            disabled={index === 0}
          >
            <FaChevronLeft size={18} />
          </button>

          <button
            aria-label="Próximo"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-red-500 p-3 rounded-full hover:bg-white transition"
            disabled={index === profilesData.length - 1}
          >
            <FaChevronRight size={18} />
          </button>

          {/* viewport: overflow hidden */}
          <div
            className="overflow-hidden w-full"
            // este é o elemento que captura pointer/touch via listeners (parent of track)
            style={{ touchAction: "pan-y" /* permite vertical scroll da página */ }}
          >
            {/* track: flex com slides lado a lado; transform controlado via JS */}
            <div
              ref={trackRef}
              className="flex w-full"
              style={{
                transform: `translateX(${ -index * 100 }%)`,
                transition: "transform 350ms ease",
                willChange: "transform",
              }}
              // também suportamos clique para iniciar o drag em navegadores que gerenciam pointer events
            >
              {profilesData.map((profile, i) => (
                // cada slide ocupa 100% da largura do viewport do carrossel
                <div
                  key={i}
                  className="flex-shrink-0 w-full flex justify-center items-center px-4"
                >
                  {/* Card interno: no mobile empilhado; no desktop horizontal */}
                  <article
                    className={`
                      bg-black/70 border border-white/10 rounded-2xl shadow-xl
                      w-full max-w-3xl
                      p-6
                      flex flex-col items-center text-center
                      md:flex-row md:items-stretch md:text-left
                      gap-4
                    `}
                    style={{ minHeight: isMobile ? "auto" : 220 }}
                  >
                    {/* imagem: circulo no mobile, maior e à esquerda no desktop */}
                    <img
                      src={profile.image}
                      alt={profile.name}
                      className={`
                        w-28 h-28 rounded-full object-cover border-2 border-red-500
                        md:w-40 md:h-40 md:rounded-xl md:object-cover md:flex-shrink-0
                      `}
                    />

                    <div className="flex flex-col justify-center">
                      <h3 className="text-white text-lg font-semibold mb-1">
                        {profile.title || "Quem sou eu?"}
                      </h3>

                      <Paragraph
                        title={profile.name}
                        text={profile.text}
                        titleStyle="text-white text-xl font-bold"
                        textStyle="text-white text-sm md:text-base"
                      />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          {/* indicadores (opcional, pequenos dots) */}
          <div className="flex justify-center gap-2 mt-4">
            {profilesData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full ${i === index ? "bg-red-500" : "bg-white/30"}`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
