import { FaLocationDot } from "react-icons/fa6"
import NavItem from "./NavItem"
import { MdOutlineMail } from "react-icons/md"
import { FaPhone } from "react-icons/fa"
import logo from "../logo.png"

function Navbar() {
  return (
    <header className="py-2 bg-slate-900 text-white">
    <nav className="flex items-center justify-evenly mx-auto">
      <div className="flex items-center">
        <img className="h-12 w-12" src={logo} alt="Site-Logo" />
      <h1 className="text-xl font-bold">Team Revanta</h1>
      </div>
      <ul className="flex space-x-4 text-xs">
        <NavItem lable={"HOME"}/>
        <NavItem lable={"ACHIEVEMENTS"}/>
        <NavItem lable={"CONTACT US"}/>
        <NavItem lable={"OUR TEAM"}/>
        <NavItem lable={"SPONSOR US"}/>
      </ul>
      <div className="flex space-x-2 text-xl">
        <FaLocationDot className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer ease-linear"/>
        <FaPhone className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer ease-linear"/>
        <MdOutlineMail className="hover:text-green-400 hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer ease-linear text-2xl"/>
      </div>
    </nav>
  </header>
  )
}

export default Navbar