import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "ronaksakariya01@gmail.com",
    href: "mailto:ronaksakariya01@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/ronaksakariya",
    href: "https://linkedin.com/in/ronaksakariya",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/ronaksakariya",
    href: "https://github.com/ronaksakariya",
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

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
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
            Let&apos;s Connect
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="text-slate-400 text-center max-w-xl mx-auto mb-12"
          >
            I&apos;m actively looking for full-time opportunities. Whether you
            have a role, a project, or just want to say hi — my inbox is open.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {contacts.map((contact) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  contact.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  boxShadow: "0 16px 40px rgba(139,92,246,0.25)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col items-center text-center hover:border-violet-500/30 transition-colors flex-1 min-w-[240px] max-w-[340px]"
              >
                <div className="p-3 bg-violet-500/10 rounded-lg text-violet-400 mb-3">
                  <contact.icon size={28} />
                </div>
                <h3 className="font-bold text-white mb-1">{contact.label}</h3>
                <p className="text-slate-400 text-sm break-all">
                  {contact.value}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
