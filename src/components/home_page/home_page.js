import "./home_page.scss";
import mainImg from "../../assets/images/av.jpg";
import signatureImg from "../../assets/images/signature2.png";
import cvFile from "../../assets/files/cv.pdf";

import githubIcon from "../../assets/images/gh2.png";
import linkedinIcon from "../../assets/images/linked.png";
import cvIcon from "../../assets/images/cvicon.png";



export default function Home() {
  return (
    <div className="home">
      <div className="home-left">
        <img className="main-img" src={mainImg} alt="Me" />
        
      </div>
      
      <div className="home-right">

        <div className="intro-line">
          <h1>Hi, I'm</h1>
          <img className="signature" src={signatureImg} alt="Signature" />
        </div>

        <p>
          Software Engineer,<br />
          Student @ LUT University,<br />
          Son of Engineer dad & Artist mom,<br />
          Oldest sibling,<br />
          Tea Enjoyer,<br />
          And much more...
        </p>
  

        {/* SOCIAL LINKS */}
        <div className="social-links">
          <a href="https://github.com/arpadeveloper" target="_blank" rel="noreferrer" className="social-btn">
            GitHub
          </a>

          <a href="https://linkedin.com/in/aarni-viljanen" target="_blank" rel="noreferrer" className="social-btn">
            LinkedIn
          </a>

          <a href={cvFile} download="Aarni_Viljanen_CV" className="social-btn">
            Download CV
          </a>
        </div>
      </div>

    
    </div>
    

    
  );
}