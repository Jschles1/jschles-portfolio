"use client";

import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import profile from "public/images/profile.jpg";
import { SocialLink } from "@/lib/interfaces";

const socials: SocialLink[] = [
  {
    id: 1,
    icon: <FaGithub />,
    link: "https://github.com/Jschles1",
  },
  {
    id: 2,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/john-schlesinger-21438362/",
  },
];

const Sidebar = () => {
  function download(blob: Blob) {
    console.log("Downloading...");
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "john-schlesinger-resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    console.log("Downloaded");
    toast.success("Resume downloaded successfully!");
  }

  const handleDownload = async () => {
    const response = await fetch("/api/download");
    if (response.status === 200) {
      console.log("Response received");
      const blob = await response.blob();
      download(blob);
    } else {
      toast.error("Error downloading resume. Please try again later.");
    }
  };

  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <Image src={profile} alt="John Schlesinger" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">
          John Schlesinger
        </h1>
        <p className="text-sm text-gray-400 mb-3">Senior Frontend Developer</p>
        <button
          className="inline-block mb-3 rounded bg-blue-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-blue-800"
          onClick={handleDownload}
        >
          Download Resume
        </button>
        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <p className="text-gray-400 text font-light leading-relaxed">
          I am a frontend developer with 5 years of experience with a passion
          for building rich and seamless user interfaces for websites and
          applications.
        </p>
        <br />
        <p className="text-gray-400 text font-light leading-relaxed">
          With a previous background as a personal trainer, I place high value
          on consistent hard work and helping clients reach their goals.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props: { social: SocialLink }) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        target="_blank"
        className="w-8 h-8 bg-blue-100 rounded text-blue-800 flex items-center justify-center hover:text-white hover:bg-blue-600"
      >
        {icon}
      </a>
    </li>
  );
};
