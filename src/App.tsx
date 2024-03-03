import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import WorkPortfolio from "./components/WorkPortfolio";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import Pie from "./assets/images/Pie.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  const [loading,setLoading] = useState<Boolean>(true);

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  },[])


  return (
    <>
    <Preloader end={!loading} />
      <Navbar/>
      <div  className="flex flex-col justify-center">
        <img src={Pie} alt="Pie Ecm" className="h-[30rem] w-full object-cover"/>
        <div className="bg-slate-800 text-white font-bold p-2 border-t-2  border-green-400">
          PIE & ECM
        </div>
      </div>
      <main className="w-4/5 md:w-3/4 mx-auto py-8">
        <WorkPortfolio/>
       <Achievements/>
       <Contact/>
      </main>
     <Footer/>

    </>
  )
}

export default App
