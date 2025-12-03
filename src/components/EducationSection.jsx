// src/components/EducationSection.jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap } from 'lucide-react'
import educationImage from "../assets/education.jpeg";

const educationData = [
  {
    university: 'University of Moulay Ismail Meknès',
    description:
      'Two years of education and holder a diploma in the General universities in COMMERCE MARKETING with mention Good',
  },
  {
    university: 'University of Cadi Iyyad Kalaa saraghna',
    description:
      'Currently researcher in digital marketing and social media management on my third year in the superior studies',
  },
]

const EducationSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 dark:text-amber-500 text-center mb-16"
        >
          Education
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="aspect-[3/4] bg-stone-200 dark:bg-stone-800 rounded-xl overflow-hidden shadow-2xl max-w-sm w-full">
              
              <img 
                src={educationImage}
                alt="Education"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-900/10 dark:bg-amber-500/10 rounded-lg">
                    <GraduationCap className="text-amber-900 dark:text-amber-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-stone-800 dark:text-stone-200 mb-2">
                      {edu.university}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection