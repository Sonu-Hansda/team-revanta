import s1 from "../assets/images/s1.png"
import s2 from "../assets/images/s2.png"
import s3 from "../assets/images/s3.png"
import s4 from "../assets/images/s4.png"
import s5 from "../assets/images/s5.png"
import s6 from "../assets/images/s6.png"
import AchievementCard from "./AchievementCard"

function Achievements() {
  return (
   <section>
    <h1 className="text-center font-bold text-2xl underline underline-offset-4">Our <span className="text-green-500">
        Achievements
        </span> 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-4">

            <AchievementCard image={s1} content="Our team participated in SAE Supermileage 2010 held in Michigan, USA. Through collaborative efforts, innovation, and dedication, we have secured the overall 3rd position. Team Revanta’s success at SAE brings unparalleled glory and pride to our Institute NIT Jamshedpur." label="SAE SUPERMILEAGE , USA" />

            <AchievementCard image={s2} content="Team Revanta proudly announces 2nd place in Shell Eco Marathon Asia 2012 in Kuala Lumpur, Malaysia. Beyond accolades, it's about the journey and conquering new heights together, fostering a spirit of continuous improvement and teamwork led by our passionate members." label="Shell Eco Marathon, Malaysia" />

            <AchievementCard image={s3} content="In 2021, Team Revanta in Electric Solar Vehicle Championship secured 5th in design and 7th in Virtuals. United as a team, we faced challenges, emerged stronger, and remain committed to pushing the boundaries of sustainable technology, led by the visionary Abhisekh Kumar(PIE)." label="ESVC'21" />

            <AchievementCard image={s4} content="In 2023, Revanta in Electric Solar Vehicle Championship secured 1st in Business plan, 3rd in Cost and Manufacturing. Cheers to countless victories ahead, as we look forward to pioneering innovations in the field of electric vehicles, led by the dynamic leadership of Rajat Raj(ME)." label="ESVC'23" />
            
            <AchievementCard image={s5} content="The team participated in the Electric Solar Vehicle Championship-2014 led by Gaurav Singh (MME) and came out with flying colours, securing the fourth rank in the virtuals and an over all remarkable performance in the dynamic event." label="Championship-2014" />

            <AchievementCard image={s6} content="Currently the team is engaged in doing research to improve the mileage and efficiency of Electric-Solar Vehicle. The team is also looking forward to make an ultra-light cost,effective hybrid vehicle. The team switched into the Electric Solar Hybrid Category." label="Hybrid-Vehicle" />
       
        </div>
   </section>
  )
}

export default Achievements