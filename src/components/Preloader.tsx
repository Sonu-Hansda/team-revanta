import SVGIcon from "./Logo"
interface PreloaderProps{
    end:Boolean
}

function Preloader(props:PreloaderProps) {
  return (
    <div className={`fixed top-0 left-0 h-screen w-screen bg-slate-950 flex flex-col justify-center items-center ${props.end? "-translate-y-full" : ""} transition-all duration-300 ease-linear z-50`}>
    <SVGIcon/>
    {/* <h2 className="text-white text-5xl font-bold">
        Team 
        <span className=" text-green-400 ml-2">
        Revanta
        </span>
    </h2> */}
    </div>
 
  )
}

export default Preloader