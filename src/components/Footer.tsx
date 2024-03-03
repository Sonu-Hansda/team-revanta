import { FaFacebook, FaLinkedin, FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa6"

function Footer() {
  return (
    <footer className="bg-slate-900">
        <div className=" mx-auto grid grid-cols-4 gap-x-4 p-12 text-white">
          <div >
            <h2 className="text-xl font-bold">USEFUL LINKS</h2>
            <ul>
              <li>Home</li>
              <li>Team</li>
              <li>Achievements</li>
              <li>Gallery</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="text-xl font-bold">MANUFACTURING</h2>
            <p>
            Sokhi Enterprise Pvt Ltd sponsors us to do fabrication works.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold">SOCIAL MEDIA</h2>
            <div className="flex ml-8 mt-4">
            <FaFacebookF className="text-green-500 bg-white rounded-full p-1 text-4xl cursor-pointer hover:-translate-y-2 transition-all ease-linear duration-300" />
            <FaInstagram className="text-green-500 bg-white rounded-full p-1 text-4xl -translate-x-3 z-10  shadow-xl shadow-black cursor-pointer hover:-translate-y-2 transition-all ease-linear duration-300" />
            <FaLinkedinIn className="text-green-500 bg-white rounded-full p-2 text-4xl -translate-x-6 z-30 shadow-lg shadow-black cursor-pointer hover:-translate-y-2 transition-all ease-linear duration-300 "/>
            </div>
          </div>
          <div>
          <h2 className="text-2xl font-bold mb-2">Team <span className="text-green-400">Revanta</span></h2>
          <h2 className="underline underline-offset-4 mb-2">NIT JAMSHEDPUR</h2>
          <p className="text-sm">
          NIT Jamshedpur is an Institute of National Importance for Technical Education located at Jamshedpur, Jharkhand, India and is directly under the control of the Ministry of Education (MHRD).
          </p>
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