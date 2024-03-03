import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import WorkPortfolio from "./components/WorkPortfolio";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
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
