import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectListing = ({ project }) => {
  return (
    <div className="mb-16 flex gap-8 items-start">
      <div className="flex-[40%]">
        <div className="mr-8 mb-8 ml-4 outline outline-[0.5rem] outline-primary outline-offset-[0.5rem]">
          <GatsbyImage image={getImage(project.featureImage)} alt={project.title} />
        </div>
        <a
          className="text-primary no-underline"
          href={project.linkToWork}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3 className="m-0 mb-8">
            <span className="bg-zinc-900 text-primary px-1">{project.title}</span>
          </h3>
        </a>
      </div>
      <div className="flex-[60%]">
        <h4 className="m-0 mb-8">{project.type}</h4>
        <p className="mb-8">{project.description.description}</p>
        <div>
          <h5 className="m-0 mb-8">Built with</h5>
          <ul>
            {project.builtWith.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProjectListing
