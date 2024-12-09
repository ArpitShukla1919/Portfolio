import React from 'react'
import Motioneffect from '../components/Motioneffect';
import icon2 from '../assets/img/icon2.png'
import sign from '../assets/img/sign.png'


import { FaCamera, FaGithub, FaLinkedin } from "react-icons/fa";
import { PiPencilCircle } from "react-icons/pi";
import { GiCircleSparks } from "react-icons/gi";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { LuSunMoon } from "react-icons/lu";
import { BiPowerOff } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { motion } from "framer-motion";
import { CgWebsite } from 'react-icons/cg';
import { SiCodechef } from 'react-icons/si';



function Services() {
  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>

      {/* first row start from here */}


      <div className='container grid w-auto h-full grid-cols-1 gap-4 px-6 mx-auto lg:grid-cols-3 lg:px-10 md:container-md md:grid-cols-3'>


        <motion.div
          onClick={() => { window.location.href = "/MoreAboutMe"; }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='flex flex-col items-start col-span-1 pl-12 pr-5 space-y-6 md:pl-4 lg:pl-20 justify-evenly rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 py-7'>

          <div className='flex items-center space-x-10 text-white'><CgWebsite className='text-3xl' /> <p className='text-lg '>Full-Stack Web Development</p></div>
          <div className='flex items-center space-x-10 text-white'><PiPencilCircle className='text-3xl' /> <p className='text-lg '>Custom Web Solutions</p></div>
          <div className='flex items-center space-x-10 text-white'><GiCircleSparks className='text-3xl' /> <p className='text-lg '>Real-Time Application Development</p></div>
          <div className='flex items-center space-x-10 text-white'><MdOutlineMobileFriendly className='text-3xl' /> <p className='text-lg '>Backend API Development and Integration</p></div>

        </motion.div>



        <div className='flex flex-col items-center col-span-1 space-y-5 md:col-span-2 lg:col-span-2'>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }} className='flex flex-row self-center space-x-3 text-3xl font-semibold lg:text-6xl md:text-5xl text-slate-500 group'>
            <LuSunMoon className='group-hover:animate-spin ' /><h1 className='text-white '>MY OFFERINGS</h1><LuSunMoon className='group-hover:animate-spin ' />
          </motion.div>

          <motion.div
            onClick={() => { window.location.href = "/MoreAboutMe"; }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            className='grid grid-cols-1 grid-rows-1 gap-5 p-6 rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 md:lg:grid-cols-2 md:lg:grid-rows-2'>
            <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black' >
              <p className='text-slate-400'>Full-Stack Web Development</p>
              <p className='text-gray-300'>Build end-to-end web applications with modern frameworks like React.js, Next.js, Node.js, and Express.js. From crafting intuitive frontends to developing efficient backends, I deliver scalable and maintainable solutions.</p>
            </div>

            <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black'>
              <p className='text-slate-400'>Custom Web Solutions</p>
              <p className='text-gray-300'>Develop bespoke web applications tailored to your business needs, focusing on usability, responsiveness, and seamless user experiences using technologies like Tailwind CSS, Redux, and MongoDB.</p>
            </div>

            <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black'>
              <p className='text-slate-400'>Real-Time Application Development</p>
              <p className='text-gray-300'>Build real-time features such as live chat, notifications, or interactive dashboards using Socket.IO and robust backend frameworks, providing dynamic and engaging user interactions.</p>
            </div>

            <div className='p-8 space-y-1 shadow-sm rounded-3xl bg-gradient-to-r from-slate-700 to-slate-900 shadow-black'>
              <p className='text-slate-400'>Backend API Development and Integration</p>
              <p className='text-gray-300'>Design RESTful APIs and integrate third-party services to enhance your application’s functionality. I ensure secure, reliable, and scalable server-side operations.</p>
            </div>
          </motion.div>

        </div>

      </div>


      {/* first row ends here */}

      {/* Second row start from here */}

      <div className='container grid w-auto h-full grid-cols-1 grid-rows-1 gap-4 px-4 mx-auto space-y-4 lg:gap-4 md:container-md lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 md:space-y-0 lg:px-10'>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='box-border flex flex-col justify-between w-full h-full group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl md:col-span-1 lg:col-span-1 '
        >
          <div className='flex items-center justify-center p-4  mb-4 shadow-sm space-x-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
            <a href="https://github.com/ArpitShukla1919" target="_blank" rel="noopener noreferrer">
              <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white bg-slate-700 shadow-black'>
                <FaGithub />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/arpit-shukla19/" target="_blank" rel="noopener noreferrer">
              <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white shadow-black bg-slate-700'>
                <FaLinkedin />
              </button>
            </a>
            <a href="https://www.codechef.com/users/sterner_19" target="_blank" rel="noopener noreferrer">
              <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white shadow-black bg-slate-700'>
                <SiCodechef />
              </button>
            </a>
          </div>

          <div className='flex flex-row items-center justify-between'>
            <div>
              <p className='text-sm uppercase text-slate-500'>STAY WITH ME</p>
              <p className='text-xl text-white'>Profiles</p>
            </div>
            <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
              <BiPowerOff className='rotate-90' />
            </div>
          </div>
        </motion.div>




        <motion.div
          onClick={() => { window.location.href = "/Contact"; }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='flex flex-col px-8 cursor-pointer lg:col-span-2 md:col-span-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl group '>
          <div><img src={icon2} alt="div icon" /></div>
          <div className='flex justify-between pb-8'>
            <div className='text-5xl text-white'>
              <p>Let's</p>
              <p>Work <span className='text-[#5B78F6]'>together.</span></p>
            </div>
            <div className='self-end text-4xl text-gray-700 group-hover:text-white'>
              <BiPowerOff className='rotate-90' />
            </div>
          </div>
        </motion.div>



        <motion.div
          onClick={() => { window.location.href = "/MoreAboutMe"; }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className='box-border flex flex-col w-full h-full cursor-pointer lg:col-span-1 md:col-span-2 group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
          <div className='flex items-center justify-center mb-4'>
            <img src={sign} alt="my sign" />
          </div>
          <div className='flex flex-row items-center justify-between'>
            <div>
              <p className='text-sm uppercase text-slate-500'>more about me</p>
              <p className='text-xl text-white'>Credentials</p>
            </div>
            <div className='items-center text-3xl text-gray-700 group-hover:text-white'>
              <BiPowerOff className='rotate-90' />
            </div>
          </div>
        </motion.div>




      </div>



    </div>
  )
}

export default Motioneffect(Services)