import './skills.scss';
import { motion } from 'framer-motion';
const variants = {
    initial: {
      x: 90,
      y: 400,
      opacity: 0,
    },
    animate:{
      X: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };
const Skills = () => {
  return (
    <motion.div className="skills">
        <motion.div className='box'  variants={variants}
    initial="initial"
    whileInView="animate">

           <img src='/htmllogo.png' alt='' />
           <img src='/CSS.png' alt='' />
           <img src='/javascript.png' alt='' />
           <img src='/reactlogo.png' alt='' />
           <img src='/reduxlogo.png' alt='' />
           <img src='/vuelogo.png' alt='' />
           <img src='/javalogo.png' alt='' />
           <img src='/scsslogo.png' alt='' />
           <img src='/tailwindlogo.png' alt='' />
           <img src='/githublogo.png' alt='' />
        </motion.div>
    </motion.div>
  )
}

export default Skills