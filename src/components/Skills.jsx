import { motion } from "motion/react";
import cloudinaryLogo from "../assets/cloudinary.svg";
import shadcnLogo from "../assets/shadcn.svg";
import restApiLogo from "../assets/rest_api.svg";

const svgClass = "w-7 h-7";

const skills = {
  Frontend: {
    accent: "#8b5cf6",
    items: [
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Redux", icon: "devicon-redux-original colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "ShadCN", image: shadcnLogo },
    ],
  },
  Backend: {
    accent: "#06b6d4",
    items: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Mongoose", icon: "devicon-mongoose-original colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "REST API", image: restApiLogo },
      { name: "Supabase", icon: "devicon-supabase-plain colored" },
    ],
  },
  "DevOps / Tools": {
    accent: "#22c55e",
    items: [
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Cloudinary", image: cloudinaryLogo },
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
    ],
  },
};

const colVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const tileVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const Skills = () => {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          style={{ textShadow: "0 0 20px rgba(139,92,246,0.5)" }}
        >
          Technical Arsenal
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {categories.map(([category, data], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              whileHover={{ y: -6, boxShadow: `0 20px 50px ${data.accent}33` }}
              className="relative backdrop-blur-[12px] rounded-2xl p-6 overflow-hidden flex-1 min-w-[300px] max-w-[420px]"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="absolute -top-12 -left-12 w-40 h-40 rounded-full blur-[80px] pointer-events-none"
                style={{ background: data.accent, opacity: 0.15 }}
              />

              <h3
                className="text-center font-bold text-base mb-4 pb-3"
                style={{
                  color: data.accent,
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {category}
              </h3>

              <motion.div
                variants={colVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {data.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={tileVariants}
                    whileHover={{
                      scale: 1.06,
                      y: -3,
                      backgroundColor: `${data.accent}22`,
                      borderColor: `${data.accent}55`,
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="flex items-center gap-2 rounded-[10px] px-3 py-2.5 cursor-default flex-1 min-w-[120px]"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className={svgClass}
                      />
                    ) : (
                      <i className={`${skill.icon} text-[28px]`} />
                    )}
                    <span className="text-white text-xs leading-none">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
