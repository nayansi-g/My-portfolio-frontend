import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    { id: 1, icon: <FaLinkedin />, url: "https://www.linkedin.com/", name: "LinkedIn" },
    { id: 2, icon: <SiIndeed />, url: "https://www.indeed.com/", name: "Indeed" },
    { id: 3, icon: <FaGithub />, url: "https://github.com/", name: "GitHub" },
    { id: 4, icon: <FaInstagram />, url: "https://www.instagram.com/", name: "Instagram" },
    { id: 5, icon: <FaTwitter />, url: "https://twitter.com/", name: "Twitter" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center gap-6 mt-5">
        {socialLinks.map((link) => (
          <a
            key={link.id} 
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-blue-500 transition-all"
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      <p className="text-center text-sm mt-3">&copy; {new Date().getFullYear()}All rights reserved. <br />created with whole heart.</p>
    </footer>
  );
};

export default Footer;
