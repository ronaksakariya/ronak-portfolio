import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";
import { GraduationCap } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const CGPABar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const progress = useMotionValue(0);
  const width = useTransform(progress, (v) => `${v}%`);

  useEffect(() => {
    if (isInView) {
      const controls = animate(progress, 83.4, {
        duration: 1.5,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, progress]);

  return (
    <div
      ref={ref}
      className="w-full bg-white/5 rounded-full h-3 overflow-hidden border border-white/10"
    >
      <motion.div
        style={{ width }}
        className="h-full bg-gradient-to-r from-violet-600 to-violet-400 rounded-full"
      />
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2
            variants={cardVariants}
            className="text-3xl sm:text-4xl font-bold text-center mb-4"
            style={{ textShadow: "0 0 20px rgba(139,92,246,0.5)" }}
          >
            Education
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-slate-400 text-center max-w-xl mx-auto mb-12"
          >
            Academic foundation that shaped my engineering mindset
          </motion.p>

          <motion.div
            variants={cardVariants}
            whileHover={{
              y: -4,
              boxShadow: "0 20px 60px rgba(139,92,246,0.15)",
            }}
            className="max-w-2xl mx-auto backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-violet-500/30 transition-colors"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Bachelor of Engineering — Computer Science
                </h3>
                <p className="text-violet-400 text-sm mt-1">
                  Shri Labhubhai Trivedi Institute of Engineering and
                  Technology, Rajkot
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-slate-400 mb-3">
              <span>Graduated: 2025</span>
              <span className="text-violet-400 font-bold">CGPA: 8.34 / 10</span>
            </div>

            <CGPABar />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
