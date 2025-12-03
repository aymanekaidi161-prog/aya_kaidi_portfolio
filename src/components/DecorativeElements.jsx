import { motion } from 'framer-motion'

export const FloatingStar = ({ className = '', delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className={`text-amber-900 dark:text-amber-500 text-2xl md:text-3xl ${className}`}
  >
    ✦
  </motion.span>
)

export const DecorativeCircle = ({ className = '', size = 'w-64 h-64', color = 'bg-stone-300/20 dark:bg-stone-700/20' }) => (
  <div className={`absolute rounded-full blur-3xl ${size} ${color} ${className}`} />
)

export const WavyLine = ({ className = '' }) => (
  <svg viewBox="0 0 200 50" className={`w-48 md:w-64 ${className}`} fill="none">
    <motion.path
      d="M0 25 Q 25 0, 50 25 T 100 25 T 150 25 T 200 25"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.3 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
      className="text-amber-900 dark:text-amber-700"
    />
  </svg>
)

export const DecorativeFrame = ({ children, className = '' }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 border-2 border-stone-400 dark:border-stone-600 rounded-lg transform rotate-3" />
    <div className="absolute inset-0 border-2 border-amber-900 dark:border-amber-700 rounded-lg transform -rotate-3" />
    <div className="relative z-10 rounded-lg overflow-hidden">{children}</div>
  </div>
)

export const BackgroundDecorations = () => (
  <>
    <DecorativeCircle className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" size="w-96 h-96" color="bg-stone-300/20 dark:bg-stone-700/20" />
    <DecorativeCircle className="bottom-0 right-0 translate-x-1/3 translate-y-1/3" size="w-[500px] h-[500px]" color="bg-amber-200/30 dark:bg-amber-900/20" />
    <WavyLine className="absolute top-20 left-10 opacity-30" />
    <WavyLine className="absolute bottom-40 right-20 opacity-20 rotate-12" />
  </>
)