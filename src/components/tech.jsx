import React from "react";
import AfterEffects from "../assets/Technology-Logos/AfterEffects.svg";
import AlpineJS from "../assets/Technology-Logos/AlpineJS.svg";
import AndroidStudio from "../assets/Technology-Logos/AndroidStudio.svg";
import Angular from "../assets/Technology-Logos/Angular.svg";
import AWS from "../assets/Technology-Logos/AWS.svg";
import Azure from "../assets/Technology-Logos/Azure.svg";
import Bash from "../assets/Technology-Logos/Bash.svg";
import Bootstrap from "../assets/Technology-Logos/Bootstrap.svg";
import BSD from "../assets/Technology-Logos/BSD.svg";
import C from "../assets/Technology-Logos/C.svg";
import CSharp from "../assets/Technology-Logos/CSharp.svg";
import CPP from "../assets/Technology-Logos/C++.svg";
import CSS from "../assets/Technology-Logos/CSS.svg";
import Django from "../assets/Technology-Logos/Django.svg";
import Docker from "../assets/Technology-Logos/Docker.svg";
import DotNET from "../assets/Technology-Logos/DotNET.svg";
import DynamoDB from "../assets/Technology-Logos/DynamoDB.svg";
import Express from "../assets/Technology-Logos/Express.svg";
import Figma from "../assets/Technology-Logos/Figma.svg";
import Flutter from "../assets/Technology-Logos/Flutter.svg";
import Framer from "../assets/Technology-Logos/Framer.svg";
import Git from "../assets/Technology-Logos/Git.svg";
import GitHub from "../assets/Technology-Logos/GitHub.svg";
import GitLab from "../assets/Technology-Logos/GitLab.svg";
import HTML from "../assets/Technology-Logos/HTML.svg";
import Illustrator from "../assets/Technology-Logos/Illustrator.svg";
import Java from "../assets/Technology-Logos/Java.svg";
import JavaScript from "../assets/Technology-Logos/JavaScript.svg";
import JQuery from "../assets/Technology-Logos/JQuery.svg";
import Linux from "../assets/Technology-Logos/Linux.svg";
import MongoDB from "../assets/Technology-Logos/MongoDB.svg";
import MySQL from "../assets/Technology-Logos/MySQL.svg";
import NestJS from "../assets/Technology-Logos/NestJS.svg";
import Netlify from "../assets/Technology-Logos/Netlify.svg";
import NextJS from "../assets/Technology-Logos/NextJS.svg";
import NodeJS from "../assets/Technology-Logos/NodeJS.svg";
import NuxtJS from "../assets/Technology-Logos/NuxtJS.svg";
import Photoman from "../assets/Technology-Logos/Photoman.svg";
import Photoshop from "../assets/Technology-Logos/Photoshop.svg";
import PHP from "../assets/Technology-Logos/PHP.svg";
import Premiere from "../assets/Technology-Logos/Premiere.svg";
import Python from "../assets/Technology-Logos/Python.svg";
import PyTorch from "../assets/Technology-Logos/PyTorch.svg";
import R from "../assets/Technology-Logos/R.svg";
import ReactJS from "../assets/Technology-Logos/React.svg";
import Redux from "../assets/Technology-Logos/Redux.svg";
import Ruby from "../assets/Technology-Logos/Ruby.svg";
import SASS from "../assets/Technology-Logos/SASS.svg";
import SolidJS from "../assets/Technology-Logos/SolidJS.svg";
import Spring from "../assets/Technology-Logos/Spring.svg";
import SQLite from "../assets/Technology-Logos/SQLite.svg";
import StackOverFlow from "../assets/Technology-Logos/StackOverFlow.svg";
import Swift from "../assets/Technology-Logos/Swift.svg";
import TailwindCSS from "../assets/Technology-Logos/TailwindCSS.svg";
import Typescript from "../assets/Technology-Logos/Typescript.svg";
import VueJS from "../assets/Technology-Logos/VueJS.svg";
import Webflow from "../assets/Technology-Logos/Webflow.svg";
import WindiCSS from "../assets/Technology-Logos/WindiCSS.svg";
import WordPress from "../assets/Technology-Logos/Wordpress.svg";
import XD from "../assets/Technology-Logos/XD.svg";

