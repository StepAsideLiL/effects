"use client";

import { motion } from "framer-motion";

export default function GlowingBlurBackground() {
  const Position = -384 / 2;

  return (
    <>
      <div className="absolute inset-0 -z-30 h-full w-full bg-gradient-to-t from-fuchsia-500/50 to-white/50 backdrop-blur"></div>
      <motion.div
        initial={{ x: Position + 50, y: Position + 30, scale: 1 }}
        animate={{
          x: [Position + 50, Position - 50, Position + 30, Position + 50],
          y: [Position + 30, Position - 80, Position - 90, Position + 30],
          scale: [1, 0.5, 1.5, 1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ mixBlendMode: "difference" }}
        className="absolute left-1/2 top-1/2 -z-40 size-96 rounded-full bg-red-700 opacity-40 blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: Position - 50, y: Position - 30, scale: 0.7 }}
        animate={{
          x: [Position - 50, Position + 50, Position - 30, Position - 50],
          y: [Position - 30, Position - 80, Position + 90, Position - 30],
          scale: [0.7, 0.3, 2, 0.7],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ mixBlendMode: "difference" }}
        className="absolute left-1/2 top-1/2 -z-40 size-96 rounded-full bg-green-700 opacity-40 blur-2xl"
      ></motion.div>
      <motion.div
        initial={{ x: Position + 10, y: Position + 50, scale: 1.3 }}
        animate={{
          x: [Position + 10, Position - 10, Position + 90, Position + 10],
          y: [Position + 50, Position - 80, Position - 10, Position + 50],
          scale: [1.3, 1.7, 0.3, 1.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ mixBlendMode: "difference" }}
        className="absolute left-1/2 top-1/2 -z-40 size-96 rounded-full bg-blue-700 opacity-40 blur-2xl"
      ></motion.div>
    </>
  );
}
