import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DecorativeFrame } from "./DecorativeElements";
import visionImage from "../assets/vision.jpeg";

const VisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vision"
      className="min-h-screen flex items-center py-20 bg-stone-100/50 dark:bg-stone-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-500 mb-4">
                Vision
              </h3>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                I aim to grow as a digital marketing professional and bring
                value to organizations that thrive on creativity and strategic
                innovation.
              </p>
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-amber-900 dark:text-amber-500 mb-4">
                Mission
              </h3>
              <p className="text-lg text-stone-700 dark:text-stone-300 leading-relaxed">
                To develop my expertise in digital marketing and social media
                management while contributing to projects that blend creativity
                with strategy.
              </p>
            </div>

            {/* Decorative Pulse Dots */}
            <div className="flex gap-4">
              <div className="w-4 h-4 bg-amber-900 dark:bg-amber-600 rounded-full animate-pulse" />
              <div
                className="w-4 h-4 bg-amber-700 dark:bg-amber-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
              <div
                className="w-4 h-4 bg-stone-400 dark:bg-stone-600 rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              />
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <DecorativeFrame className="max-w-md mx-auto">
              <img
                src={visionImage}
                alt="vision Kaidi Aya"
                className="w-full h-full object-cover"
              />
            </DecorativeFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
