import React, { useState } from 'react';

const JobFinder = () => {
    const [fullImage, setFullImage] = useState(null);

    const handleImageClick = (imageSrc) => {
        setFullImage(imageSrc);
    };

    const closeFullImage = () => {
        setFullImage(null);
    };

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-bold title-font text-slate-500 lg:w-1/3 lg:mb-0 mb-4">Job Finder App Pictures</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">To Zoom the images, Please click on the images</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={'https://i.ibb.co/dfqkFS6/Screenshot-from-2023-03-31-11-08-52.png'}
                                    onClick={() => handleImageClick('https://i.ibb.co/dfqkFS6/Screenshot-from-2023-03-31-11-08-52.png')}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={'https://i.ibb.co/CWykBF3/Screenshot-from-2023-03-31-11-09-26.png'}
                                    onClick={() => handleImageClick('https://i.ibb.co/CWykBF3/Screenshot-from-2023-03-31-11-09-26.png')}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block cursor-pointer"
                                    src={'https://i.ibb.co/xshtks0/Screenshot-from-2023-03-31-11-10-27.png'}
                                    onClick={() => handleImageClick('https://i.ibb.co/xshtks0/Screenshot-from-2023-03-31-11-10-27.png')}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block cursor-pointer"
                                    src={'https://i.ibb.co/c3KrJGq/Screenshot-from-2023-03-31-11-10-15.png'}
                                    onClick={() => handleImageClick('https://i.ibb.co/c3KrJGq/Screenshot-from-2023-03-31-11-10-15.png')}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={'https://i.ibb.co/12kP7vH/Screenshot-from-2023-03-31-11-09-52.png'}
                                    onClick={() => handleImageClick('https://i.ibb.co/12kP7vH/Screenshot-from-2023-03-31-11-09-52.png')}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={'https://i.ibb.co/b7B1H8F/Screenshot-from-2023-03-31-11-27-51.png'}
                                    onClick={() => handleImageClick('https://i.ibb.co/b7B1H8F/Screenshot-from-2023-03-31-11-27-51.png')}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {fullImage && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-75" onClick={closeFullImage}></div>
                    <div className="z-10">
                        <img
                            src={fullImage}
                            alt=""
                            className="max-w-screen-xl max-h-screen-xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobFinder;
