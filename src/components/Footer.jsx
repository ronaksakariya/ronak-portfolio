import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.a
            href="mailto:ronaksakariya01@gmail.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-500 hover:text-violet-400 transition-colors"
          >
            <Mail size={18} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ronaksakariya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-500 hover:text-violet-400 transition-colors"
          >
            <LinkedinIcon size={18} />
          </motion.a>
          <motion.a
            href="https://github.com/ronaksakariya"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-500 hover:text-violet-400 transition-colors"
          >
            <GithubIcon size={18} />
          </motion.a>
        </div>
        <p className="text-slate-500 text-sm">
          Designed & Built by Ronak Sakariya
          <span className="mx-2 inline-block w-1 h-1 rounded-full bg-violet-500" />
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;