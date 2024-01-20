import React from 'react'

const Background = () => {
  return (
    <div className='w-full h-screen z-[2] fixed'>
        <div className='w-full absolute top-[5%] flex justify-center text-center font-semibold text-zinc-500 text-xl '>Documents.</div>
        <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-[10vw]  tracking-tighter text-black font-bold'>Docs.</h1>
    </div>
  )
}

export default Background