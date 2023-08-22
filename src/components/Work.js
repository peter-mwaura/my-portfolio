import React from 'react';
import {
    todoApp,
    myPortfolio,
    gitHubCardsApp,
    technicalDocumentation,
    gridTestimonials,
    catGallery,
} from '../assets';

const Work = () => {
    const work = [
        {
            id: 1,
            src: todoApp,
            stack: 'React Js Application',
            demo: 'https://complete-tasks.netlify.app',
            github: 'https://github.com/peter-mwaura/Todolist-react-application',
        },
        {
            id: 2,
            src: gitHubCardsApp,
            stack: 'React Js Application',
            demo: 'https://github-usernames-app.netlify.app/',
            github: 'https://github.com/peter-mwaura/github-cards-app',
        },
        {
            id: 3,
            src: myPortfolio,
            stack: 'React Js Application',
            demo: 'https://peter-mwaura.netlify.app/',
            github: 'https://github.com/peter-mwaura/my-portfolio',
        },
        {
            id: 4,
            src: technicalDocumentation,
            stack: 'Html, Css Application',
            demo: 'https://peter-mwaura.github.io/javascript-technical-documentation/',
            github: 'https://github.com/peter-mwaura/javascript-technical-documentation',
        },
        {
            id: 5,
            src: gridTestimonials,
            stack: 'Html, Css Application',
            demo: 'https://peter-mwaura.github.io/grid-testimonials-page/',
            github: 'https://github.com/peter-mwaura/grid-testimonials-page',
        },
        {
            id: 6,
            src: catGallery,
            stack: 'Html, Css Application',
            demo: 'https://peter-mwaura.github.io/flexbox-photo-gallery/',
            github: 'https://github.com/peter-mwaura/flexbox-photo-gallery',
        },
    ];

    return (
        <div
            name="work"
            className="w-full md:h-screen text-white bg-gradient-to-b from-gray-800 to-black"
        >
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Work
                    </p>
                    <p className="py-4">Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {work.map(({ id, src, stack, demo, github }) => (
                        <div
                            key={id}
                            style={{ backgroundImage: `url(${src})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                            {/* Hover Effects */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    {stack}
                                </span>
                                <div className="pt-8 text-center">
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-lg">
                                            Demo
                                        </button>
                                    </a>
                                    <a
                                        href={github}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-500 font-bold text-lg">
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
