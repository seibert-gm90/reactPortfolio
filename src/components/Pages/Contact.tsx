import React from "react";

const Contact: React.FC = () => {
  return (
    <div>
      <div id="contact" className="row cover bottom">
        <h2 className="text-center contact-header">Contact Me</h2>
        <p className="text-center contact-email">
          Get in touch with me{" "}
          <span className="glyphicon glyphicon-arrow-right"></span>
          <a href="mailto:jones.gm90@gmail.com">jones.gm90@gmail.com</a>{" "}
        </p>
        <div className="text-center contact-social-icons">
          <p>Or find me on:</p>
          <ul className="centered">
            <a href="https://www.linkedin.com/in/gabrielle-jones-373ba8132/">
              <li>
                <i className="fa fa-linkedin-square"></i> LinkedIn
              </li>
            </a>
            <a href="https://github.com/seibert-gm90">
              <li>
                <i className="fa fa-github"></i> Github
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
