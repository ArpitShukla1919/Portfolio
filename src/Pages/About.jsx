import Motioneffect from '../components/Motioneffect';
import Me2 from '../assets/img/me.jpeg'
import icon2 from '../assets/img/icon2.png'
import sign from '../assets/img/sign.png'

import { LuSunMoon } from "react-icons/lu";
import { BiPowerOff } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import {motion} from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const About = () => {

  return (
    <div className='bg-[#0F0F0F] pt-14 space-y-5'>

      {/* First row start from here */}

      <div className='container grid w-auto h-full grid-cols-1 gap-5 px-4 mx-auto space-y-4 lg:space-x-5 md:container-md lg:grid-cols-3 md:grid-cols-1 md:space-y-3 lg:px-10 '>

        <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true, amount: 0.1 }}
              className='col-span-1 p-5 mx-auto w-80 lg:w-auto md:w-[580px] bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
          <div className='flex items-end shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl'>
            <img className='rounded-bl-xl' src={Me2} alt="my second image" />
          </div>
        </motion.div>


        <motion.div
               initial={{ opacity: 0, scale: 0.5 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1 }}
               viewport={{ once: true, amount: 0.1 }}
              className='flex flex-col justify-center col-span-2 space-y-4 lg:space-y-3 md:space-y-5'>

          <div className='flex flex-row self-center space-x-3 text-3xl font-semibold lg:text-6xl md:text-6xl text-slate-500 group'><LuSunMoon className='group-hover:animate-spin ' /><h1 className='text-white '>SELF-SUMMARY</h1><LuSunMoon className='group-hover:animate-spin ' /></div>

          <div className='self-center space-y-4 px-7 pb-7 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl' >

            <img src={icon2} alt="icon2" />
            <h1 className='pt-6 text-5xl text-white capitalize'>Arpit Shukla</h1>
            <p className='capitalize text-neutral-300'>I am a Lucknow-based MERN stack developer with a year of hands-on experience in building dynamic and responsive web applications. With a strong foundation in MongoDB, Express, React, and Node.js, I specialize in creating seamless user experiences and efficient back-end solutions. My diverse experience spans across various industries, allowing me to tackle unique challenges and deliver high-quality, scalable applications.</p>

          </div>

        </motion.div>

      </div>

      {/* First row neds here */}


      {/*Second row start from here*/}


      <div className='container grid w-auto h-full grid-cols-1 gap-4 px-4 mx-auto space-y-4 md:container-md lg:grid-cols-2 md:grid-cols-2 md:space-y-0 lg:px-10'>

          <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                className='box-border flex flex-col p-8 space-y-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
            <h1 className='text-xl text-white'>EXPERIENCE</h1>
            {/* <div>
              <p className='text-gray-400'>Nov,2023 - Present</p>
              <p className='text-lg text-white'>Framer Designer & Developer</p>
              <p className='text-sm text-gray-400'>Bluebase Designs</p>
            </div> */}
            <div>
              <p className='text-gray-400'>Nov,2023 - Present</p>
              <p className='text-lg text-white'>Junior Programmer</p>
              <p className='text-sm text-gray-400'>SAS-One</p>
            </div>
          </motion.div>


          <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1 }}
                 viewport={{ once: true, amount: 0.1 }}
                className='box-border flex flex-col p-8 space-y-4 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>
            <h1 className='text-xl text-white'>EDUCATION</h1>
            <div>
              <p className='text-gray-400'>2019 - 2023</p>
              <p className='text-lg text-white'>Bachelor Of Technology</p>
              <p className='text-sm text-gray-400'>AKTU</p>
            </div>
           
          </motion.div>

      </div>



      {/*Second row ends here*/}


      {/*third row start from here*/}

      <div className='container grid w-auto h-full grid-cols-1 grid-rows-1 gap-4 px-4 mx-auto space-y-4 lg:gap-4 md:container-md lg:grid-cols-4 md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 md:space-y-0 lg:px-10'>
      
            <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                   className='box-border flex flex-col justify-between w-full h-full group p-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl md:col-span-1 lg:col-span-1 '>
                <div className='flex items-center justify-center p-4 mb-4 shadow-sm space-x-9 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl shadow-black'>
                  <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white bg-slate-700 shadow-black '><FaGithub  /></button>
                  <button className='p-3 text-5xl text-center text-white transition-all duration-200 rounded-full shadow-sm hover:text-black hover:bg-white shadow-black bg-slate-700 '><FaLinkedin  /></button>
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
                     onClick={()=>{window.location.href = "/Contact";}}
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
                 onClick={()=>{window.location.href = "/MoreAboutMe";}}
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


    {/*third row ends here*/}


    </div>
  );
}

export default Motioneffect(About);