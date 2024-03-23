import React, { useEffect, useState } from 'react'
import { BiCodeAlt } from "react-icons/bi";
const Cards = () => {
  return (
    <div className="bgsvg relative flex flex-col xl:flex-row md:gap-10">
      <div className="flex flex-col gap-10 mt-10 p-5 ">
        <div className="border rounded-md flex items-center justify-center gap-4 bg-white shadow-lg shadow-cyan-300 drop-shadow-2xl md:ml-20 py-10 p-3 md:w-72">
            <p className="border overflow-auto h-7 text-left px-2 min-w-44 w-72 md:min-w-0 md:w-40 rounded-md">developer</p>
            <p className="shadow-md text-sm px-4 rounded-md">Search</p>
        </div>
        <div className=" bg-white rounded-md shadow-lg shadow-blue-200 drop-shadow-2xl border p-3 flex flex-col text-left md:w-[38rem] h-64 md:ml-20">
            <h2 className="text-xl px-3 py-3">Developer</h2>
            <p className="px-3">Definition</p>
            <p className="px-3">Synonyms</p>
            <p className="px-3">Antonyms</p>
        </div>
      </div>
      <div className="p-5 md:p-0 md:ml-24">
      <div className="relative h-96 flex rounded-md   flex-col  bg-white shadow-lg shadow-green-200 drop-shadow-2xl border md:w-[35rem] lg:mt-16">
        <div className="bg-gray-300 p-2 rounded-t-md"><BiCodeAlt/></div>
      </div>
      </div>
      <div className="absolute top-[100%] xl:top-[29rem] right-0 mt-3 left-0">
        <button className="px-4 p-2 bg-blue-400 shadow-lg drop-shadow-md shadow-blue-300 rounded-md text-white">Reveal Preview</button>
      </div>
    </div>
  )
}

export default Cards
