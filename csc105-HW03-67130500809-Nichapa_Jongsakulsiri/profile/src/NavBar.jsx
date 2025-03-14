import ContactBtn from "./ContactBtn";

function NavBar() {
  return (
    <div className="navBar flex justify-between p-4 items-center">
      <div className="nav-left font-bold text-2xl">Nichapa Jongsakulsiri</div>
      <div className="nav-center">
        <div className="nav-item flex gap-10 font-bold">
          <a>Home</a>
          <a>About me</a>
          <a href="gallery">Gallery</a>
        </div>
      </div>
      <div className="nav-right">
        <ContactBtn />
      </div>
    </div>
  );
}
export default NavBar;
