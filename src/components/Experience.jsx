import { motion } from "motion/react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
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

const experiences = [
  {
    company: "Axivolve",
    role: "Full Stack Developer",
    period: "March 2025 – May 2026",
    location: "Remote",
    bullets: [
      "Built SMART-DPR, a voice-driven reporting system using Web Speech API for speech-to-text and Google Sheets API for automated site progress tracking",
      "Implemented LLM-based command parsing to convert unstructured voice inputs into structured spreadsheet entries, reducing manual data entry",
      "Architected complete backend for multiple applications using Node.js, Express.js, MongoDB, and Mongoose with clean MVC structure — controllers, models, and RESTful API routes",
      "Built and integrated responsive React.js frontend interfaces for multiple applications, consuming internal REST API endpoints to deliver dynamic, data-driven user experiences",
    ],
    techs: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST API",
      "Web Speech API",
    ],
  },
  {
    company: "BITNET Infotech",
    role: "Frontend Developer Intern",
    period: "June 2024 – January 2025",
    location: "Rajkot, On-site",
    bullets: [
      "Developed and maintained responsive web applications using React.js, improving UI consistency across 5+ pages",
      "Integrated REST APIs with Redux state management, reducing data-fetch latency by 30% through optimized selectors",
      "Built reusable component library (forms, modals, tables) with React Hook Form + Tailwind CSS, cutting dev time by 40%",
      "Collaborated in Agile sprints, participating in daily standups and code reviews to maintain high code quality",
    ],
    techs: [
      "React.js",
      "Redux",
      "Axios",
      "Tailwind CSS",
      "REST API",
      "React Hook Form",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28">
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
            Work Experience
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-slate-400 text-center max-w-xl mx-auto mb-12"
          >
            Where I&apos;ve contributed and grown as a developer
          </motion.p>

          <div className="relative pl-8 border-l-2 border-violet-500/30 space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
              >
                <motion.div
                  className="absolute left-0 w-4 h-4 rounded-full bg-violet-500 -translate-x-[9px]"
                  style={{ top: `${index * 50}%` }}
                  whileInView={{
                    scale: [0, 1.2, 1],
                  }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true }}
                />

                <motion.div
                  whileHover={{
                    y: -4,
                    boxShadow: "0 20px 60px rgba(139,92,246,0.2)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 hover:border-violet-500/30 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-slate-400 font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-violet-400 font-semibold mb-1">
                    {exp.company}
                  </p>
                  <p className="text-slate-500 text-sm mb-4">
                    {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed">
                        <span className="text-violet-400 mr-2">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs bg-purple-500/10 border border-purple-500/30 rounded-full font-mono text-violet-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;