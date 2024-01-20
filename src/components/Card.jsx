import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data , reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.1} className='relative w-60 h-72 bg-black rounded-[40px] text-white py-5 px-10 overflow-hidden '>
        <FaRegFileAlt />
        <p  className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex justify-between items-center px-8 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                {data.close ? <IoClose /> : <FaDownload/> }                
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue"? "bg-blue-600":"bg-green-600"} flex text-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>)}
            
        </div>
    </motion.div>
  )
}

export default Card