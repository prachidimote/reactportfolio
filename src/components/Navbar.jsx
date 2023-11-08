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
            >Prachi Dimote</motion.span>
            <div className='social'>
                <a href='linkedin'><img src='/linkedinicon.png' alt='image' /></a>
                <a href='github'><img src='/github.png' alt='image' /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar