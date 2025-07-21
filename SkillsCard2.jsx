import React from 'react'
import { CodeXml } from 'lucide-react';
import { GoDotFill } from "react-icons/go";
import '../Keyframes2.css'



function SkillsCard2({img,title,status,info,prompt,color}) {
  return (
    <>
    <div className='background  -z-10'>
        <div className='card h-[40vh] w-[40vw]  border-1 m-[3vw]  '>
            <div className="heading flex  border-2 border-black m-1">
                    <CodeXml className='m-[1vw] border-2 border-black p-[1vh] ' color="#0000ff" size={48} strokeWidth={2} />
                    <div>
                        <div className='mt-3' >HTML </div>
                        <div className='flex size-4 gap-0 mt-1 items-center' > 
                             <div> <GoDotFill fill={color} /> </div>
                             <div> {status} </div> 
                             </div>
                            
                    </div>

            </div>

            <div className='ml-5' > {info} </div>
            <div className='text-blue-600 border-2 border-black w-[22vw] ml-[2vw] mt-[2vh]' >Animated Text </div>


        </div>
    
    </div>
    
    
    </>
  )
}

export default SkillsCard2