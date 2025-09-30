import { motion } from 'motion/react';
import { CricketBat } from './CricketBat';

export function Interests() {
  const cricketSkills = [
    { skill: "Batting", level: 85, color: "blue" },
    { skill: "Bowling", level: 70, color: "green" },
    { skill: "Fielding", level: 80, color: "orange" },
    { skill: "Leadership", level: 75, color: "purple" }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
            My Cricket Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cricket isn't just my hobby - it's my passion, my teacher, and my inspiration
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cricket Bat Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <CricketBat />
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl mb-8 text-center lg:text-left">Cricket Skills</h3>
            {cricketSkills.map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg">{item.skill}</span>
                  <span className="text-gray-600">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${
                      item.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      item.color === 'green' ? 'from-green-400 to-green-600' :
                      item.color === 'orange' ? 'from-orange-400 to-orange-600' :
                      'from-purple-400 to-purple-600'
                    }`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Cricket Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-blue-100">
            <div className="text-3xl mb-2">🏏</div>
            <h4 className="text-lg mb-2 text-blue-600">Favorite Format</h4>
            <p className="text-gray-600">T20 Cricket</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-green-100">
            <div className="text-3xl mb-2">🎯</div>
            <h4 className="text-lg mb-2 text-green-600">Preferred Position</h4>
            <p className="text-gray-600">All-rounder</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg text-center border border-orange-100">
            <div className="text-3xl mb-2">🏆</div>
            <h4 className="text-lg mb-2 text-orange-600">Dream Goal</h4>
            <p className="text-gray-600">Team India Captain</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}