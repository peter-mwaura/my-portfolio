import React from "react";
import todoApp from "../assets/portfolio/todoApp.png";
import myPortfolio from "../assets/portfolio/my-portfolio.png";
import sportStats from "../assets/portfolio/sportstats.png";
import technicalDocumentation from "../assets/portfolio/technicalDocumentation.png";
import gridTestimonials from "../assets/portfolio/gridTestimonials.png";
import catGallery from "../assets/portfolio/catGallery.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todoApp,
      demo: "https://complete-tasks.netlify.app",
      github: "https://github.com/peter-mwaura/Todolist-react-application",
    },
    {
      id: 2,
      src: myPortfolio,
      demo: "https://peter-mwaura.netlify.app/",
      github: "https://github.com/peter-mwaura/my-portfolio",
    },
    {
      id: 3,
      src: sportStats,
      demo: "https://sportstats.netlify.app/",
      github: "https://github.com/peter-mwaura/sports-stats",
    },
    {
      id: 4,
      src: technicalDocumentation,
      demo: "https://peter-mwaura.github.io/javascript-technical-documentation/",
      github:
        "https://github.com/peter-mwaura/javascript-technical-documentation",
    },
    {
      id: 5,
      src: gridTestimonials,
      demo: "https://peter-mwaura.github.io/grid-testimonials-page/",
      github: "https://github.com/peter-mwaura/grid-testimonials-page",
    },
    {
      id: 6,
      src: catGallery,
      demo: "https://peter-mwaura.github.io/flexbox-photo-gallery/",
      github: "https://github.com/peter-mwaura/flexbox-photo-gallery",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, github }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                {/*link - https://complete-tasks.netlify.app/*/}
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex justify-center items-center">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                      LiveDemo
                    </button>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer"
                  >
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer">
                      Github
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
