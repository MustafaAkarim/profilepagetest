import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }} // When in view, set opacity and y position
        initial={{ opacity: 0, y: -100 }} // Initial state for animation
        transition={{ duration: 0.5 }} // Duration for the transition
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Final state when in view
              initial={{ opacity: 0, x: -100 }} // Initial state for image animation (from left)
              transition={{ duration: 1 }} // Duration for the transition
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }} // Final state when in view
              initial={{ opacity: 0, x: 100 }} // Initial state for project details animation (from right)
              transition={{ duration: 1 }} // Duration for the transition
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
