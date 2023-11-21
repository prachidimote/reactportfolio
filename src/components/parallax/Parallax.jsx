import './parallax.scss';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticlesBackground from '../ParticlesBackground';

// eslint-disable-next-line react/prop-types
const Parallax = ({ type }) => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  })

  const yBg=useTransform(scrollYProgress, [0,1], ["0%", "500%"])
  const sBg=useTransform(scrollYProgress, [0,1], ["0%", "100%"])



  return (
    <div 
    className='parallax' 
    ref={ref}
    style={{
      background: 
      type === "services" 
      ? "linear-gradient(180deg, #111132, #0c0c1d)"
      : "linear-gradient(180deg, #111132, #505064)",
    }}    
    >    
   
        <motion.h1 style={{ y: yBg, textAlign: "center"}}>{type === "projects" ? "My Recent Projects" : "My Skills"}</motion.h1>
        <motion.div className='mountains'></motion.div>
        <motion.div className='planets' style={{ 
          backgroundImage: `url(${type==="skills" ? "/planets.png" : "/sun.png"})`
        }}></motion.div>
        <motion.div style={{ x: sBg}} className='stars'></motion.div>
        <ParticlesBackground />  
    </div>
  )
}

export default Parallax