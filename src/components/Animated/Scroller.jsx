import React, { useEffect, useState } from "react";
import "./Scroller.css";

// Import all images at the top
import dep1 from '@assets/depoimentos/dep_1.jpg';
import dep2 from '@assets/depoimentos/dep_2.jpg';
import dep3 from '@assets/depoimentos/dep_3.jpg';
import dep4 from '@assets/depoimentos/dep_4.jpg';
import dep5 from '@assets/depoimentos/dep_5.jpg';
import dep6 from '@assets/depoimentos/dep_6.jpg';
import dep7 from '@assets/depoimentos/dep_7.jpg';
import dep8 from '@assets/depoimentos/dep_8.jpg';
import dep9 from '@assets/depoimentos/dep_9.jpg';
import dep10 from '@assets/depoimentos/dep_10.jpg';
import dep11 from '@assets/depoimentos/dep_11.jpg';
import dep12 from '@assets/depoimentos/dep_12.jpg';
import dep13 from '@assets/depoimentos/dep_13.jpg';
import dep14 from '@assets/depoimentos/dep_14.jpg';
import dep15 from '@assets/depoimentos/dep_15.jpg';
import dep16 from '@assets/depoimentos/dep_16.jpg';
import dep17 from '@assets/depoimentos/dep_17.jpg';

const Scroller = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    setIsReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  const renderScrollerContent = (items) => {
    const content = items.map((item, index) => (
      <img key={index} src={item} alt="" />
    ));
    if (!isReducedMotion) {
      return [
        ...content,
        ...content.map((item, index) =>
          React.cloneElement(item, { key: `dup-${index}`, "aria-hidden": "true" })
        ),
      ];
    }
    return content;
  };

  // Use imported image variables instead of file paths
  const images1 = [
    dep1,
    dep2,
    dep3,
    dep4,
    dep5,
    dep6,
  ]
  
  const images2 = [
    dep7,
    dep8,
    dep9,
    dep10,
    dep11,
    dep12,
  ]
  
  const images3 = [
    dep13,
    dep14,
    dep15,
    dep16,
    dep17,
  ]

  return (
    <div className="scroller-wrapper">
      <div
        className="scroller"
        data-direction="right"
        data-speed="fast"
        data-animated={!isReducedMotion}
      >
        <div className="scroller__inner">
          {renderScrollerContent(images1)}
        </div>
      </div>

      <div
        className="scroller"
        data-direction="left"
        data-speed="fast"
        data-animated={!isReducedMotion}
      >
        <div className="scroller__inner">
          {renderScrollerContent(images2)}
        </div>
      </div>

      <div
        className="scroller"
        data-direction="right"
        data-speed="fast"
        data-animated={!isReducedMotion}
      >
        <div className="scroller__inner">
          {renderScrollerContent(images3)}
        </div>
      </div>
    </div>
  );
};

export default Scroller;