import { motion } from "framer-motion"

const AnimatedTitle = () => {
  const text = "Date Maker";
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0},
    visible: (i = 1) => ({
        opacity: 1, 
        transition: { staggerChildren: 0.1, delayChildren: 0.04 * i},
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 200 },
    },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <motion.h1
    className="text-6xl font-black uppercase tracking-tighter text-slate-900"
    variants={container}
    initial="hidden"
    animate="visible">
        {letters.map((letter, idx) => (
            <motion.span key={idx} variants={child}>
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
    </motion.h1>
)
}

export default AnimatedTitle