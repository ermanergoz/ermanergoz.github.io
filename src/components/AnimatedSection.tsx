import { motion, Variants } from "framer-motion";

const animationVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 250,
  },
  onscreen: {
    opacity: 1,
    y: 30,
  }
};

interface AnimatedSectionProps {
  id: string;
  children: React.ReactNode;
}

const AnimatedSection = ({ id, children }: AnimatedSectionProps) => {
  return (
    <motion.section
      id={id}
      initial="offscreen"
      whileInView="onscreen"
      variants={animationVariants}
      transition={{ duration: 0.25 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
