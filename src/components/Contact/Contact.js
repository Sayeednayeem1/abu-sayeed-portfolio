import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Lottie from 'lottie-react';
import Test from '../../assets/Images/contact.json';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';

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
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'> <Link target='_blank' to='https://www.linkedin.com/in/sayeed-nayeem/'><FaLinkedinIn className='text-2xl'></FaLinkedinIn></Link></p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'><Link target='_blank' to='https://web.facebook.com/sayed.nayem.188'><FaFacebookF className='text-2xl'></FaFacebookF></Link></p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation' onClick={() => window.location.href = 'mailto:sayeedn850@gmail.com'}><AiOutlineMail className='text-2xl'></AiOutlineMail></p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/6 w-1/2">
                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'>
                            <Link target='_blank' to='https://twitter.com/SayeedNayeem9'>
                                <FaTwitter className='text-2xl'></FaTwitter>
                            </Link>
                        </p>
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