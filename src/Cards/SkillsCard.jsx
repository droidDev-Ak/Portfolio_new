import React from 'react';
import { GoDotFill } from "react-icons/go";
import { SiReact } from "react-icons/si";
function SkillsCard({ title, info, status, snippet, color, icon,status2 }) {
    console.log(status2);
    async function fetching (){
try {
    const data= await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(data);
} catch (error) {
    throw new Error(error);
}
    }
    fetching();
    return (
        <div className='relative h-[40vh]  m-[3vw] rounded-2xl border border-white/20 
        bg-[#0f172a]/80 backdrop-blur-lg p-5 shadow-[0_8px_30px_rgba(0,0,0,0.3)]
        hover:scale-[1.03] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]
        hover:bg-gradient-to-tr from-blue-500/10 to-purple-500/10 transition-all duration-300 ease-in-out'>

            {/* Header */}
            <div className="flex items-start gap-4 border-b border-white/10 pb-3 mb-4">
                <div className='p-3 rounded-lg bg-black border-2 border-white/20 shadow-md'>
                </div>

                <div className="flex flex-col">
                    <h2 className='text-white text-xl font-semibold'>{title}</h2>
                    <div className='flex items-center text-sm mt-1'>
                        <GoDotFill fill={color} className='mr-1' />
                        <span className='text-gray-400'>{status}</span>
                    </div>
                </div>
            </div>

            {/* Info */}
            <p className='text-gray-300 text-sm mb-4 leading-relaxed px-1'>{info}</p>

            {/* Snippet */}
            <div className='bg-[#1e293b] text-blue-400 font-mono text-sm p-3 rounded-md border border-blue-500/30 shadow-inner w-fit'>
                {snippet}
            </div>
        </div>
    );
}

export default SkillsCard;
