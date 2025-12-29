"use client";

import { motion } from "motion/react";
import type { Variants } from "motion/react";
import React from "react";

interface Calendar1Props extends React.SVGAttributes<SVGSVGElement> {
  width?: number;
  height?: number;
  strokeWidth?: number;
  stroke?: string;
}

const frameVariants: Variants = {
  normal: {
    opacity: 1,
  },
  animate: {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

const numberVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.3,
    y: -10,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.3,
    y: 10,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Calendar1 = ({
  width = 28,
  height = 28,
  strokeWidth = 2,
  stroke = "#ffffff",
  ...props
}: Calendar1Props) => {
  const [currentNumber, setCurrentNumber] = React.useState(1);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentNumber((prev) => (prev >= 31 ? 1 : prev + 1)); // Loop 1–31 for days
    }, 1000); // Change number every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        cursor: "default",
        userSelect: "none",
        padding: "8px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.rect
          x="3"
          y="4"
          width="18"
          height="18"
          rx="2"
          variants={frameVariants}
          animate="animate"
          initial="normal"
        />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <motion.text
          x="12"
          y="18"
          fontSize="8"
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          key={currentNumber}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={numberVariants}
        >
          {currentNumber}
        </motion.text>
      </svg>
    </div>
  );
};

export { Calendar1 };
