import { MapPin } from "lucide-react";
export const Footer = () => {
  return (
    <div
      className="bg-pink-300/60 
flex  items-center justify-around pr-3 py-8"
    >
      <div className="flex flex-col">
        <p className="font-bold text-purple-base pb-2">Some Links</p>
        <ul className="text-sm">
          <li>
            <a href="#" className="underline">
              Travel Safer
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Free Infos
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Organizer.com
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center">
        <MapPin />
        <address className="flex flex-col items-center pt-2">
          <p>Street Land, 132 </p>
          <p>USA</p>
        </address>
      </div>

      <div>
        <p className="font-bold text-purple-base pb-2">Contact Us</p>
        <ul className="text-sm ">
          <li>
            <a href="#" className="underline">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Youtube
            </a>
          </li>
          <li>
            <a href="#" className="underline">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
