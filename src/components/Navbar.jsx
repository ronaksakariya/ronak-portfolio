import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const Navbar = ({ activeSection }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navContent = (
    <>
      <style>{`
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shine-text {
          background: linear-gradient(90deg, #a78bfa 0%, #ffffff 50%, #a78bfa 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shine 3s linear infinite;
        }
      `}</style>
      <motion.div
        style={{
          scaleX,
          originX: 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          zIndex: 9999,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#8b5cf6",
          }}
        />
      </motion.div>
      <motion.nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9998,
          background: "transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1152,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: 16,
            paddingRight: 16,
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="sm:px-6"
        >
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("hero")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-extrabold tracking-tight no-underline shine-text font-quantico"
          >
            <span>rsak.</span>
            <span className="text-indigo-400">dev</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className="relative px-3 py-2 text-sm font-medium rounded-md transition-colors text-slate-400 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      backgroundColor: "#8b5cf6",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{
            height: menuOpen ? "auto" : 0,
            opacity: menuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="px-4 pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`text-left text-sm py-2 px-3 rounded-lg ${
                  activeSection === item.id
                    ? "text-violet-400 bg-violet-500/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );

  if (typeof window === "undefined") return null;
  return createPortal(navContent, document.body);
};

export default Navbar;
