import { AlignJustify, Search, ShoppingBag, X } from "lucide-react";
import { NavMobile } from "./NavMobile";
import { InputSearch } from "./InputSearch";
import { useState } from "react";

export const Header = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  function toggleSearch() {
    setSearchActive(!searchActive);
  }

  function toggleNav() {
    setNavVisible(!navVisible);
  }

  return (
    <div>
      <div className="py-2 bg-pink-300/60 flex items-center justify-between px-1">
        <button onClick={toggleNav} className="md:invisible">
          {navVisible ? <X /> : <AlignJustify />}
        </button>

        <div className="flex flex-col items-center">
          <img
            src="/logo.png"
            className="w-5 bg-gradient-to-r from-indigo-300 via-purple-400 to-pink-500 rounded-full "
          />
          <p className={`text-lg text-pink-500 soraFont`}>YO PURPLE</p>
        </div>

        <div className="flex space-x-2">
          <button onClick={toggleSearch}>
            {searchActive ? <X /> : <Search />}
          </button>

          <ShoppingBag />
        </div>
      </div>

      {searchActive && <InputSearch />}

      {navVisible && <NavMobile />}
    </div>
  );
};
