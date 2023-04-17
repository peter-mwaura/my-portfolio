import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>

        <p className="text-4xl mt-20">
          I’m very passionate about writing code. I believe in the power of
          programming to transform and improve the lives of people around us and
          the world. With code, we have the power to make our dreams become a
          reality. Coding has given me a very new perspective on how things are
          structured and how they work together to give us results.
        </p>

        <br />

        <p className="text-4xl">
          I’m very passionate about writing code. I believe in the power of
          programming to transform and improve the lives of people around us and
          the world. With code, we have the power to make our dreams become a
          reality. Coding has given me a very new perspective on how things are
          structured and how they work together to give us results.
        </p>
      </div>
    </div>
  );
};

export default About;
