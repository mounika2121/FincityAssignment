import AddProject from '../AddProject'
import './index.css'

const About = () => (
  <div>
    <div className="about-container">
      <div>
        <h1>Hello, my name is mounika</h1>
        <p className="about-para">
          Aspiring Full Stack Developer | Learned at CCBP 4.0 Intensive | Html,
          CSS, Bootstrap, Python , javascript, Sql, Node js , React js
        </p>
        <div>
          <button type="button" className="btn">
            Projects
          </button>
          <button type="button" className="btn lin-btn">
            Linkedin
          </button>
        </div>
      </div>
      <img
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704386752/project_img1_tijbdw.png"
        alt="top"
        className="top-image"
      />
    </div>
    <div>
      <AddProject />
    </div>
  </div>
)

export default About
