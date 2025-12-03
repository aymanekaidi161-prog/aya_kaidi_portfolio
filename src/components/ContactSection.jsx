import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Instagram, Linkedin, Phone, Mail, Facebook } from 'lucide-react'
import { FloatingStar, DecorativeFrame } from './DecorativeElements'
import contactImage from "../assets/contact.jpeg";


const contactData = [
  { icon: Instagram, label: 'Instagram', value: '@si.aya1', href: 'https://instagram.com/si.aya1', external: true },
  { icon: Linkedin, label: 'LinkedIn', value: 'Kaidi Aya', href: 'https://linkedin.com/in/kaidi-aya', external: true },
  { icon: Facebook, label: 'Facebook', value: 'Kaidi Aya', href: 'https://facebook.com/kaidi.aya', external: true },
  { icon: Phone, label: 'Phone', value: '+212-772068589', href: 'tel:+212772068589', external: false },
  { icon: Mail, label: 'Email', value: 'ayakaidi205@gmail.com', href: 'mailto:ayakaidi205@gmail.com', external: false },
]

const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-stone-100/50 dark:bg-stone-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 dark:text-amber-500 text-center mb-16"
        >
          Let's collaborate
        </motion.h2>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactData.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a 
                  key={index} 
                  href={contact.href} 
                  target={contact.external ? '_blank' : undefined} 
                  rel={contact.external ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }} 
                  animate={isInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} 
                  className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center group cursor-pointer"
                >
                  <div className="p-4 bg-amber-900/10 dark:bg-amber-500/10 rounded-full w-fit mx-auto mb-4 group-hover:bg-amber-900/20 dark:group-hover:bg-amber-500/20 transition-colors">
                    <Icon className="text-amber-900 dark:text-amber-500" size={28} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-stone-800 dark:text-stone-200 mb-1">
                    {contact.label}
                  </h3>
                  <p className="text-stone-600 dark:text-stone-400 text-sm">
                    {contact.value}
                  </p>
                </motion.a>
              )
            })}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="relative"
          >
            <FloatingStar className="absolute -top-6 right-10 z-20" delay={0.6} />
            <FloatingStar className="absolute top-1/2 -left-4 z-20" delay={0.8} />
            <DecorativeFrame className="max-w-md mx-auto">
                          <img
                            src={contactImage}
                            alt="Education"
                            className="w-full h-full object-cover"
                          />
                        </DecorativeFrame>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection