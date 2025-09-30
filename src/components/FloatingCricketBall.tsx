import { motion } from 'motion/react';

export function FloatingCricketBall() {
  return (
    <>
      {/* Floating cricket balls in background */}
      <motion.div
        className="fixed top-20 left-10 w-8 h-8 bg-red-500 rounded-full opacity-20 z-0"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white opacity-60"></div>
      </motion.div>

      <motion.div
        className="fixed top-1/3 right-16 w-6 h-6 bg-red-500 rounded-full opacity-15 z-0"
        animate={{
          y: [0, 40, 0],
          x: [0, -25, 0],
          rotate: [0, -360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white opacity-60"></div>
      </motion.div>

      <motion.div
        className="fixed bottom-32 left-1/4 w-10 h-10 bg-red-500 rounded-full opacity-10 z-0"
        animate={{
          y: [0, -50, 0],
          x: [0, 30, 0],
          rotate: [0, 180]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white opacity-60"></div>
      </motion.div>

      <motion.div
        className="fixed top-2/3 right-1/3 w-7 h-7 bg-red-500 rounded-full opacity-12 z-0"
        animate={{
          y: [0, 35, 0],
          x: [0, -20, 0],
          rotate: [0, 270]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <div className="absolute inset-0 rounded-full border border-white opacity-60"></div>
      </motion.div>

      {/* Cricket stumps silhouette */}
      <motion.div
        className="fixed bottom-20 right-20 opacity-5 z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg width="40" height="60" viewBox="0 0 40 60" fill="currentColor" className="text-gray-600">
          <rect x="8" y="0" width="3" height="50" />
          <rect x="18" y="0" width="3" height="50" />
          <rect x="28" y="0" width="3" height="50" />
          <rect x="6" y="0" width="27" height="2" />
          <rect x="6" y="5" width="27" height="2" />
        </svg>
      </motion.div>
    </>
  );
}