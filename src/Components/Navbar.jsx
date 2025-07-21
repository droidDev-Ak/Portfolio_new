import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { X } from "lucide-react"
import '../App.css'
import { Link } from "react-router-dom"

export default function Navbar() {

    useGSAP(()=>{
        gsap.from(".Navbar",{
            y:-160,
            opacity:0,
            ease:"back.out",
            duration:0.5,
            delay:0.7,
        });
    })

    return (


        <div className=" w-full z-10 flex justify-center top-0 sticky bg-[#040813]">
            
            {/* Blur layer */}
          <div className=' Navbar   absolute bg-blue-400/10 w-10/12 h-16 px-8 top-4 left-37 rounded-xl backdrop-blur-2xl shadow-blue-600 shadow-sm ' > </div>
            {/* Image  */}
            <div className='mr-5 mt-4 size-18 rounded-4xl'>
                {/* <img className='rounded-full h-20 w-35' src="../src/assets/cropp.jpg"></img> */}

            </div>
            <div className="Navbar   text-white font-semibold sticky flex justify-between items-center   w-10/12 mt-4  px-8 h-16 bg-transparent border-2 border-slate-300 rounded-xl ">

                {/* <!-- Name  --> */}

                <div className="font-poppins text-xl"><span>Akash<span className='text-indigo-500'> Kumar</span><span className='text-indigo-500'>.</span> </span>   </div>
                {/* <!-- Tags --> */}
                <div className="flex relative gap-7">


                   <Link to="/" className="transition cursor-pointer hover:text-indigo-500 hover:ease-in-out">Home</Link>
                   <Link to="/skills" className="transition cursor-pointer hover:text-indigo-500 hover:ease-in-out">Skills</Link>
                   <Link to="/projects" className="transition cursor-pointer hover:text-indigo-500 hover:ease-in-out">Projects</Link>
                   <Link to="/contact" className="transition cursor-pointer hover:text-indigo-500 hover:ease-in-out">Contact</Link>

                </div>
                {/* <!-- Resume --> */}
                <div className="cursor-pointer p-2 rounded-xl bg-indigo-500 "> Resume </div>
            </div>

        </div>


    )
}
