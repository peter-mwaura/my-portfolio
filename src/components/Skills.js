import React from 'react';
import {
    html,
    css,
    tailwind,
    javascript,
    typescript,
    react,
    python,
    github,
} from '../assets';

const Skills = () => {
    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 4,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500',
        },
        {
            id: 5,
            src: react,
            title: 'React',
            style: 'shadow-[#61dbfb]',
        },
        {
            id: 6,
            src: typescript,
            title: 'Typescript',
            style: 'shadow-[#007acc]',
        },
        {
            id: 7,
            src: python,
            title: 'Python',
            style: 'shadow-[#FFE873]',
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400',
        },
    ];

    return (
        <div
            name="skills"
            className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
        >
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Skills
                    </p>
                    <p className="py-4">
                        These are the technologies I've worked with
                    </p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    {skills.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-110 duration-500 rounded-lg ${style}`}
                        >
                            <img
                                className="w-20 mx-auto"
                                src={src}
                                alt={title}
                            />
                            <p className="my-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
