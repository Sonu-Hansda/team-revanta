
interface IAchievementProps{
    content:string,
    label: string,
    image: string,
}

function AchievementCard(props:IAchievementProps) {
  return (
    <div className="bg-white hover:bg-green-300 rounded-lg border p-6 text-sm hover:shadow-xl hover:-translate-y-2 transition-all ease-linear duration-300 hover:cursor-pointer">
                <img className="mx-auto" src={props.image} alt="S1 image"/>
                <h3 className="text-center text-xl font-semibold">{props.label}</h3>
                <p className="m-2">{props.content}</p>
            </div>
  )
}

export default AchievementCard