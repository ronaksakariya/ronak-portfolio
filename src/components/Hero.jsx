import { useState, useEffect, useRef } from "react";
import { motion, animate, useMotionValue, useTransform } from "motion/react";
import { ArrowDown, ExternalLink } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Specialist",
  "Open to Opportunities",
];

const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateParticles = () =>
  Array.from({ length: 150 }, (_, i) => ({
    id: i,
    size: seededRandom(i * 7 + 1) * 3 + 1.5,
    x: `${seededRandom(i * 7 + 2) * 100}%`,
    y: `${seededRandom(i * 7 + 3) * 100}%`,
    opacity: seededRandom(i * 7 + 4) * 0.5 + 0.2,
    driftX: seededRandom(i * 7 + 5) * 60 + 30,
    driftY: seededRandom(i * 7 + 6) * 60 + 30,
    duration: seededRandom(i * 7 + 7) * 20 + 15,
    delay: seededRandom(i * 7 + 8) * 10,
  }));

const particles = generateParticles();

const Particle = ({ p, mouseX, mouseY, width, height }) => {
  const baseX = (parseFloat(p.x) / 100) * width;
  const baseY = (parseFloat(p.y) / 100) * height;

  const driftX = useMotionValue(0);
  const driftY = useMotionValue(0);

  useEffect(() => {
    const controlsX = animate(driftX, [0, p.driftX, -p.driftX * 0.5, 0], {
      duration: p.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: p.delay,
    });
    const controlsY = animate(driftY, [0, -p.driftY, p.driftY * 0.3, 0], {
      duration: p.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: p.delay,
    });
    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [driftX, driftY, p.driftX, p.driftY, p.duration, p.delay]);

  const cursorOffsetX = useTransform(mouseX, (latest) => {
    if (!width) return 0;
    const dist = latest - baseX;
    return dist * 0.04;
  });
  const cursorOffsetY = useTransform(mouseY, (latest) => {
    if (!height) return 0;
    const dist = latest - baseY;
    return dist * 0.04;
  });

  const totalX = useTransform([driftX, cursorOffsetX], ([d, c]) => d + c);
  const totalY = useTransform([driftY, cursorOffsetY], ([d, c]) => d + c);

  return (
    <motion.div
      className="absolute rounded-full bg-violet-400"
      style={{
        width: p.size,
        height: p.size,
        left: p.x,
        top: p.y,
        x: totalX,
        y: totalY,
        opacity: p.opacity,
      }}
      animate={{
        scale: [1, 1.4, 0.8, 1],
        opacity: [p.opacity, p.opacity * 2.5, p.opacity, p.opacity],
      }}
      transition={{
        duration: p.duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: p.delay,
      }}
    />
  );
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        const { width, height } = sectionRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    } else {
      const speed = isDeleting ? 40 : 80;
      timeoutRef.current = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1),
        );
      }, speed);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  const heroContainer = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <Particle
            key={p.id}
            p={p}
            mouseX={mouseX}
            mouseY={mouseY}
            width={dimensions.width}
            height={dimensions.height}
          />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/35 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-600/25 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-fuchsia-600/20 rounded-full blur-[120px]" />
      </div>

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center pt-20"
      >
        <motion.div variants={heroItem}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Full-Time Roles
            <span className="ml-1">👋</span>
          </span>
        </motion.div>

        <motion.h1
          variants={heroItem}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight mb-4"
        >
          <span className="text-white">Ronak </span>
          <span className="text-violet-400">Sakariya</span>
        </motion.h1>

        <motion.p
          variants={heroItem}
          className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 font-mono"
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-violet-400"
          >
            |
          </motion.span>
        </motion.p>

        <motion.p
          variants={heroItem}
          className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8"
        >
          Engineered for performance. Built for scale. Shipped to production.
          Building robust backends and polished frontends that scale beyond
          expectations.
        </motion.p>

        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Projects <ExternalLink size={16} />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-violet-500/50 text-violet-400 hover:bg-violet-500/10 font-semibold rounded-lg flex items-center gap-2"
          >
            View Resume <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-slate-500 hover:text-violet-400 transition-colors"
        >
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
