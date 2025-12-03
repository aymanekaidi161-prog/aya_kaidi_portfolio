// src/components/ExperienceSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { FloatingStar, DecorativeFrame } from "./DecorativeElements";
import experienceImage from "../assets/experience.jpeg";

const experienceData = [
  {
    title: "Managed promotional campaigns for Facebook pages",
    description:
      "Promoted products by creating engaging posts and sharing in targeted groups",
  },
  {
    title: "Launched a small brand of handmade tote bags",
    description:
      "Designed and marketed products through social media platforms",
  },
  {
    title: "English Teacher - Supplementary Studies Center",
    description: "Taught high school students grammar and communication skills",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="min-h-screen flex items-center py-20 bg-stone-100/50 dark:bg-stone-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 dark:text-amber-500 text-center mb-16"
        >
          Experience
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-900/10 dark:bg-amber-500/10 rounded-lg shrink-0">
                    <Briefcase
                      className="text-amber-900 dark:text-amber-500"
                      size={20}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-stone-800 dark:text-stone-200 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            <FloatingStar
              className="absolute -top-6 right-10 z-20"
              delay={0.5}
            />
            <FloatingStar
              className="absolute bottom-20 -left-4 z-20"
              delay={0.7}
            />
            <DecorativeFrame className="max-w-sm mx-auto">
              <img
                src={experienceImage}
                alt="Education"
                className="w-full h-full object-cover"
              />
            </DecorativeFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
