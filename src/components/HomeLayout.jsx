import React from 'react';

const HomeLayout = () => {
  return (
    <>
      <div>
        <div className="container">
          <div
            id="carousel-example-2"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          />
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-2"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carousel-example-2" data-slide-to="1" />
          </ol>
          <div className="carousel-inner" role="listbox" />
          <div className="carousel-item active">
            <div className="view">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                alt="First slide"
              />
              <div className="mask rgba-black-light" />
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive">On Demand Delivery</h3>
              <p>We make delivery fast and easy</p>
              <p>
                <a className="btn btn-lg btn-success">Learn More</a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="view">
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                alt="Second slide"
              />
              <div className="mask rgba-black-strong" />
            </div>
            <div className="carousel-caption">
              <h3 className="h3-responsive">
                Want to make more than $800 a week
              </h3>
              <p>Sign up to be a driver</p>
              <p>
                <a className="btn btn-lg btn-success" asp-action="About">
                  Learn More
                </a>
              </p>
            </div>
          </div>
          <div>
            <a
              className="carousel-control-prev"
              href="#carousel-example-2"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-example-2"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
