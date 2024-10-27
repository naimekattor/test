import React from "react";
import Contact from "./component/Contact/Contact";

const App = () => {
  return (
    <div>
      <header class="p-3 text-bg-dark">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                class="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlink:href="#bootstrap"></use>
              </svg>
            </a>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" class="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" class="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
              <input
                type="search"
                class="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div class="text-end">
              <button type="button" class="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" class="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>

      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="bootstrap-themes.png"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Responsive left-aligned hero with image
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div class="row ">
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 class="fw-normal">Heading</h2>
            <p>
              Some representative placeholder content for the three columns of
              text below the carousel. This is the first column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 class="fw-normal">Heading</h2>
            <p>
              Another exciting bit of representative placeholder content. This
              time, we've moved on to the second column.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
          <div class="col-lg-4">
            <svg
              class="bd-placeholder-img rounded-circle"
              width="140"
              height="140"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Placeholder"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <title>Placeholder</title>
              <rect
                width="100%"
                height="100%"
                fill="var(--bs-secondary-color)"
              ></rect>
            </svg>
            <h2 class="fw-normal">Heading</h2>
            <p>
              And lastly this, the third column of representative placeholder
              content.
            </p>
            <p>
              <a class="btn btn-secondary" href="#">
                View details »
              </a>
            </p>
          </div>
          {/* <!-- /.col-lg-4 --> */}
        </div>
      </div>
      <div className="container">
        {" "}
        <Contact />
      </div>

      <div class="container">
        <footer class="py-3 my-4">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                FAQs
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                About
              </a>
            </li>
          </ul>
          <p class="text-center text-body-secondary">© 2024 Company, Inc</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
