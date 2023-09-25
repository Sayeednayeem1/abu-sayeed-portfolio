import React, { useState } from 'react';
import pic1 from '../../assets/Images/nay-tech/nay-1.png';
import pic2 from '../../assets/Images/nay-tech/nay-2.png';
import pic3 from '../../assets/Images/nay-tech/nay-3.png';
import pic4 from '../../assets/Images/nay-tech/nay-4.png';
import pic5 from '../../assets/Images/nay-tech/nay-5.png';
import pic6 from '../../assets/Images/nay-tech/nay-6.png';

const NayTech = () => {

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
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Job Finder App Pictures</h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">To Zoom the images, Please click on the images</p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={pic1}
                                    onClick={() => handleImageClick(pic1)}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={pic2}
                                    onClick={() => handleImageClick(pic2)}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block cursor-pointer"
                                    src={pic3}
                                    onClick={() => handleImageClick(pic3)}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                                <img
                                    alt="gallery"
                                    className="w-full h-full object-cover object-center block cursor-pointer"
                                    src={pic4}
                                    onClick={() => handleImageClick(pic4)}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={pic5}
                                    onClick={() => handleImageClick(pic5)}
                                />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                                <img
                                    alt="gallery"
                                    className="w-full object-cover h-full object-center block cursor-pointer"
                                    src={pic6}
                                    onClick={() => handleImageClick(pic6)}
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

export default NayTech;