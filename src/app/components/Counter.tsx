'use client'
import React, { useState } from 'react'

export const Counter = () => {
    const [count, setCount] = useState<number>(0)

  return (
        <div className="flex flex-col items-center justify-center w-full h-full ">
      <span className="text-9xl ">
        {count}
      </span>
      <div className="flex">
        <button 
        onClick={() => setCount(count + 1)}
        className="flex items-center justify-center p-2 rounded-xl bg-gray-700 text-white hover:bg-gray-400 transition-all w-[120px] mr-2">

        </button>

         <button
         onClick={() => count > 0 ? setCount(count - 1) : ''} 
         className="flex items-center justify-center p-2rounded-xl bg-gray-700 text-white hover:bg-gray-400 transition-all w-[120px]">

        </button>
      </div>
    </div>
  )
}
