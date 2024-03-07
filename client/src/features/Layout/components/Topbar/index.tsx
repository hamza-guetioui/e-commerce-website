"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
  },
  {
    name: "X",
    url: "https://www.X.com",
  },
];

const getFontAwesomeIcon = (iconName: string): IconDefinition | null => {
  switch (iconName) {
    case "Facebook":
      return faFacebookF;
    case "X":
      return faXTwitter;
    case "Instagram":
      return faInstagram;
    default:
      return null;
  }
};

function Topbar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-black h-6 w-full">
      {/* phone call */}
      <div className="flex-center text-gray-300 h-full">
        <FontAwesomeIcon icon={faPhoneVolume} className="mr-1 " />
        <button
          onClick={() => window.open("tel:060000000")}
          className="text-xs hover:underline"
        >
          +212 673 234 123
        </button>
      </div>

      {/* social media */}
      <ul className="flex-center mr-4 text-gray-300 h-full">
        {socialMedia.map((media) => {
          const icon = getFontAwesomeIcon(media.name);
          return (
            <li key={media.name} className="ml-4">
              <Link href={media.url}>
                <FontAwesomeIcon icon={icon as IconProp} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Topbar;
