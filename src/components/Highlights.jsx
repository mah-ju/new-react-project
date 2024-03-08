"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images } from "@/data/arrayImg";
import { useState } from "react";

export const Highlights = () => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = () => {
    setCurrentImg((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImg = () => {
    setCurrentImg(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div>
      <h1
        className="text-4xl mt-3 py-3 text-center text-transparent font-bold bg-clip-text
             bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-600"
      >
        Urban Highlights
      </h1>
      <p className="text-lg px-8 text-justify ">{images[currentImg].text}</p>

      <div className="flex justify-center items-center space-x-3 mt-4">
        <ArrowLeft size={30} className="cursor-pointer" onClick={prevImg} />

        <img
          src={images[currentImg].path}
          alt={images[currentImg].alt}
          className="w-72 rounded-lg"
        />

        <ArrowRight size={30} className="cursor-pointer" onClick={nextImg} />
      </div>
    </div>
  );
};
