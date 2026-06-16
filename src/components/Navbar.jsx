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
      <motion.div
        style={{ scaleX, originX: 0 }}
        className="fixed top-0 left-0 right-0 h-0.5 z-[9999]"
      >
        <div className="w-full h-full bg-violet-500" />
      </motion.div>

      <motion.nav className="fixed top-0 left-0 right-0 z-[9998] pt-3 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-violet-500/15 bg-[#0d0d14]/60 backdrop-blur-xl shadow-lg shadow-black/25">
            <div className="h-14 px-4 sm:px-5 flex items-center justify-between">
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
                    className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors text-slate-400 hover:text-white hover:bg-white/5"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-3 right-3 h-0.5 rounded-full bg-violet-500"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              <motion.button
                className="md:hidden text-slate-300 p-1 rounded-lg hover:bg-white/5 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.button>
            </div>
          </div>

          <motion.div
            className="md:hidden mt-2 overflow-hidden rounded-2xl border border-violet-500/15 bg-[#0d0d14]/60 backdrop-blur-xl shadow-lg shadow-black/25"
            initial={false}
            animate={{
              height: menuOpen ? "auto" : 0,
              opacity: menuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-3 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleClick(item.id)}
                  className={`text-left text-sm py-2 px-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-violet-400 bg-violet-500/10"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );

  if (typeof window === "undefined") return null;
  return createPortal(navContent, document.body);
};

export default Navbar;
