
const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black"
        >
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="pb-8 pl-4 sm:text-right">
                        <p className="inline text-4xl font-bold border-b-4 border-gray-500">
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="text-4xl font-bold sm:text-right">
                        <p>
                            Hi! I'm Peter, nice to meet you. Feel free take a look
                            around.
                        </p>
                    </div>
                    <div>
                        <p>
                            I believe in using programming to transform
                            and improve the lives of people around us and the
                            world. With code, we have the power to make our
                            dreams become a reality.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
