import { useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react";

const stats = [
  { value: 2, suffix: " Years", label: "Professional Experience" },
  { value: 5, suffix: "+", label: "Full Stack Projects" },
  { value: 8.34, suffix: "", label: "CGPA" },
  { value: 10, suffix: "+", label: "Technologies" },
];

const StatCard = ({ value, suffix, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    Number.isInteger(value) ? Math.round(v) : parseFloat(v.toFixed(2)),
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.97 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 text-center hover:border-violet-500/30 transition-colors"
      whileHover={{
        y: -4,
        boxShadow: "0 0 30px rgba(139,92,246,0.15)",
      }}
    >
      <div className="text-3xl sm:text-4xl font-extrabold text-violet-400 mb-1">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <p className="text-slate-400 text-sm">{label}</p>
    </motion.div>
  );
};

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

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
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
            About Me
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-slate-400 text-center max-w-xl mx-auto mb-12"
          >
            A passionate developer with a knack for building end-to-end web
            solutions
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="flex-1 min-w-[200px] max-w-[280px]">
                <StatCard {...stat} />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
