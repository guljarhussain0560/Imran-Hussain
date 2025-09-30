import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-orange-600 tracking-wider uppercase">Student Portfolio</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl lg:text-8xl mb-6 bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 bg-clip-text text-transparent"
          >
            Imran Hussain
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-2 mb-8"
          >
            <p className="text-xl text-gray-700">Class 9 Student</p>
            <p className="text-lg text-gray-600">Al Ameen Academy, Badarpur</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">Cricket Enthusiast</span>
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">Future Leader</span>
            <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full">Inspired by Virat Kohli</span>
          </motion.div>
        </motion.div>

        {/* Photo Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative"
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-200 via-green-200 to-orange-200 rounded-full border-8 border-white shadow-2xl relative overflow-hidden">
              <img 
                src="/IMG-20250930-WA0005.jpg" 
                alt="Imran Hussain"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-green-100/20 to-orange-100/20 rounded-full"></div>
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-green-400 rounded-full opacity-80"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}