import React from 'react';
import { FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-10 mx-auto flex items-center md:flex-row flex-col">
                <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                    <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Abu Sayeed Md. Nayeem</h2>
                    <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">Copyright © 2023 - All right reserved</h1>
                </div>
                <div class="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                    <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'>
                        <Link target='_blank' to='whatsapp://send?phone=+8801751589952'>
                            <FaWhatsapp className='text-2xl'></FaWhatsapp>
                        </Link>
                    </p>
                    <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-6 rounded-lg cursor-pointer icon-animation'>
                        <Link target='_blank' to='https://twitter.com/SayeedNayeem9'>
                            <FaTwitter className='text-2xl'></FaTwitter>
                        </Link>
                    </p>
                </div>
            </div >
        </section >
    );
};

export default Footer;