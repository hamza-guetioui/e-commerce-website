import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="grid grid-cols-3 text-center bg-black text-white p-12">
      <div>
        <h1>Contact Us:</h1>
        <p>Email: info@example.com</p>
        <p>Phone Number: +1234567890</p>
      </div>
      <div className="">
        &copy; 2021 Company Name | Designed by TemplateMonster | More Templates
        @ <a href="http://www.templatemonster.com/"></a>
      </div>
      <div>
        <span
          className={`text-2xl font-semibold font-cursive [word-spacing:-5px]`}
        >
          Bab Shop
        </span>
        <ul className="flex-center mr-4 text-gray-300 h-full">
          <li className="ml-4">
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>

          <li className="ml-4">
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li className="ml-4">
            <a href="#">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
