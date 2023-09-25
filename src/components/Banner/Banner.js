import React from 'react';
import Typewriter from 'typewriter-effect';
import BannerPic from '../../assets/Images/BannerPic.jpg';
import './Banner.css';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col mt-0 md:mt-0 lg:mt-20 items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className='text-slate-500 font-bold mb-4'>WELCOME TO MY WORLD</h1>
                    <div className='text-5xl font-bold mb-4'>
                        <Typewriter
                            options={{
                                strings: [
                                    '<span>Hi, I am <span style="color: #FF004D;">Abu Sayeed</span></span>',
                                    '<span <span style="color: #FF004D;" >A web Developer</span>',
                                ],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>

                    <p className="mb-8 leading-relaxed">Welcome to my portfolio! I'm Abu Sayeed, a passionate web developer with a knack for crafting dynamic and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I specialize in creating seamless, intuitive online experiences.</p>
                    <p className="mb-8 leading-relaxed">I'm well-versed in cutting-edge technologies, including React.js for building interactive user interfaces and leveraging npm packages to streamline development. Additionally, I harness the power of frameworks like Tailwind and Bootstrap to ensure elegant and responsive designs across various platforms.</p>
                    <div>
                        <h4 className='text-slate-500 font-bold mb-4'>FIND ME</h4>
                        <div className="grid justify-center grid-cols-2 lg:grid-cols-4 gap-4">
                            <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'> <Link target='_blank' to='https://www.linkedin.com/in/sayeed-nayeem/'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></Link></p>
                            <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><Link target='_blank' to='https://web.facebook.com/sayed.nayem.188'><FaFacebookF className='text-2xl'></FaFacebookF></Link></p>
                            <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation' onClick={() => window.location.href = 'mailto:sayeedn850@gmail.com'}><AiOutlineMail className='text-2xl'></AiOutlineMail></p>
                            <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><Link target='_blank' to='https://github.com/Sayeednayeem1'><AiFillGithub className='text-2xl'></AiFillGithub></Link></p>
                        </div>
                    </div>


                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img className="object-cover object-center rounded" alt="hero" src={BannerPic} />
                </div>
            </div>
            <Footer></Footer>
        </section>
    );
};

export default Banner;