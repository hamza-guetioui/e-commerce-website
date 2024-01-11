import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Topbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-black h-6 w-full">
      {/* phone call */}
      <div className="flex-center text-gray-300 h-full">
        <FontAwesomeIcon icon={faPhoneVolume} className="mr-1 " />
        <a href="#" className="text-xs hover:underline">
          +212 673 234 123
        </a>
      </div>

      {/* social media */}
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
  );
}

export default Topbar;
