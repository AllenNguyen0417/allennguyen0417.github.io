import "./About.css";

export function About() {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
            <img src={require("./avatar.jpg")} alt="Profile Picture" />
            <p className="lead">
              I came to the United States of America almost 5 years ago with
              limited English-speaking skills. I began college in the U.S. with
              the resolve to overcome the language barrier while taking on
              part-time work to help with my family’s expenses. I’m a proud
              first-generation college student and have not gotten discouraged
              by the challenges that I’ve faced, but instead, work hard and set
              high standards for myself to balance school and work.
            </p>
            <p className="lead">
              I completed my bachelor's degree in Computer Science at Cal Poly
              Pomona in 2022. I am always welcome to meet everyone in order to
              improve my English skills as well as my communication skill, so
              feel free to connect!
            </p>
          </div>
        </div>
      </div>
      <div className="row about-content">
        <div className="col-six tab-full ">
          <h3>Profile</h3>
          <ul className="info-list">
            <li>
              <strong>Full name:</strong>
              <span style={{ fontSize: "16px" }}>Thanh Quan Nguyen</span>
            </li>

            <li>
              <strong>Job:</strong>
              <span style={{ fontSize: "16px" }}>Software Engineer</span>
            </li>
            <li>
              <strong>GitHub:</strong>
              <span style={{ fontSize: "16px" }}>
                <a
                  href="https://github.com/AllenNguyen0417/"
                  style={{ color: "#888888" }}
                >
                  https://github.com/AllenNguyen0417
                </a>
              </span>
            </li>
            <li>
              <strong>LinkedIn:</strong>
              <span style={{ fontSize: "16px" }}>
                <a
                  href="https://www.linkedin.com/in/quan-nguyen-0417/"
                  style={{ color: "#888888" }}
                >
                  https://www.linkedin.com/in/quan-nguyen-0417
                </a>
              </span>
            </li>
            <li>
              <strong>Email:</strong>
              <span style={{ fontSize: "16px" }}>
                <a
                  href="mailto:thanhquan1704@gmail.com"
                  style={{ color: "#888888" }}
                >
                  thanhquan1704@gmail.com
                </a>
              </span>
            </li>
          </ul>
        </div>
        <div className="col-six tab-full ">
          <h3>Skills</h3>
          <ul className="info-list">
            <li>
              <strong>Front End:</strong>
              <span style={{ fontSize: "16px" }}>ReactJS • AngularJS</span>
            </li>

            <li>
              <strong>Back end:</strong>
              <span style={{ fontSize: "16px" }}>
                Spring Boot • Ruby On Rails
              </span>
            </li>
            <li>
              <strong>Database:</strong>
              <span style={{ fontSize: "16px" }}>
                MySQL • PostgreSQL • FireBase
              </span>
            </li>
            <li>
              <strong>Automation Testing:</strong>
              <span style={{ fontSize: "16px" }}>
                WebDriver • Mockito • MockMvc • Rest Assured • Selenium • TestNG
                • Junit • Cucumber.
              </span>
            </li>
            <li>
              <strong>Project Management:</strong>
              <span style={{ fontSize: "16px" }}>Jira • Agile</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row button-section">
        <div className="col-twelve">
          <a href="#" title="Download CV" className="button">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