const images = [
  { name: "AfterEffects", src: AfterEffects },
  { name: "AlpineJS", src: AlpineJS },
  { name: "AndroidStudio", src: AndroidStudio },
  { name: "Angular", src: Angular },
  { name: "AWS", src: AWS },
  { name: "Azure", src: Azure },
  { name: "Bash", src: Bash },
  { name: "Bootstrap", src: Bootstrap },
  { name: "BSD", src: BSD },
  { name: "C", src: C },
  { name: "C++", src: CPP },
  { name: "C#", src: CSharp },
  { name: "CSS", src: CSS },
  { name: "Django", src: Django },
  { name: "Docker", src: Docker },
  { name: "DotNET", src: DotNET },
  { name: "DynamoDB", src: DynamoDB },
  { name: "Express", src: Express },
  { name: "Figma", src: Figma },
  { name: "Flutter", src: Flutter },
  { name: "Framer", src: Framer },
  { name: "Git", src: Git },
  { name: "GitHub", src: GitHub },
  { name: "GitLab", src: GitLab },
  { name: "HTML", src: HTML },
  { name: "Illustrator", src: Illustrator },
  { name: "Java", src: Java },
  { name: "JavaScript", src: JavaScript },
  { name: "JQuery", src: JQuery },
  { name: "Linux", src: Linux },
  { name: "MongoDB", src: MongoDB },
  { name: "MySQL", src: MySQL },
  { name: "NestJS", src: NestJS },
  { name: "Netlify", src: Netlify },
  { name: "NextJS", src: NextJS },
  { name: "NodeJS", src: NodeJS },
  { name: "NuxtJS", src: NuxtJS },
  { name: "Photoman", src: Photoman },
  { name: "Photoshop", src: Photoshop },
  { name: "PHP", src: PHP },
  { name: "Premiere", src: Premiere },
  { name: "Python", src: Python },
  { name: "PyTorch", src: PyTorch },
  { name: "R", src: R },
  { name: "ReactJS", src: ReactJS },
  { name: "Redux", src: Redux },
  { name: "Ruby", src: Ruby },
  { name: "SASS", src: SASS },
  { name: "SolidJS", src: SolidJS },
  { name: "Spring", src: Spring },
  { name: "SQLite", src: SQLite },
  { name: "StackOverFlow", src: StackOverFlow },
  { name: "Swift", src: Swift },
  { name: "TailwindCSS", src: TailwindCSS },
  { name: "Typescript", src: Typescript },
  { name: "VueJS", src: VueJS },
  { name: "Webflow", src: Webflow },
  { name: "WindiCSS", src: WindiCSS },
  { name: "WordPress", src: WordPress },
  { name: "XD", src: XD },
];

const InfiniteScroll = () => {
  const reversedImages = [...images].reverse();

  return (
    <>
      <div className="container mx-auto px-6 md:px-12 mt-12">
        <div className="flex flex-col md:flex-row">
          <div>
            <h3 className="text-md text-primaryBlue uppercase font-medium tracking-wide">
              Our Technology
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-snug md:leading-normal">
              Find the Best Technology <br /> for Your Product
            </h1>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="overflow-hidden">
          <div className="flex animate-infinite-slide shrink-0 flex-nowrap w-[750%]">
            {[...Array(4)].map((_, fadeIndex) => (
              <div key={fadeIndex} className="flex whitespace-nowrap">
                {images.map((image, idx) => (
                  <div
                    key={idx}
                    className="h-40 w-40 flex flex-col justify-center items-center"
                  >
                    <img
                      src={image.src}
                      alt={image.name}
                      draggable={false}
                      className="mb-2"
                    />
                    <p className="text-sm">{image.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative sm:mb-16">
        <div className="absolute top-0 left-0 h-full w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        <div className="overflow-hidden">
          <div className="flex animate-infinite-slide-reverse shrink-0 flex-nowrap w-[750%]">
            {[...Array(4)].map((_, fadeIndex) => (
              <div key={fadeIndex} className="flex whitespace-nowrap">
                {reversedImages.map((image, idx) => (
                  <div
                    key={`reverse-${idx}`}
                    className="h-40 w-40 flex flex-col justify-center items-center"
                  >
                    <img
                      src={image.src}
                      alt={image.name}
                      draggable={false}
                      className="mb-2"
                    />
                    <p className="text-sm">{image.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;