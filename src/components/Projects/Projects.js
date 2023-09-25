import React from 'react';
import { Link } from 'react-router-dom';
import JobFinder from '../../assets/Images/job-finder/job-finder1.png';
import AmazingJohn from '../../assets/Images/amazing/Amazing-John.png';
import NayTech from '../../assets/Images/nay-tech/nay-1.png';
import Doctor from '../../assets/Images/doctor/doctor-1.png';

const Projects = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">My Projects</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
                </div>
                {/* Job Finder */}
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={JobFinder} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Job Finder</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/job-finder'>GitHub</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://job-finder-f724e.web.app/'>Website</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/job-finder'>Pictures</Link></p>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Amazing John */}
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={AmazingJohn} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Amazing John</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/job-finder'>GitHub</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://job-finder-f724e.web.app/'>Website</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/job-finder'>Pictures</Link></p>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Nay Tech org */}
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={NayTech} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Nay Tech Org</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/job-finder'>GitHub</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://job-finder-f724e.web.app/'>Website</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/job-finder'>Pictures</Link></p>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Doctor website */}
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={Doctor} />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-gray-900">Doctor Walid</h2>
                                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                <span className="inline-flex">
                                    <a className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/job-finder'>GitHub</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://job-finder-f724e.web.app/'>Website</Link></p>
                                    </a>
                                    <a className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/job-finder'>Pictures</Link></p>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;