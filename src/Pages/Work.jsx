import React, { useState, useEffect } from 'react';
import Motioneffect from '../components/Motioneffect';
import projectsData from '../assets/data.json'; // Import the JSON data

import { motion } from 'framer-motion';
import { LuSunMoon } from "react-icons/lu";
import { Link } from 'react-router-dom';

function Work() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Set data directly from the imported JSON file
    setData(projectsData.projects);
  }, []);

  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className='container flex flex-row items-center self-center w-full h-auto px-4 mx-auto space-x-3 text-3xl font-semibold text-center pb-14 lg:px-10 md:container-md lg:text-6xl md:text-5xl text-slate-500 group'>
        <LuSunMoon className='group-hover:animate-spin ' />
        <h1 className='text-white '>ALL PROJECTS.</h1>
        <LuSunMoon className='group-hover:animate-spin ' />
      </motion.div>

      <div className='container grid grid-cols-1 gap-5 px-4 mx-auto md:container-md lg:px-10 md:grid-cols-2 lg:grid-cols-3'>
        {Array.isArray(data) && data.map((project, index) => {
          const { title, description, github_link, image_url } = project;
          return (
            <Link
              to={github_link}
              target="_blank"
              rel="noopener noreferrer"
              className='flex flex-col items-center justify-center p-6 space-y-4 text-white transition-all duration-300 shadow-sm cursor-pointer hover:scale-105 hover:text-yellow-200 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'
              key={index}
            >
              <img className='rounded-3xl' src={image_url} alt={title} />
              <h1 className='text-lg text-slate-300'>{title}</h1>
              <p className='text-sm text-slate-400'>{description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Motioneffect(Work);
