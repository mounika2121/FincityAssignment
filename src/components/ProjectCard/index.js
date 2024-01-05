import './index.css'

const ProjectCard = props => {
  const {projectDetails} = props
  const {imageUrl, projectName, linkUrl, description} = projectDetails

  return (
    <li className="list-item">
      <div>
        <h2>{projectName}</h2>
        <p className="para">{description}</p>
        <button type="button" className="project-btn">
          <a href={linkUrl} target="_blank" rel="noreferrer">
            View Project
          </a>
        </button>
      </div>
      <div>
        <img src={imageUrl} alt="logo" className="project-image" />
      </div>
    </li>
  )
}

export default ProjectCard
