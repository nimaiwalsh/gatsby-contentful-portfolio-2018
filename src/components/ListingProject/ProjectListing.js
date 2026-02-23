import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const ProjectListing = ({ project }) => {
  return (
    <div className="mb-16 flex gap-8 items-start">
      <div className="flex-[40%]">
        <div className="mr-8 mb-8 ml-4 ring-2 ring-primary ring-offset-4">
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
          <h5 className="m-0 mb-4">Built with</h5>
          <div className="flex flex-wrap gap-2">
            {project.builtWith.map(item => (
              <span key={item} className="bg-zinc-100 text-zinc-700 text-xs px-3 py-1 rounded-full">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectListing
