import { ArrowLeft, ArrowRight } from "lucide-react";
import { textMission } from "@/data/arrayText";
import { useState } from "react";


export const Mission = () => {
  const [currentText, setCurrentText] = useState(0);

  const nextText = () => {
    setCurrentText((prevText) => (prevText + 1) % textMission.length);
  };

  const backText = () => {
    setCurrentText(
      (prevText) => (prevText - 1 + textMission.length) % textMission.length
    );
  };

  return (
    <div className="mb-12 px-3">
      <h2
        className="text-4xl mt-3 py-3 text-center text-transparent
          font-bold bg-clip-text bg-gradient-to-r
           from-indigo-300 via-purple-400
            to-pink-600"
      >
        Our Mission
      </h2>

      <p className="text-lg px-8 text-center ">
        Some introdutory text about the mission of the project
      </p>

      <div
        className="flex justify-center
             items-center space-x-2 mt-5"
      >
        <ArrowLeft size={30} className="cursor-pointer" onClick={backText} />
        <div className=" bg-pink-200 p-6 w-80 text-lg">
          <h3 className="font-bold pb-3 text-xl text-purple-base text-center">
            {textMission[currentText].title}
          </h3>
          <p className="text-justify">{textMission[currentText].text}</p>
        </div>

        <ArrowRight size={30} className="cursor-pointer" onClick={nextText} />
      </div>
    </div>
  );
};
