import logo from "./logo.png";
import {FaLinkedin,FaFacebook,FaInstagram , FaLocationDot, FaPhone} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import NavItem from "./components/NavItem";
function App() {

  return (
    <>
      <header className="p-2 bg-slate-900 text-white">
        <nav className="w-3/4 flex items-center justify-evenly mx-auto">
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
      <main className="w-3/4 mx-auto py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit tempora officiis omnis minima voluptate. Eum vel fuga ullam beatae magnam ipsa maiores, officiis pariatur libero? Asperiores porro adipisci cum dolor minus cumque?
      </main>
      <footer className="bg-slate-900">
        <div className="w-3/4 mx-auto grid grid-cols-3 p-4 text-white">
          <div>
          <h2 className="text-2xl font-bold mb-2">Team <span className="text-green-400">Revanta</span></h2>
          <h2 className="underline underline-offset-4 mb-2">NIT JAMSHEDPUR</h2>
          <p className="text-sm w-1/2">
          NIT Jamshedpur is an Institute of National Importance for Technical Education located at Jamshedpur, Jharkhand, India and is directly under the control of the Ministry of Education (MHRD).
          </p>
          </div>
          <div>
            <h2>USEFUL LINKS</h2>
            <ul>
              <li>Home</li>
              <li>Team</li>
              <li>Achievements</li>
              <li>Gallery</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            
          </div>
        </div>
        <div className="bg-slate-200">
        <div className="w-3/4 mx-auto flex items-center justify-between p-4 text-center">
        <p>
        © All Rights Reserved By Team Revanta, Nit Jamshedpur
        </p>
        <span  className="flex space-x-2 text-xl">
          <FaFacebook/>
          <FaLinkedin/>
          <FaInstagram/>
        </span>
        </div>
        </div>
      </footer>
    </>
  )
}

export default App
