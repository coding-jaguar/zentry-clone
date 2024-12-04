import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const links = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://x.com", icon: <FaX /> },
  { href: "https://LinkedIn.com", icon: <FaLinkedin /> },
  { href: "https://github.com", icon: <FaGithub /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-voilet-300 py-4  text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          &copy; 2021 Nova. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right hover:text-white"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};
export default Footer;
