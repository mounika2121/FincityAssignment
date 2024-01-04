import {Component} from 'react'
import './index.css'

class AddProject extends Component {
  render() {
    return (
      <div>
        <h1 className="add-project-heading">Add Project</h1>
        <form className="form-container">
          <div>
            <label htmlFor="projectName" className="input-label">
              Project Name
            </label>
            <br />
            <input type="text" id="projectName" className="input-field" />
          </div>
          <div>
            <label htmlFor="projectLink" className="input-label">
              Project Link
            </label>
            <br />
            <input type="url" id="projectLink" className="input-field" />
          </div>
          <div>
            <label htmlFor="description" className="input-label">
              Description
            </label>
            <br />
            <textarea id="description" className="description-field" />
          </div>
          <div className="add-btn">
            <button type="submit" className="btn">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddProject
