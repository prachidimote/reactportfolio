import './skills.scss';
import { motion } from 'framer-motion';
const variants = {
  initial: {
    // x: 200,
    y: 100,
    opacity: 0,
  },
  animate:{
    // X: 0,
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
      
         <div className='grid-container'>
           <img className='grid-item' src='/htmllogo.png' alt='' />
           <img className='grid-item' src='/CSS.png' alt='' />
           <img className='grid-item' src='/javascript.png' alt='' />
           <img className='grid-item' src='/reactlogo.png' alt='' />
           <img className='grid-item' src='/reduxlogo.png' alt='' />
           <img className='grid-item' src='/vuelogo.png' alt='' />
           <img className='grid-item' src='/javalogo.png' alt='' />
           <img className='grid-item' src='/scsslogo.png' alt='' />
           <img className='grid-item' src='/tailwindlogo.png' alt='' />
           <img className='grid-item' src='/githublogo.png' alt='' /> 
           </div>
        </motion.div>
    </motion.div>
  )
}

export default Skills