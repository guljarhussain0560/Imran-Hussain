import { motion } from 'motion/react';
import { Trophy, Target, Zap } from 'lucide-react';

export function Inspiration() {
  const kohliFacts = [
    {
      icon: Trophy,
      title: "Leadership",
      description: "Led India to historic Test series wins",
      color: "blue"
    },
    {
      icon: Target,
      title: "Consistency",
      description: "70+ international centuries",
      color: "green"
    },
    {
      icon: Zap,
      title: "Fitness",
      description: "Revolutionized cricket fitness standards",
      color: "orange"
    }
  ];

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
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            My Inspiration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Virat Kohli - The King who taught me that dreams become reality with dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Kohli Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              <div className="w-80 h-96 bg-gradient-to-br from-blue-200 via-orange-200 to-red-200 rounded-2xl border-8 border-white shadow-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-orange-100/50 to-red-100/50"></div>
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600">Virat Kohli</p>
                  <p className="text-sm text-gray-500">Add inspiration photo here</p>
                </div>
              </div>
              
              {/* Decorative cricket elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 text-2xl"
              >
                🏏
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Why Kohli Inspires Me */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl text-center lg:text-left">Why Virat Kohli Inspires Me</h3>
            
            {kohliFacts.map((fact, index) => (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
                className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  fact.color === 'blue' ? 'bg-blue-100' :
                  fact.color === 'green' ? 'bg-green-100' :
                  'bg-orange-100'
                }`}>
                  <fact.icon className={`w-6 h-6 ${
                    fact.color === 'blue' ? 'text-blue-600' :
                    fact.color === 'green' ? 'text-green-600' :
                    'text-orange-600'
                  }`} />
                </div>
                <div>
                  <h4 className="text-lg mb-1">{fact.title}</h4>
                  <p className="text-gray-600">{fact.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Inspirational Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 via-red-50 to-pink-50 rounded-2xl p-8 max-w-4xl mx-auto border border-orange-100">
            <div className="text-4xl mb-4">🏆</div>
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "Self-belief and hard work will always earn you success"
            </blockquote>
            <p className="text-lg text-orange-600">- Virat Kohli</p>
            <div className="mt-6 w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* My Goals Inspired by Kohli */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl text-center mb-8">My Goals Inspired by Kohli</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { goal: "Excel in Studies", icon: "📚" },
              { goal: "Cricket Excellence", icon: "🏏" },
              { goal: "Leadership Skills", icon: "👑" },
              { goal: "Fitness & Health", icon: "💪" }
            ].map((item, index) => (
              <motion.div
                key={item.goal}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-gray-700">{item.goal}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}