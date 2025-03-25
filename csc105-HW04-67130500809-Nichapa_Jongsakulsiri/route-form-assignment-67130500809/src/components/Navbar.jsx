import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div className="flex flex-row gap-10 items-center py-4 px-6 bg-black fixed w-screen">
            <NavLink className={({isActive})=>`text-white text-2xl p-3 ${isActive? "font-bold bg-blue-500 rounded-2xl": "font-normal"}`} to="/">Home</NavLink>
            <NavLink className={({isActive})=>`text-white text-2xl p-3 ${isActive? "font-bold bg-blue-500  rounded-2xl": "font-normal"}`} to="/fav">Favourites</NavLink>
            <NavLink className="text-white  text-2xl" to="/login">Login</NavLink>

        </div>
    )
}
export default NavBar;