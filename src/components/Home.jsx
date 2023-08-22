import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div
            name="home"
            className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 px-4"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center h-full">
                <p className="text-gray-500"> Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-white">
                    Peter Mwaura
                </h1>
                <h2 className="text-4xl sm:text-7xl font-bold text-gray-500">
                    I'm a Front-End Developer
                </h2>
                <p className="text-gray-500 py-4 max-w-[700px]">
                    I'm a front-end developer who strives to build exceptional
                    applications. Currently, I'm focused on building responsive
                    front-end web applications.
                </p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-500 hover:border-gray-500 rounded-md">
                            View Work
                            <span className="group-hover:rotate-90 duration-300">
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
