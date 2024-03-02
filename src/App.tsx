import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import WorkPortfolio from "./components/WorkPortfolio";
function App() {

  return (
    <>
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
