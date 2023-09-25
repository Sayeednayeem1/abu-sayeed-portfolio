import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-bold title-font mb-4 text-slate-500 tracking-widest">My Projects</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Welcome to my portfolio! I believe in crafting digital experiences that resonate with users. Each project is a journey in creativity and problem-solving, where I strive to merge form with function. From intuitive user interfaces to captivating visuals, every detail is considered. Explore these showcases of my work - a testament to my passion for design and development.
                    </p>

                </div>
                {/* Job Finder */}
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src='https://i.ibb.co/dfqkFS6/Screenshot-from-2023-03-31-11-08-52.png' />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-slate-500 lg:mb-2">Job Finder</h2>

                                <p className="mb-4">The Job Finder App boasts a striking visually captivating landing page that immediately captures the user's attention.
                                    This aesthetically pleasing introduction sets the tone for an exceptional user experience. With an emphasis on
                                    design, the app provides a seamless platform for job seekers to explore a wide range of employment opportunities.</p>
                                <span className="inline-flex">
                                    <p className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/job-finder'>GitHub</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://job-finder-f724e.web.app/'>Website</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/job-finder'>Pictures</Link></p>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Amazing John */}
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src='https://i.ibb.co/QbZyF2F/Amazing-John.png' />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-slate-500 lg:mb-1">Amazing John</h2>

                                <p className="mb-4">The Amazing John's Buy and Sell Platform features a captivating landing page. It hosts a dynamic e-commerce
                                    marketplace where users can seamlessly browse and purchase products. Sellers have the capability to add and
                                    showcase their offerings. The platform also includes a blog page for valuable insights and information. Admins can
                                    efficiently manage orders, products, and user activity through a user-friendly dashboard and purchase products.</p>
                                <span className="inline-flex">
                                    <p className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/-b612-used-products-resale-client'>GitHub</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://amazing-john.web.app/'>Website</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/amazing-john'>Pictures</Link></p>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Nay Tech org */}
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src='https://i.ibb.co/f4JfFm2/Screenshot-from-2023-03-26-16-11-53.png' />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-slate-500 lg:mb-2">Nay Tech Org</h2>

                                <p className="mb-4">The Nay Tech Org is a demo Official Website that features a stunning landing page.This visually stunning introduction
                                    sets the stage for a great user experience. Visitors can explore Nay Tech Org's comprehensive range of services, from
                                    mobile app development to business consulting, gaining insights into the company's mission and values.</p>
                                <span className="inline-flex">
                                    <p className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/nay-tech-org'>GitHub</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://nay-tech-org.vercel.app/'>Website</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/nay-tech'>Pictures</Link></p>
                                    </p>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Doctor website */}
                    <div className="p-4 lg:w-1/2 shadow-md">
                        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                            <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src='https://i.ibb.co/KL8jgZB/doctor2.png' />
                            <div className="flex-grow sm:pl-8">
                                <h2 className="title-font font-medium text-lg text-slate-500">Doctor Walid</h2>

                                <p className="mb-4">Welcome to Doctor Walid's Official Website, your gateway to exceptional personalized healthcare. Dr. Walid offers a range of specialized services designed to cater to your unique health needs. Whether it's a general health check-up, specialized consultation, nutritional guidance, chronic disease management, preventive care, or holistic wellness, you're in capable hands.</p>
                                <span className="inline-flex">
                                    <p className="text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'> <Link target='_blank' to='https://github.com/Sayeednayeem1/b6a11-service-review-client'>GitHub</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link target='_blank' to='https://dr-walid-client.web.app/'>Website</Link></p>
                                    </p>
                                    <p className="ml-2 text-gray-500">
                                        <p className='bg-[#E0EDEF] hover:bg-gray-200 shadow-xl flex items-center p-2 rounded-lg cursor-pointer icon-animation text-1xl font-semibold'><Link to='/doctor'>Pictures</Link></p>
                                    </p>
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