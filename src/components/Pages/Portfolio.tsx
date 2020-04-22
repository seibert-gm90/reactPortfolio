import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div>
      <h1>Check out my work</h1>
      <div id="portfolio" className="row cover">
        <h2 className="text-center">Portfolio</h2>
        <div className="container">
          <div className="row portfolio-projects">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-sm-5 text-center">
                  <h4 className="portfolio-projects--title">
                    Password Generator
                  </h4>
                  <p className="portfolio-projects--desc">
                    Random password generator
                  </p>
                  <p className="portfolio-projects--desc">
                    Uses: Javascript, JQuery, Bootstrap
                  </p>
                  <a
                    className="btn btn-rounded portfolio-projects--btn"
                    href="https://seibert-gm90.github.io/passwordGenerator/"
                    role="button"
                  >
                    View Project
                  </a>
                </div>
                <div className="col-sm-7 text-center">
                  <img
                    className="portfolio-projects--image"
                    src="Assets/images/4.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center pull-right-sm">
                <h4 className="portfolio-projects--title">
                  Multiple Choice Quiz
                </h4>
                <p className="portfolio-projects--desc">
                  Timed multiple choice quiz that tracks user score and lets
                  them know if their answer is correct or incorrect.
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Pomodoro timer,Javascript, JQuery, Bootstrap
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://seibert-gm90.github.io/multiplechoicequiz/"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center pull-right-sm">
                <img
                  className="img-rounded portfolio-projects--image"
                  src="Assets/images/Untitled design (8).png"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row portfolio-projects">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center">
                <h4 className="portfolio-projects--title">Whats the Weather</h4>
                <p className="portfolio-projects--desc">
                  A weather app to check current weather conditions.
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Javascript, Jquery, APIs
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://seibert-gm90.github.io/weatherapp/"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center">
                <img
                  className="img-rounded portfolio-projects--image"
                  src="Assets/images/3.png"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-5 text-center pull-right-sm">
                <h4 className="portfolio-projects--title">Get Informed</h4>
                <p className="portfolio-projects--desc">
                  A new media comparison app.
                </p>
                <p className="portfolio-projects--desc">
                  Uses: Javascript, NYT and Guardian API, Bootstrap, JQuery
                </p>
                <a
                  className="btn btn-rounded portfolio-projects--btn"
                  href="https://kuhlthing.github.io/GroupProject/"
                  role="button"
                >
                  View Project
                </a>
              </div>
              <div className="col-sm-7 text-center pull-right-sm">
                <img
                  className="img-rounded portfolio-projects--image"
                  src="Assets/images/5.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="https://via.placeholder.com/300" alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
