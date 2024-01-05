import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import ProjectCard from '../ProjectCard'
import Footer from '../Footer'
import './index.css'

const sampleProjectsList = [
  {
    id: '1',
    imageUrl:
      'https://res.cloudinary.com/djbs4yqbz/image/upload/v1704415514/InstaShare_Image_tyvxzz.png',
    projectName: 'InstaShare',
    linkUrl: 'https://mouniinstashare.ccbp.tech/',
    description:
      'Implemented responsive Streaming Application like Instagram Clone where users ' +
      'can log in and see a list of stories and posts, users can also search posts with post ' +
      'caption, users can be able to like and dislike the post and also view the user ' +
      'specific posts.',
  },
  {
    id: '2',
    imageUrl:
      'https://res.cloudinary.com/djbs4yqbz/image/upload/v1704416083/NxtTrends_Image_fxww6f.png',
    projectName: 'NxtTrends',
    linkUrl: 'https://moninxttrendz.ccbp.tech/products',
    description:
      'Implemented Nxt Trendz application which is a clone for ECommerce applications ' +
      'like Amazon, Flipkart where users can login and can see a list of products with ' +
      'search, filters, sort by, etc..',
  },
  {
    id: '3',
    imageUrl:
      'https://res.cloudinary.com/djbs4yqbz/image/upload/v1704416361/NxtWatch_image_dalxro.png',
    projectName: 'NxtWatch',
    linkUrl: 'https://mouninxtwcth.ccbp.tech/',
    description:
      'Built the Nxt Watch application, modelled after YouTube, enabling users to log in, ' +
      'explore video categories such as Trending and Gaming, access saved videos, and ' +
      'search for specific content while adjusting the interface theme.',
  },
]

class AddProject extends Component {
  state = {
    projectName: '',
    linkUrl: '',
    description: '',
    projectsList: [],
  }

  onChangeName = event => {
    this.setState({projectName: event.target.value})
  }

  onChangeUrl = event => {
    this.setState({linkUrl: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({description: event.target.value})
  }

  onAddProject = event => {
    event.preventDefault()

    const {projectName, linkUrl, description} = this.state

    const newProject = {
      id: uuidv4(),
      projectName,
      linkUrl,
      description,
      imageUrl:
        'https://res.cloudinary.com/djbs4yqbz/image/upload/v1704420554/projects_image_zvixpf.jpg',
    }

    this.setState(prevState => ({
      projectsList: [...prevState.projectsList, newProject],
      projectName: '',
      linkUrl: '',
      description: '',
    }))
  }

  render() {
    const {projectName, linkUrl, description, projectsList} = this.state
    return (
      <div className="add-project-container">
        <h1 className="add-project-heading">Add Project</h1>
        <hr className="hr-line" />
        <form className="form-container" onSubmit={this.onAddProject}>
          <div>
            <label htmlFor="projectName" className="input-label">
              Project Name
            </label>
            <br />
            <input
              type="text"
              value={projectName}
              id="projectName"
              className="input-field"
              onChange={this.onChangeName}
            />
          </div>
          <div>
            <label htmlFor="projectLink" className="input-label">
              Project Link
            </label>
            <br />
            <input
              type="url"
              value={linkUrl}
              id="projectLink"
              className="input-field"
              onChange={this.onChangeUrl}
            />
          </div>
          <div>
            <label htmlFor="description" className="input-label">
              Description
            </label>
            <br />
            <textarea
              id="description"
              value={description}
              className="description-field"
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="add-btn">
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
        <div className="vector-image">
          <img
            src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704413921/assignment_vector_hudkqt.png"
            alt="assignment"
            className="vector-logo"
          />
        </div>
        <div>
          <div className="projects-container">
            <h1>Projects</h1>
            <hr className="projects-line" />
            <div>
              <ul className="sampleList-ul">
                {sampleProjectsList.map(each => (
                  <ProjectCard projectDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
            <div>
              <ul className="sampleList-ul">
                {projectsList.map(each => (
                  <ProjectCard projectDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default AddProject
