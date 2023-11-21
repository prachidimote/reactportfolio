// import { color } from 'framer-motion';
import Sidebar from './Sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';
function Navbar() {
  return (
    <div className='navbar'>
        {/* Sidebar */}
        <Sidebar></Sidebar>
        <div className='wrapper'>
            <motion.span style={{ color: 'yellow' }}
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity:1, scale: 1}}
            transition={{duration: 0.5}}
            ></motion.span>
            <div className='social'>
                <a href='https://www.linkedin.com/in/prachi-dimote-47a187191/'><img src='/linkedinicon.png' alt='image' style={{height: "45px", width: "45px"}}/></a>
                <a href='https://github.com/prachidimote'><img src='/github2.png' alt='image' style={{height:"40px", width:"40px", borderRadius:"10px"}} /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar