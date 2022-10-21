import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg  bg-${this.props.theme} `}>
          <div className="container-fluid  ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI46fBJ9uy__TcofBg1kf9kJSrrk_bIaa9DA&usqp=CAU"
                alt=""
                className="img-thumbnail mx-2"
                style={{ height: "45px" }}
              />
              <strong className="fs-3 text-danger font-weight-bold">
                NewsPoint
              </strong>
            </Link>

            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link fs-5" aria-current="page" to="/about">
                    About
                  </Link>
                </li>

                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDarkDropdown"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                      <li
                        className="nav-link dropdown-toggle fs-5" id="navbarDarkDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        categories
                      </li>
                      <ul className="dropdown-menu dropdown-menu-dark bg-danger" aria-labelledby="navbarDarkDropdownMenuLink">
                        <li>
                          <Link className="dropdown-item" to="/"  role="button">
                            General
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/news/science"  role="button">
                            Science
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/news/business" >
                            Business
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/news/technology">
                            Technology
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/news/sports">
                            Sports
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" to="/news/entertainment" >
                            Entertainment
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>


            <form className="d-flex " role="search">
              <div className="row">
                <div className=" mx-auto">
                  <div className="input-group">
                    {/* <input
                      className="form-control border-end-0 border rounded-pill"
                      type="search"
                      value="search"
                      id="example-search-input"
                    /> */}
                    <span className="input-group-append">
                      <button
                        className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-search"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                        </svg>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
