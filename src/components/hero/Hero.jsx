import "./hero.scss";
import { motion } from "framer-motion";
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: "-220%",
//     transition: {
//       repeat: Infinity,
//       repeatType:"mirror",
//       duration: 20,
//     },
//   },
// };

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
          style={{ marginLeft: 80}}
        >
          <motion.h2 variants={textVariants}>PRACHI DIMOTE</motion.h2>
          <motion.h1 variants={textVariants} style={{ color: "white"}}>
            Frontend Developer
          </motion.h1>
         
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;