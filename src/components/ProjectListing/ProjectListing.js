import React from 'react';
import Img from 'gatsby-image';

const ProjectListing = ({ project }) => {
  return (
    <div className="work-box">
      <div className="feature">
        <Img sizes={project.featureImage.sizes} />
        <a href={project.linkToWork} target="_blank">
          <h3>{project.title}</h3>
        </a>
      </div>
      <div className="description">
        <h4>{project.type}</h4>
        <p>{project.description.description}</p>
        <div>
          <div>Built with</div>
          <ul>{project.builtWith.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
