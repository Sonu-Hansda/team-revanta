function Contact() {
  return (
    <section>
    <h1 className="text-center font-bold text-2xl underline underline-offset-4">Get In <span className="text-green-500">
        Touch
        </span> 
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-4">
                <div className="bg-slate-800 py-12 rounded text-center">
                    <input className="block mb-2 p-2 w-3/4 text-black mx-auto " placeholder="Your name" type="text" name="name" id="name" />
                   <input type="text" value={"+91"} className="mb-2 p-2 w-[10%] bg-gray-200" disabled />
                    <input className="mb-2 p-2 w-[65%]" placeholder="Phone Number" type="tel" name="phone" id="phone" />
                    <select className="block mb-2 p-2.5 w-3/4 mx-auto" name="type" id="type">
                        <option value="sponsorship">Sponsorship</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="message">Message</option>
                    </select>
                    <input className="block mb-2 p-2 w-3/4 mx-auto" placeholder="Email address" type="email" name="email" id="email" />
                    <textarea className="mb-2 p-2 w-3/4" name="message" id="message" cols={30} rows={10} placeholder="Your message" />
                    <button className="p-2 w-3/4 bg-green-400">Submit</button>
                </div>
        </div>
   </section>
  )
}

export default Contact