import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoLinkedin, IoIosMail} from 'react-icons/io'
import {FaRegCopyright} from 'react-icons/fa'
import './index.css'

const Footer = () => (
  <div>
    <div>
      <div className="icons-container">
        <AiFillInstagram size={30} className="icon" />
        <IoLogoLinkedin size={30} className="icon" />
        <IoIosMail size={30} className="icon" />
      </div>
    </div>
    <div className="copyright-container">
      <p>Copyright</p>
      <FaRegCopyright size={15} className="copyright" />
      <p>2024, All rights received</p>
    </div>
    <div className="vector-image">
      <img
        src="https://res.cloudinary.com/djbs4yqbz/image/upload/v1704413921/assignment_vector_hudkqt.png"
        alt="assignment"
        className="vector-logo"
      />
    </div>
  </div>
)

export default Footer
