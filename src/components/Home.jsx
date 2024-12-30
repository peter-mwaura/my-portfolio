import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="home"
            className="w-full h-screen px-4 bg-gradient-to-b from-black via-black to-gray-800"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
                <p className="text-gray-500"> Hi, my name is</p>
                <h1 className="text-4xl font-bold text-white sm:text-7xl">
                    Peter Mwaura
                </h1>
                <h2 className="text-4xl font-bold text-gray-500 sm:text-7xl">
                    I'm a Front-End Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-[700px]">
                    I'm a front-end developer who strives to build exceptional
                    applications. Currently, I'm focused on building responsive
                    front-end web applications.
                </p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className="flex items-center px-6 py-3 my-2 text-white border-2 rounded-md group hover:bg-gray-500 hover:border-gray-500">
                            View Work
                            <span className="duration-300 group-hover:rotate-90">
                                <HiArrowNarrowRight className="ml-3" />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
