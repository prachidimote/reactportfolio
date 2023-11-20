import './contact.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
const variants = {
    initial: {
        y: 500,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggeredChildren: 0.1,
        },
    },
}
const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gm3fq6q', 'template_q083usi', formRef.current, 'vazvUlbtOpwyOz49Q')
          .then(
            // eslint-disable-next-line no-unused-vars
            (result) => {
             setSuccess(true);
          }, 
            // eslint-disable-next-line no-unused-vars
            (error) => {
              setError(true);
          });
      };
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className='textContainer' style={{ color: "white"}}>
         {/* eslint-disable-next-line react/no-unescaped-entities */}
         <motion.h1>Let's Work Together</motion.h1>
         <motion.div className='item'>
            <h2>Mail</h2>
            <span>prachidimote11@gmail.com</span>
         </motion.div>
         <motion.div className='item'>
            <h2>Address</h2>
            <span>Sinhgad Road, Pune - 411041</span>
         </motion.div>
         <motion.div className='item'>
            <h2>Phone</h2>
            <span>+91 9834276775</span>
         </motion.div>     
        </motion.div>
        <motion.div className='formContainer' variants={variants}>          
        <form ref={formRef} onSubmit={sendEmail}>
            <input type='text' required placeholder='Name' name='name' />
            <input type='email' required placeholder='Email' name='email' />
            <textarea rows={8} placeholder='Message' name='message' />
            <button>Submit</button>
            <div className='errorm'>
            <div className='notification'>
                        {error && <p style={{color: "red"}} className='error'><b>Error: Email not sent. Please try again.</b></p>}
                        {success && <p style={{color: "green"}} className='success'><b>Email sent successfully!</b></p>}
                    </div>
            </div>
            </form>    
      </motion.div>
      </motion.div>
  )
    
}

export default Contact