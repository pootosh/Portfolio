import "./resume/style.css";
import profileImage from "./resume/ProfilePic.jpg";
import linkedinLogo from "./resume/linkedin.png";
import githubLogo from "./resume/github.png";

export const Resume = () => {
  return (
    <>
      <div>
        <header className="header">
          <div className="profile">
            <img src={profileImage} alt="Aditya" width="100" height="120" />
          </div>

          <div className="info">
            <h2>Aditya Kumar Singh</h2>
            <h4>Village Post Bellaujha, Mau, Uttar Pradesh - 221706</h4>
            <h4>
              <a href="tel:+919777789026">9777789026</a>,&nbsp;
              <a href="mailto:adityasingh9501@gmail.com">
                adityasingh9501@gmail.com
              </a>
            </h4>
          </div>
        </header>

        <div className="content">
          <div className="left">
            <h3>SKILLS</h3>
            <dl>
              <dt>
                <h4>Tools</h4>
              </dt>
              <br />

              <dd>Jupyter Notebook</dd>
              <dd>Eclipse</dd>
              <dd>Vs Studio</dd>
              <dd>Powerpoint</dd>

              <br />

              <dt>
                <h4>Databases</h4>
              </dt>
              <br />

              <dd>Mysql</dd>

              <br />

              <dt>
                <h4>Operating System</h4>
              </dt>
              <br />
              <dt>
                <dd>Windows</dd>
                <dd>Ubuntu</dd>
              </dt>
              <br />

              <dt>
                <h4>Programming Languages</h4>
              </dt>
              <br />

              <dd>C</dd>
              <dd>Java</dd>
              <dd>Python</dd>
              <dd>SQL</dd>

              <br />
            </dl>
            <hr />

            <h3>SOCIAL PROFILES</h3>
            <dl>
              <dt>
                <dd>
                  <img src={linkedinLogo} width="10" height="10"  alt=""/>

                  <a href="https://www.linkedin.com/in/pootosh/">
                    @pootosh
                  </a>
                </dd>

                <dd>
                  <img src={githubLogo} alt="" width="10" height="10" />
                  <a href="https://github.com/pootosh7">@pootosh7</a>
                </dd>
              </dt>
            </dl>
            <hr />

            <h3>HOBBIES</h3>
            <dl>
              <dt>
                <dd>Playing Cricket</dd>
                <dd>Gardening</dd>
                <dd>Reading Stories</dd>
              </dt>
            </dl>
            <hr />
          </div>

          <div className="right">
            <div>
              <h3>SUMMARY</h3>
              <p>
                I am a computer science student from KIIT University passionate
                about Data Science & looking for an opportunity to exploit my
                current skills and become a prominent Data Scientist. Good
                problem-solving skills and ability to perform well in a team.
                Seeking a challenging position as a Data Scientist in a
                well-established company that offers professional growth and
                ample opportunity to learn.
              </p>
              <hr />
            </div>

            <div>
              <h3>ACADEMICS DETAILS</h3>
              <div className="X">
                <h4>X</h4>
                <p>SRD SENIOR SECONDARY SCHOOL | 2015</p>
                <p>CGPA - 9.40/10.00</p>
              </div>

              <div className="XII">
                <h4>XII</h4>
                <p>SRD SENIOR SECONDARY SCHOOL | 2017</p>
                <p>Percentage - 78.60%</p>
              </div>

              <div className="college">
                <h4>B.Tech</h4>
                <p>
                  Computer Science & Engineering
                  <br />
                  Kalinga Insitute of Industrial Technology | 2022
                </p>
                <p>CGPA - 8.66/10.00</p>
              </div>
              <hr />
            </div>

            <div>
              <h3>PROJECTS</h3>
              <p>
                <strong>
                  Machine Learning model to predict the payment date of an
                  invoice.
                  <br />
                  Jan'21 - Mar'21
                </strong>
              </p>
              <hr />
            </div>

            <div>
              <h3>CERTIFICATES</h3>
              <dl>
                <dt>
                  <h4>Python</h4>
                </dt>
                <dd>
                  From Coursera, a course offered by the University of Michigan.
                </dd>
                <br />

                <dt>
                  <h4>Python for Data Science and AI</h4>
                </dt>
                <dd>From Coursera, a course offered by the IBM.</dd>
                <br />

                <dt>
                  <h4>AMCAT test for a dream job</h4>
                </dt>
                <dd>
                  According to my AMCAT scores, I am employable for the
                  following job profiles: Software Engineer - IT Services,
                  Associate - ITES/BPO, Analyst.
                </dd>
                <br />

                <dt>
                  <h4>Machine Learning Training</h4>
                </dt>
                <dd>
                  The training consisted of Introduction to Machine Learning,
                  Data, Introduction to Python, Data Exploration and
                  Preprocessing, Linear Regression, Introduction to
                  Dimensionality Reduction, Logistic Regression, Decision Tree,
                  Ensemble Models, and Clustering (Unsupervised Learning)
                  modules.
                </dd>
                <br />
              </dl>

              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
