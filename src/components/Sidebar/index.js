import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import ProfilePic from '../../assets/images/av.jpg'
import WrittenNamePic from '../../assets/images/signature2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={ProfilePic} alt="Profile picture"/>
            <img className="sub-logo" src={WrittenNamePic} alt="Written name"/>
        </Link>
        <nav>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active about-link' : 'about-link'}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active contact-link' : 'contact-link'}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/aarni-viljanen/'>
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/ArpaDeveloper'>
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar