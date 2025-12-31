import { motion } from "framer-motion";
import React, { useEffect, useState } from 'react';
import type { Sticker } from "../../types";

interface ScrapbookStickerProps {
  sticker: Sticker;
}

export const ScrapbookSticker: React.FC<ScrapbookStickerProps> = ({ sticker }) => {
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0, rotate: 0});


    useEffect(() => {
    // Calculate random position and rotation ONCE when the component mounts
    // This ensures they don't jump around on re-renders
    const randomX = Math.random() * window.innerWidth * 0.8; // 0 to 80% of width
    const randomY = Math.random() * window.innerHeight * 0.8; // 0 to 80% of height
    const randomRotate = Math.random() * 60 - 30; // -30 to +30 degrees

    setInitialPosition({ x: randomX, y: randomY, rotate: randomRotate });
  }, []); // Empty dependency array means this runs once on mount


  return (
    <motion.img
      src={sticker.src}
      alt={sticker.alt}
      className="absolute select-none"
      style={{
        width: `${sticker.defaultScale * 100}px`,
        height: 'auto',
        left: `${initialPosition.x}px`,
        top: `${initialPosition.y}px`,
        rotate: `${initialPosition.rotate}deg`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }}
      exit={{ opacity: 0, scale: 0, transition: { duration: 0.3, ease: "easeIn" } }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    />
  );
}