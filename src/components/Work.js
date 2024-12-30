import React from 'react';
import { personalTaskManager, gridTestimonials } from '../assets';

const Work = () => {
    const work = [
        {
            id: 1,
            src: personalTaskManager,
            stack: 'Personal Task Manager',
            demo: 'https://my-personal-task-manager.netlify.app/',
            github: 'https://github.com/peter-mwaura/personal-task-manager',
        },
        {
            id: 2,
            src: gridTestimonials,
            stack: 'Html, Css Application',
            demo: 'https://peter-mwaura.github.io/grid-testimonials-page/',
            github: 'https://github.com/peter-mwaura/grid-testimonials-page',
        },
    ];

    return (
        <div
            name="work"
            className="w-full text-white md:h-screen bg-gradient-to-b from-gray-800 to-black"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="inline text-4xl font-bold border-b-4 border-gray-500">
                        Work
                    </p>
                    <p className="py-4">Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {work.map(({ id, src, stack, demo, github }) => (
                        <div
                            key={id}
                            style={{ backgroundImage: `url(${src})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                            {/* Hover Effects */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font-bold tracking-wider text-white">
                                    {stack}
                                </span>
                                <div className="pt-8 text-center">
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-500 bg-white rounded-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="px-4 py-3 m-2 text-lg font-bold text-center text-gray-500 bg-white rounded-lg">
                                            Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
