import { FaLocationDot, FaXmark } from "react-icons/fa6"
import NavItem from "./NavItem"
import { MdOutlineMail } from "react-icons/md"
import { FaPhone } from "react-icons/fa"
import logo from "../logo.png"
import { CgMenu } from "react-icons/cg"
import { useState } from "react"

function Navbar() {
  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu = ()=> setShowMenu((prev)=>!prev);

  const navItems = [
    <NavItem label={"HOME"}/>,
    <NavItem label={"ACHIEVEMENTS"}/>,
    <NavItem label={"CONTACT US"}/>,
    <NavItem label={"OUR TEAM"}/>,
    <NavItem label={"SPONSOR US"}/>
  ]
  
  return (
    <header className="py-2 bg-slate-900 text-white">

    <nav className="flex items-center justify-center md:justify-evenly mx-12 md:mx-auto">
      <CgMenu onClick={toggleMenu} className="absolute md:hidden left-6 text-2xl cursor-pointer" />
      <div className="flex items-center">
        <img className="h-12 w-12" src={logo} alt="Site-Logo" />
      <h1 className="text-xl font-bold">Team Revanta</h1>
      </div>
      {/* Nav Items for Larger screens */}
      <ul className={`hidden md:relative md:bg-transparent w-auto p-0 md:flex md:space-x-4 text-xs`}>
        {navItems}
      </ul>
{/* Nav Items for Smaller Screens */}
      <ul className={`fixed md:hidden ${showMenu? "left-0" : "-left-full"} top-0 h-screen md:h-auto bg-green-400 md:bg-transparent w-full md:w-auto z-50 md:z-0 p-12 md:p-0 md:flex md:space-x-4 text-xs transition-all ease-linear duration-300`}>
        <FaXmark onClick={toggleMenu} className="absolute md:hidden right-6 top-4 text-2xl hover:cursor-pointer"/>
        <h1 className="text-xl md:hidden text-slate-800 font-bold border-b-2 border-black">Menu</h1>
        {navItems}
      </ul>

      <div className="absolute md:relative flex right-6 space-x-2 text-xl">
        <FaLocationDot className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer ease-linear"/>
        <FaPhone className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer ease-linear"/>
        <MdOutlineMail className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer ease-linear text-2xl"/>
      </div>

    </nav>
  </header>
  )
}

export default Navbar