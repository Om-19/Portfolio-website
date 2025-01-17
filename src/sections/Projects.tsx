import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/arrow-up-right.svg"
import Arrow from "@/assets/icons/arrow-up-right.svg"
import GrainImage from "@/assets/images/grain.jpg"

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Real Estate Market Place",
    results: [
      { title: "Real Time Chat Feature" },
      { title: "Improved site speed by 50%" },
      { title: "Integrated Redux for state management" },
    ],
    link: "",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Task Manager",
    results: [
      { title: "Integrated Calendar View for Deadlines" },
      { title: "Implemented Drag-and-Drop Functionality for Tasks" },
      { title: "Optimized Backend Reduce Latency by 40%" },
    ],
    link: "",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "JobHunt",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Implemented Authentication and Role-Based Access Control" },
    ],
    link: "",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="project" className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="mt-10 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden 
            after:-z-10 after:content[''] after:absolute after:inset-0 after:outline-offset-2 
            after:rounded-3xl after:outline-white/20 px-8 pt-8 md:pt-12 
            md:px-10 lg:pt-16 lg:px-20 after:pointer-events-none"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${GrainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div
                    className="bg-gradient-to-r from-emerald-300 to-sky-400
                    inline-flex gap-2 font-bold uppercase tracking-widest text-sm
                    text-transparent bg-clip-text"
                  >
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:mt-5 md:text-4xl mt-2">{project.title}</h3>
                  <hr className="border-t-2 border-collapse-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {project.link && (
                    <a href={project.link}>
                      <button
                        className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl 
                    font-semibold inline-flex items-center justify-center gap-2 mt-8"
                      >
                        <span>Visit Live Site</span>
                        <Arrow className="size-4" />
                      </button>
                    </a>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0
                  lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
