import { motion } from 'motion/react';
import { GraduationCap, MapPin, Heart } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate student with big dreams and an unwavering love for cricket
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <GraduationCap className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl mb-4 text-center text-blue-600">Education</h3>
            <div className="text-center space-y-2">
              <p className="text-lg">Class 9</p>
              <p className="text-gray-600">Al Ameen Academy</p>
              <p className="text-sm text-gray-500">Building a strong foundation for the future</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-green-100"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl mb-4 text-center text-green-600">Location</h3>
            <div className="text-center space-y-2">
              <p className="text-lg">Badarpur</p>
              <p className="text-gray-600">A place I call home</p>
              <p className="text-sm text-gray-500">Where dreams take flight</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl mb-4 text-center text-orange-600">Passion</h3>
            <div className="text-center space-y-2">
              <p className="text-lg">Cricket</p>
              <p className="text-gray-600">More than just a game</p>
              <p className="text-sm text-gray-500">It's a way of life</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 via-green-50 to-orange-50 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              "I believe that with dedication, hard work, and the right inspiration, 
              any dream can become reality. Just like my idol Virat Kohli showed the world 
              that passion and perseverance can take you to the top."
            </p>
            <div className="mt-4 w-20 h-1 bg-gradient-to-r from-blue-400 to-orange-400 mx-auto rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}