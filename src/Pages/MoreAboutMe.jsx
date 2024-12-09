import React from 'react'
import Me from '../assets/img/me.jpeg'
import Motioneffect from '../components/Motioneffect'

import { Link } from 'react-router-dom'
import { TbWorld } from "react-icons/tb";
import { SlSocialTwitter } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiCodechef } from 'react-icons/si';



function MoreAboutMe() {
    return (
        <div className='bg-[#0F0F0F] pt-14'>
            <div className='container grid grid-cols-1 gap-6 px-4 mx-auto space-y-5 md:grid-cols-3 lg:grid-cols-3 lg:px-10 md:container-md md:space-x-4 ' >



                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='box-border sticky flex flex-col items-center col-span-1 p-6 space-y-10 top-10 md:col-span-1 lg:col-span-1 bg-gradient-to-r from-slate-700 to-slate-900 rounded-3xl'>

                        <div className='flex items-end shrink-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl' >
                            <img className='rounded-b-3xl' src={Me} alt="my photo" />
                        </div>
                        <div className='space-y-2 text-center'>
                            <h2 className='text-3xl font-semibold text-white '>Arpit Shukla</h2>
                            <p className='text-lg text-slate-500'>@arpitshukla</p>
                        </div>
                        <div className='flex space-x-3 text-2xl md:space-x-2 lg:space-x-3'>
                            <a
                                href="https://github.com/ArpitShukla1919"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer bg-slate-800 shadow-black hover:bg-white hover:text-black'
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/arpit-shukla19/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer hover:text-black bg-slate-800 shadow-black hover:bg-white'
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://www.codechef.com/users/sterner_19"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='p-3 text-white transition-all duration-300 rounded-full shadow-sm cursor-pointer hover:text-black bg-slate-800 shadow-black hover:bg-white'
                            >
                                <SiCodechef />
                            </a>
                        </div>
                        <div className='w-full p-2 text-lg text-center text-white transition-all duration-300 shadow-sm hover:text-black focus:scale-90 bg-slate-800 hover:bg-white shadow-black rounded-3xl' >
                            <Link to={"/Contact"} > Contact Me </Link>
                        </div>

                    </motion.div>
                </div>







                <div className='flex flex-col col-span-1 space-y-12 md:col-span-2 lg:col-span-2'>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}>

                        <h2 className='pb-8 text-xl font-semibold text-white uppercase'>About Me</h2>
                        <p className='text-lg text-gray-300 '>A passionate and innovative Web Developer with one year of professional experience, I specialize in creating responsive, cutting-edge web applications using modern technologies like React.js, Next.js, and Tailwind CSS. My technical expertise spans full-stack development, with robust skills in Node.js, Express.js, and comprehensive database solutions including MongoDB and SQL. Demonstrating a strong foundation in data structures and algorithms from my C++ background, I have successfully developed standout projects including a Zerodha website clone, a Twitter-like backend system, and a real-time chat application that showcase my ability to design scalable, high-performance solutions. My approach combines technical precision with user-centric design, leveraging advanced front-end and back-end technologies to create innovative digital experiences that solve complex challenges. Driven by a passion for continuous learning and technological excellence, I excel at transforming intricate technical requirements into intuitive, efficient web applications that deliver exceptional user experiences and push the boundaries of digital innovation.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='space-y-1'>
                        <h2 className='pb-8 text-xl font-semibold text-white uppercase'>EXPERIENCE</h2>
                        <p className='text-lg text-slate-400'>Nov/2023 - Present</p>
                        <p className='text-[#5B78F6] text-xl font-semibold'>Junior Programmer</p>
                        <p className='text-sm text-slate-400'>SAS-One Pvt. Ltd</p>
                        <p className='text-lg text-gray-300 '>As a Junior Programmer at SAS-One, I have been actively contributing to the development of responsive user interfaces and robust admin panels using Next.js and React. I have integrated APIs and implemented performance optimization techniques such as code splitting and image optimization. My role involves close collaboration with cross-functional teams, leveraging tools like Git for version control. Additionally, I have worked extensively with both SQL and NoSQL databases, ensuring efficient data handling and application scalability.</p>
                    </motion.div>



                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className='space-y-1'>
                        <h2 className='pb-8 text-xl font-semibold text-white uppercase'>Education</h2>
                        <p className='text-lg text-slate-400'>2019 - 2023</p>
                        <p className='text-[#5B78F6] text-xl font-semibold'>Bachelor Of Technology</p>
                        <p className='text-sm text-slate-400'>Dr. A. P. J. Abdul Kalam Technical University, Lucknow</p>
                        <p className='text-lg text-gray-300 '>SGPA:- 8.1</p>
                    </motion.div>



                    <div className='space-y-2'>
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            className='pb-6 text-xl font-semibold text-white uppercase'>
                            Skills
                        </motion.h2>
                        <div className='grid grid-cols-1 grid-rows-1 gap-5 md:lg:grid-cols-2 md:lg:grid-rows-2'>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className='space-y-5'>


                                <div>
                                    <p className='text-xl font-semibold text-white'>C++</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>HTML5</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>CSS3</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>JavaScript</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>SQL</p>

                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>NoSQL</p>

                                </div>

                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                className='col-span-1 space-y-5'>

                                <div>
                                    <p className='text-xl font-semibold text-white'>ReactJS</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>NextJS</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>NodeJS</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>ExpressJS</p>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>TailwindCSS</p>

                                </div>
                                <div>
                                    <p className='text-xl font-semibold text-white'>Docker</p>

                                </div>

                            </motion.div>


                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Motioneffect(MoreAboutMe)