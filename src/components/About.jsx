import React from 'react';

const About = () => {
  return (
    <div>
      <section className="team-section text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">Origins</h2>
        <p>
          People place orders, need things delivered, and have general errands
          to run, but do not always have the ability, time or resources they
          need to complete these goals.
        </p>
        <hr />
        <h2 className="h1-responsive font-weight-bold my-5">Meet the team</h2>

        <p className="grey-text w-responsive mx-auto mb-5" />
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
            <div className="avatar mx-auto">
              <img
                src={'../assets/images/anasjpg.jpg'}
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Anas Milhem</h5>
            <p className="text-uppercase blue-text">
              <strong>Team Manager</strong>
            </p>
            <p className="grey-text">
              Currently Studying Computer Science with a minor in Marketing at
              Eastern Michigan University.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-lg-0 mb-5">
            <div className="avatar mx-auto">
              <img
                src={'../assets/images/JoshThonnissen_Bio.png'}
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Josh Thonnisssen </h5>
            <p className="text-uppercase blue-text">
              <strong>Web developer</strong>
            </p>
            <p className="grey-text">
              Josh is a Navy veteran turned software developer, he served 11
              years in the U.S. Navy Seabees and is graduating from Eastern
              Michigan University with a degree in Computer Science. He spends
              his free time playing board games with his family and friends. He
              welcomes new challenges and tries to enjoy life rather than work
              it. Oh yeah, and <b>GO BLUE!!!</b>
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-md-0 mb-5">
            <div className="avatar mx-auto">
              <img
                src={'../assets/images/zafer.jpg'}
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Zafer Zhourdaji</h5>
            <p className="text-uppercase blue-text">
              <strong>Software Consultant</strong>
            </p>
            <p className="grey-text">
              Zafer is graduating from Eastern Michigan University on April 2019
              with his B.S. in computer science. He is currently doing his
              software development internship. He loves learning and exploring
              new interests, also currently learning piano.
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="avatar mx-auto">
              <img
                src={'../assets/images/sean.jpg'}
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Sean Leonard</h5>
            <p className="text-uppercase blue-text">
              <strong>Backend developer</strong>
            </p>
            <p className="grey-text">
              Sean is working towards his bachelors degree in computer science
              at Eastern Michigan University with a minor in simulation,
              animation, and gaming. He is looking forward to an internship with
              Consumers Energy over the summer. Sean hopes to one day be a
              professional game developer.
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="avatar mx-auto">
              <img
                src={'../assets/images/mattar.jpg'}
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Mohammad Mattar</h5>
            <p className="text-uppercase blue-text">
              <strong>FrontEnd Developer</strong>
            </p>
            <p className="grey-text">
              Mohammad is a computer science student at Eastern Michigan
              University, aspiring Javascript Developer and sports/game
              enthusist
            </p>
          </div>
          <div className="col-lg- col-md-6">
            <div className="avatar mx-auto">
              <img
                src={'../assets/images/Gavin.jpg'}
                className="rounded-circle z-depth-1"
                alt="Sample avatar"
              />
            </div>
            <h5 className="font-weight-bold mt-4 mb-3">Gavin Maier-Denk</h5>
            <p className="text-uppercase blue-text">
              <strong>Backend developer</strong>
            </p>
            <p className="grey-text">
              Gavin is a Computer Science major with a minor in Japanese
              Language. In the future he hopes to work abroad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
