import React from "react";

import './projects.scss'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Projects = () => {

  return (
    <div className='projects' id="projects">
      <div className="projects-wrapper" >

        <div className="projects-video">
          <video src="assests/video.mp4" autoPlay muted></video>
        </div>
        <div className="projects-companies">

          <img className="projects-product" src="assests/product.svg" alt="" />
          <img className="projects-product" src="assests/wp.svg" alt="" />
          <img className="projects-product" src="assests/hub.svg" alt="" />
          <img className="projects-product" src="assests/the.svg" alt="" />
        </div>

      </div>
      <div className="projects-wrapper2">
        <div className="projects-absolute">
          <img src="assests/blue-shape.svg" alt="check" />
        </div>
        <div className="projects-wrapper2-left">
          <div className="projects-live">Live Editing</div>
          <div className="projects-fast">Fast and powerful design controls</div>
          <div className="projects-intutive">Intutive design tools and an unparralled
            editing experience help you create a perfectly branded WordPress login page.</div>

          <div className="projects-black-line"></div>
          <div className="projects-iuse">"I use this on all of my sites to create a better login experience with
            a site’s brand identity. It's super user-friendly and always exactly what I need."</div>
          <div className="projects-customer-name">
            <div className="projects-customer">
              <img src="assests/customer.png" alt="" />
            </div>
            <div className="projects-name-review">
              <div className="projects-tim">Tim Ellis</div>
              <a href="https://wordpress.org/support/topic/great-plugin-23461/" target="_blank" rel="noreferrer" className="projects-review">Review on WordPress.org <MdOutlineArrowOutward className="project-arrow" /></a>
            </div>
          </div>
        </div>

        <div className="projects-wrapper2-right">
          <div className="projects-cactus">
            <img src="assests/cac.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="projects-wrapper3">
        <div className="projects-wrapper3-left">
          <div className="projects-email-img">
            <img src="assests/email.jpg" alt="" />
          </div>
          <div className="projects-email-img2">
            <img src="assests/email2.jpg" alt="" />
          </div>
          <div className="projects-email-img3">
            <img src="assests/email3.jpg" alt="" />
          </div>
        </div>
        <div className="projects-wrapper3-right">
          <div className="projects-templates">Templates</div>
          <div className="projects-choose">Choose a template, start designing</div>
          <div className="projects-start">Start with any of our built-in, beautifully
            performant templates to get your custom login page up to speed in seconds.</div>
          <div className="projects-black-line"></div>

          <div className="projects-thisis">"This is by far the most elegant solution to
            customize your WordPress login screen. I am impressed!"</div>
          <div className="projects-customer-name">
            <div className="projects-customer">
              <img src="assests/customer2.jpg" alt="" />
            </div>
            <div className="projects-name-review">
              <div className="projects-tim">Martin Sauter</div>
              <a href="https://wordpress.org/support/topic/oh-wow-3/" target="_blank" rel="noreferrer" className="projects-review">Review on WordPress.org <MdOutlineArrowOutward className="project-arrow" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="projects-wrapper4">
        <div className="projects-lets">Let's Build Your WordPress Login Page Today!</div>
        <div className="projects-login">Login Designer gives you the power to design and
          build an on-brand custom WordPress Login Page.</div>
        <Link to='/plans' className="projects-button">See Pricing</Link>
      </div>
    </div>
  );
};
export default Projects;
