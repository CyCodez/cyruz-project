import "./navBar.css"
import { useState } from "react";

export default function NavBar() {
const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SQntNi68ASSiKFpRVzQOMfJCx5aYevH69w&usqp=CAU"
          className="logo bounce"
          alt="logo"
          width="100px"
        />{" "}
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Experience</a>
          </li>
          <li>
            <a href="#contact">Project</a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#contact">
              let's talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
