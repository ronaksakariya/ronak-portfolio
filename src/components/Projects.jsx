import { motion } from "motion/react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import ecommImg from "../assets/ecomm_project.png";
import gigflowImg from "../assets/gigflow_project.png";
import gethiredImg from "../assets/gethired_project.png";

const projects = [
  {
    name: "Foreevr — E-Commerce Platform",
    summary:
      "Full-stack shopping experience with JWT auth, role-based access, and Razorpay payment gateway — secured with HMAC webhook verification and real-time inventory management.",
    image: ecommImg,
    live: "https://forever-ecommerce-user-store.vercel.app/",
    github: "https://github.com/ronaksakariya/forever-ecommerce-store",
  },
  {
    name: "GigFlow — Lead Management Dashboard",
    summary:
      "A type-safe lead management system built with React + TypeScript, featuring role-based access, debounced server-side filtering, Zod-validated forms, and one-click CSV export across 4 protected routes.",
    image: gigflowImg,
    live: "https://gigflow-sales-dashboard.vercel.app/",
    github: "https://github.com/ronaksakariya/gigflow-sales-dashboard",
  },
  {
    name: "GetHired — Full Stack Job Portal",
    summary:
      "End-to-end hiring platform where candidates apply with PDF resumes and track applications in real-time, while recruiters manage pipelines — all secured with Supabase RLS and JWT sessions.",
    image: gethiredImg,
    live: "https://get-hired-sand.vercel.app/",
    github: "https://github.com/ronaksakariya/get-hired",
  },
];

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

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -8,
      scale: 1.02,
      boxShadow: "0 20px 60px rgba(139,92,246,0.2)",
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="backdrop-blur-md bg-white/5 border border-white/10 border-t-2 border-t-violet-500 rounded-xl overflow-hidden flex flex-col hover:border-violet-500/30 transition-colors"
  >
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>

    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>

      <p className="text-slate-300 text-sm leading-relaxed mb-4">
        {project.summary}
      </p>

      <div className="flex gap-4 mt-auto">
        <motion.a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          <ExternalLink size={14} /> Live Demo
        </motion.a>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-300 transition-colors"
        >
          <GithubIcon size={14} /> Source
        </motion.a>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
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
            Featured Projects
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-slate-400 text-center max-w-xl mx-auto mb-12"
          >
            Real-world applications built with production-grade code
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex-1 min-w-[300px] max-w-[420px]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <motion.div
            variants={cardVariants}
            className="flex justify-center mt-10"
          >
            <motion.a
              href="https://github.com/ronaksakariya?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 4 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
            >
              View more projects on Github <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
