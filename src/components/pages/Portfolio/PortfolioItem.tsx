import Image, { StaticImageData } from "next/image";
import { FaRegEye } from "react-icons/fa";

interface Props {
  portfolio: {
    image: StaticImageData;
    title: string;
    link: string;
    website: string;
    description: string | string[];
  };
}
export default function PortfolioItem(props: Props) {
  const { image, title, link, website, description } = props.portfolio;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-md">
        <div className="relative mb-6 w-full h-48 bg-blue-200 rounded-md overflow-hidden">
          <Image
            src={image}
            alt="coverImage"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute opacity-0 transition duration-200 bg-blue-100 bg-opacity-80 w-full flex items-center justify-center h-full left-0 top-0 group-hover:opacity-100 group-hover:visible">
            <ul className="flex flex-wrap">
              <li className="m-2">
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto mb-4 p-2 h-10 text-md text-blue-600 flex items-center justify-center border-2 border-blue-600 rounded hover:text-white hover:bg-blue-600"
                >
                  View Code
                </a>

                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-auto p-2 h-10 text-md text-blue-600 flex items-center justify-center border-2 border-blue-600 rounded hover:text-white hover:bg-blue-600"
                >
                  View Live Site
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        {typeof description === "object" ? (
          <ul className="text-gray-400 pl-4">
            {description.map((item) => (
              <li key={item} className="ml-2 list-item list-disc">
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">{description}</p>
        )}
        <div className="block md:hidden mt-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="block w-auto mb-4 rounded bg-blue-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-blue-800"
          >
            View Code
          </a>

          <a
            href={website}
            target="_blank"
            rel="noreferrer"
            className="block w-auto rounded bg-blue-600 text-center border-0 py-2 px-6 text-white leading-7 tracking-wide hover:bg-blue-800"
          >
            View Live Site
          </a>
        </div>
      </div>
    </div>
  );
}
