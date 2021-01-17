import React from "react";
import TailwindCSS from "../images/tailwindcss.png";
import NextJS from "../images/nextjs.jpeg";
import TypeScript from "../images/typescript.jpeg";

const Content = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={TailwindCSS} alt="tailwindcss logo" className="h-full rounded mb-20" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">TailWind CSS</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={NextJS} alt="nextjs logo" className="h-full rounded mb-20" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Next JS</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={TypeScript} alt="typescript logo" className="h-full rounded mb-20" />{" "}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Typescript</h2>
        </div>
      </div>
    </>
  );
};

export default Content;
