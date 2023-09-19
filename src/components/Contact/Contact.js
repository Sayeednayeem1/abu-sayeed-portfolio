import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import Lottie from 'lottie-react';
import Test from '../../assets/Images/contact.json';

const Contact = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto max-w-screen-xl px-5 py-24 flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="title-font font-bold text-2xl mb-2 text-gray-800">Contact Me</h1>
                        <div className="leading-relaxed">
                            Thank you for considering reaching out. I'm excited to hear from you!
                            Please feel free to use any of the methods below to get in touch.
                        </div>
                    </div>

                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></p>
                    </div>
                </div>
                <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <Lottie className="object-cover object-center w-full h-full" animationData={Test}></Lottie>
                </div>
            </div>
        </section>
    );
};

export default Contact;