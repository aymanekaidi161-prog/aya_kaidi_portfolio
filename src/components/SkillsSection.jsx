// src/components/SkillsSection.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart3, Palette, Heart, Globe, Languages } from "lucide-react";
import { DecorativeFrame } from "./DecorativeElements";
import skillImage from "../assets/skill.jpeg";

const skillsData = [
  {
    icon: BarChart3,
    title: "ANALYTICS & METRICS",
    description: "CTR, ROI, CAC, GOOGLE ANALYTICS",
  },
  {
    icon: Palette,
    title: "CONTENT CREATION",
    description: "CANVA AND VIDEO EDITING BASICS",
  },
  { icon: Heart, title: "POSITIVE ATTITUDE & WORK ETHIC", description: "" },
  {
    icon: Globe,
    title: "ADAPTABILITY",
    description: "LIVING/STUDYING IN NEW ENVIRONMENTS",
  },
  {
    icon: Languages,
    title: "ENGLISH",
    description: "PROFESSIONAL WORKING PROFICIENCY",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 dark:text-amber-500 inline-flex items-center gap-3">
            Skills{" "}
            <span className="text-amber-900 dark:text-amber-500 animate-pulse">
              ✦
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <DecorativeFrame className="max-w-md mx-auto">
              <img
                src={skillImage}
                alt="skill img"
                className="w-full h-full object-cover"
              />
            </DecorativeFrame>
          </motion.div>

          {/* Right: Skill cards */}
          <div className="grid gap-4">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/80 dark:bg-stone-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="p-3 bg-amber-900/10 dark:bg-amber-500/10 rounded-lg shrink-0">
                    <Icon
                      className="text-amber-900 dark:text-amber-500"
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-stone-800 dark:text-stone-200">
                      {skill.title}
                    </h3>
                    {skill.description && (
                      <p className="text-stone-600 dark:text-stone-400 text-sm mt-1">
                        {skill.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
