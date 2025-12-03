import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FloatingStar, DecorativeFrame } from "./DecorativeElements";
import aboutImage from "../assets/about.jpeg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-900 dark:text-amber-500 text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <DecorativeFrame className="max-w-sm mx-auto">
              <img
                src={aboutImage}
                alt="About Kaidi Aya"
                className="w-full h-full object-cover"
              />
            </DecorativeFrame>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <FloatingStar className="absolute -top-4 right-0" delay={0.8} />
            <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 leading-relaxed">
              I'm{" "}
              <span className="font-semibold text-amber-900 dark:text-amber-500">
                Aya
              </span>
              , from Morocco, passionate in digital marketing and social media
              management. I'm a positive and hardworking person, eager to grow,
              learn and enrich my career by contributing to innovative projects
              and building impactful online strategies.
            </p>

            {/* Decorative Bars */}
            <div className="mt-8 flex gap-4">
              <div className="w-16 h-1 bg-amber-900 dark:bg-amber-600 rounded-full" />
              <div className="w-8 h-1 bg-amber-700 dark:bg-amber-500 rounded-full" />
              <div className="w-4 h-1 bg-stone-300 dark:bg-stone-600 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
