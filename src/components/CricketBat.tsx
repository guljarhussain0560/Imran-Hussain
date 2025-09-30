import { motion } from 'motion/react';

export function CricketBat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.svg
        width="200"
        height="400"
        viewBox="0 0 200 400"
        className="drop-shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Cricket bat handle */}
        <motion.rect
          x="85"
          y="280"
          width="30"
          height="110"
          rx="15"
          fill="#8B4513"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        />
        
        {/* Handle grip */}
        <motion.rect
          x="87"
          y="285"
          width="26"
          height="100"
          rx="13"
          fill="#654321"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />
        
        {/* Grip texture lines */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <motion.line
            key={i}
            x1="89"
            y1={290 + i * 10}
            x2="111"
            y2={290 + i * 10}
            stroke="#8B4513"
            strokeWidth="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 + i * 0.05 }}
          />
        ))}
        
        {/* Cricket bat blade */}
        <motion.ellipse
          cx="100"
          cy="140"
          rx="45"
          ry="140"
          fill="#F5DEB3"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        />
        
        {/* Bat edge */}
        <motion.ellipse
          cx="100"
          cy="140"
          rx="42"
          ry="137"
          fill="none"
          stroke="#DEB887"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        
        {/* Sweet spot */}
        <motion.ellipse
          cx="100"
          cy="120"
          rx="25"
          ry="40"
          fill="#E6D3A3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        />
        
        {/* Wood grain lines */}
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.path
            key={i}
            d={`M ${75 + i * 10} 20 Q 100 80 ${75 + i * 10} 260`}
            fill="none"
            stroke="#DEB887"
            strokeWidth="1"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.7 + i * 0.1, duration: 0.8 }}
          />
        ))}
      </motion.svg>
      
      {/* Floating cricket ball */}
      <motion.div
        className="absolute -right-16 top-8"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 360]
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          },
          rotate: {
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        <div className="w-12 h-12 bg-red-600 rounded-full relative shadow-lg">
          <div className="absolute inset-0 rounded-full border-2 border-white opacity-80"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-8 bg-white"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}