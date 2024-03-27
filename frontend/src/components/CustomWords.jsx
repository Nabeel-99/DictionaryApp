import React from 'react'

const CustomWords = ({customWords, togglePreview, darkMode}) => {
  return (
    <div className="relative flex flex-col gap-4 justify-center p-4">
    <div className="flex flex-col text-left gap-8 p-8 mt-10">
      <h3 className=" md:text-[3rem] font-bold">Word: {customWords.title}</h3>
      <h2 className=" md:text-xl"><span className="font-bold">Definition: </span>{customWords.definition}</h2>
      <h2 className=" md:text-xl"><span className="font-bold">Real-life Scenario:</span> {customWords.scenario}</h2>
      {customWords.snippet && customWords.snippet.length > 0 && (
        <div>
        <h2 className="md:text-xl font-bold py-3">Snippet:</h2>
        <pre className="">
            <code className=" text-sm md:text-xl whitespace-break-spaces">
                {customWords.snippet}
            </code>
        </pre>
      </div>
      )}

    </div>
    <div className="absolute top-[100%] right-0 left-0">
        <button onClick={togglePreview} className={darkMode ? "px-4 p-2 bg-[#222] shadow-lg rounded-md text-white" : "px-4 p-2 bg-black shadow-lg rounded-md text-white"}>Toggle Preview</button>
      </div>
  </div>
  )
}

export default CustomWords
