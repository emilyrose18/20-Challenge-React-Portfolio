import { useState } from 'react';
import Project from "../components/Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'project1',
      description: 'project1',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'project2',
      description: 'project2',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'project3',
      description: 'project3',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'project4',
      description: 'project4',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
