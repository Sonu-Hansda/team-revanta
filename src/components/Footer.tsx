import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6"

function Footer() {
  return (
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
  )
}

export default Footer