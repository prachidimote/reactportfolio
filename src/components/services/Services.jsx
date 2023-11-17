import './services.scss';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';

const variants = {
  initial: {
    x: 200,
    y: 100,
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

const Services = () => {  
  const servicesData = [
    {
      title: 'Zymmr',
      description: 'I developed Project Manaement tool called zymmr which is VueJS application. In this user can create projects, upload files to the database, log time',
    },
    {
      title: 'Rick & Morty',
      description: 'I developed simple ReactJS application called Rick and Morty. In this user can fetch characters through an API and performed different operations such as searching characters by name, filtering locations and episodes, Pagination is also implemented.',
    },
    {
      title: 'Portfolio',
      description: 'I developed simple portfolio which is a React application. This app includes my projects and skills',
    },
    {
      title: 'Cake and Icecream App',
      description: 'I made a basic Redux toolkit app in which user can order Icecream ad cakes and vendor keep restocking Icecreams and cakes',
    },
  ];

  return (
    <motion.div className='services' 
    >
      <motion.div className='textContainer'>
        <p style={{ color: "white", fontFamily: "sans-serif", fontSize: "20px"}}><b>I focus on building responsive<br/>and user-friendly applications</b></p>
        <hr/>
      </motion.div>
      <motion.div className='titleContainer'>
        <button className='btn'>My Projects</button>
      </motion.div>
      <motion.div className='listContainer' variants={variants}
    initial="initial"
    whileInView="animate">
        {servicesData.map((service, index) => (
          <motion.div className='box' whileHover={{ background: "lightgray", color: "black"}} key={index}><ServiceCard title={service.title} description={service.description} /></motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
