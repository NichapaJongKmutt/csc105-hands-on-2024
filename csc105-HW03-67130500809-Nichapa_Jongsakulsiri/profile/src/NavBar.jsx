import { useState } from "react";
import ContactBtn from "./ContactBtn";

function NavBar() {
  const [btnselected, setBtnSelected] = useState("home");
  const handleClick = (section) => {
    setBtnSelected(section);
  };
  return (
    <div className="navBar flex justify-between p-4 items-center fixed w-full bg-white">
      <div className="nav-left font-bold text-2xl">Nichapa Jongsakulsiri</div>
      <div className="nav-center">
        <div className="nav-item flex gap-10 font-bold">
          <a href="#home" onClick={() => handleClick("home")}>
            <button
              className={`text-black px-4 py-2 rounded-4xl ${
                btnselected === "home" ? "bg-blue-300 text-white" : ""
              }`}
            >
              Home
            </button>
          </a>
          <a href="#aboutme" onClick={() => handleClick("aboutme")}>
            <button
              className={`text-black px-4 py-2 rounded-4xl ${
                btnselected === "aboutme" ? "bg-blue-300 text-white" : ""
              }`}
            >
              About me
            </button>
          </a>
          <a href="#gallery" onClick={() => handleClick("gallery")}>
            <button
              className={`text-black px-4 py-2 rounded-4xl ${
                btnselected === "gallery" ? "bg-blue-300 text-white" : ""
              }`}
            >
              Gallery
            </button>
          </a>
        </div>
      </div>
      <div className="nav-right">
        <ContactBtn />
      </div>
    </div>
  );
}
export default NavBar;
