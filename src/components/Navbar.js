import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar(props) {
  return (
    <>
      <nav className="sticky top-0 min-h-fit bg-white w-full border border-b-1 z-50">
        <div className="container max-w-5xl">
          <div className="flex flex-row py-1 items-center">
            <div className="basis-1/2 pl-3 lg:p-0">
              <img className="" src="/images/logo-instagram.svg" width="120" alt="Logo" />
            </div>
            <div className="basis-1/2 hidden md:block">
              <div className="relative">
                <FontAwesomeIcon
                  icon="magnifying-glass"
                  className="absolute left-3 top-3 text-gray-300"
                />
                <input
                  id="search"
                  className="p-2 bg-gray-100 rounded-lg w-80 pl-10 align-middle focus:outline-0 placeholder:font-light"
                  placeholder="Search"
                  type="text"
                />
              </div>
            </div>
            <div className="basis-1/2">
              <ul className="flex flex-row p-2 text-2xl space-x-6 justify-end">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon="house" />
                  </a>
                </li>
                <li>
                  <a href>
                    <FontAwesomeIcon icon={["far", "comment-dots"]} />
                  </a>
                </li>
                <li>
                  <a href className="cursor-pointer">
                    <FontAwesomeIcon icon={["far", "square-plus"]} />
                  </a>
                </li>
                <li>
                  <a href className="cursor-pointer">
                    <FontAwesomeIcon icon={["far", "compass"]} />
                  </a>
                </li>
                <li>
                  <a href className="cursor-pointer">
                    <FontAwesomeIcon icon={["far", "heart"]} />
                  </a>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
