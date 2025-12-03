import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.6 }} 
      className="bg-amber-900 dark:bg-stone-950 py-6 md:py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-display text-lg md:text-xl text-white mb-1 md:mb-2">
          © 2025 Kaidi Aya. All rights reserved.
        </p>
        <p className="text-white/80 dark:text-stone-400 text-xs md:text-sm">
          Digital Marketing & Social Media Management
        </p>
      </div>
    </motion.footer>
  )
}

export default Footer