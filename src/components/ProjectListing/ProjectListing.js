import React from 'react'
import Img from 'gatsby-image'
import ProjectContainer from './ProjectListing-styles'

const ProjectListing = ({ project }) => {
  console.log(project.featureImage)
  return (
    <ProjectContainer>
      <div className="project">
        <div className="project-image">
          <Img fluid={project.featureImage.fluid} />
        </div>
        <a
          className="project-title"
          href={project.linkToWork}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>
            <span>{project.title}</span>
          </h3>
        </a>
      </div>
      <div className="project-description">
        <h4 className="project-description-type">{project.type}</h4>
        <p className="project-description-desc">
          {project.description.description}
        </p>
        <div>
          <h5>Built with</h5>
          <ul>
            {project.builtWith.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </ProjectContainer>
  )
}

export default ProjectListing
