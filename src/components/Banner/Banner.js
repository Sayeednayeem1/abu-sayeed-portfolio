import React from 'react';
import Typewriter from 'typewriter-effect';
import BannerPic from '../../assets/Images/BannerPic.jpg';

const Banner = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col mt-0 md:mt-0 lg:mt-20 items-center">
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
                    <div className="flex justify-center">
                        <button className="inline-flex text-black bg-[#EAF1F4] shadow-xl border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Facebook</button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        <p className='bg-[#E0EDEF] shadow-xl flex items-center p-4 rounded-sm'>Google</p>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img className="object-cover object-center rounded" alt="hero" src={BannerPic} />
                </div>
            </div>
        </section>
    );
};

export default Banner;