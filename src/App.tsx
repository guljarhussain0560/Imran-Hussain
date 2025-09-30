import { motion } from 'motion/react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Interests } from './components/Interests';
import { Inspiration } from './components/Inspiration';
import { FloatingCricketBall } from './components/FloatingCricketBall';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-orange-50 overflow-hidden">
      <FloatingCricketBall />
      <div className="relative z-10">
        <Hero />
        <About />
        <Interests />
        <Inspiration />
      </div>
    </div>
  );
}