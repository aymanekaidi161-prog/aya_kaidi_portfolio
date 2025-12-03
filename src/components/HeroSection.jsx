import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FloatingStar, DecorativeFrame } from './DecorativeElements'


const HeroSection = () => {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  const scrollToAbout = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left side: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <FloatingStar className="absolute -top-8 -left-4" delay={0.8} />
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-amber-900 dark:text-amber-500 leading-tight">
                Creative
                <br />
                Portfolio
              </h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-block bg-stone-200 dark:bg-stone-800 px-4 py-2 rounded-lg mt-4"
              >
                <span className="font-display text-lg md:text-xl text-stone-800 dark:text-stone-200">
                  By Kaidi Aya
                </span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-lg md:text-xl text-stone-600 dark:text-stone-400 mt-6 max-w-lg"
            >
              Digital Marketing & Social Media Management Researcher
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-8"
            >
              <button 
                onClick={scrollToContact} 
                className="px-8 py-3 bg-amber-900 dark:bg-amber-700 text-white rounded-full text-lg font-medium hover:bg-amber-800 dark:hover:bg-amber-600 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Let's Collaborate
              </button>
            </motion.div>
          </motion.div>

          {/* Right side: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <FloatingStar className="absolute -top-4 right-10 z-20" delay={1} />
            <FloatingStar className="absolute bottom-10 -right-4 z-20" delay={1.2} />
            <FloatingStar className="absolute top-1/2 -left-6 z-20" delay={1.4} />
            <DecorativeFrame className="max-w-sm mx-auto lg:max-w-md">
              <div className="aspect-[3/4] bg-stone-200 dark:bg-stone-800 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <span className="text-center px-4 text-stone-400 dark:text-stone-500">Upload Hero Image</span>
              </div>
            </DecorativeFrame>
          </motion.div>
        </div>

        {/* Scroll down button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-stone-600 dark:text-stone-400 hover:text-amber-900 dark:hover:text-amber-500 transition-colors"
          >
            <span className="text-sm mb-2">Scroll</span>
            <ChevronDown className="animate-bounce" size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection