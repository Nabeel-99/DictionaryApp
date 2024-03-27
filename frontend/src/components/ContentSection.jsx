import React from 'react'

const ContentSection = ({dictionary, togglePreview, darkMode, noWordFound}) => {
  return (
    <div className="relative flex flex-col gap-10">
      <div className="ml-10 md:ml-20 mx-auto mt-10 flex flex-col text-left gap-5 p-3">
        <h3 className="text-2xl md:text-[3rem]">{dictionary.word}</h3>
        <h2 className="text-xl">{dictionary.phonetic}</h2>
        <p className="text-xl">{dictionary.definition}</p>
        {dictionary.synonyms && dictionary.synonyms.length > 0 && (
          <div>
            <h2 className="text-xl">Synonyms: </h2>
            <ul>
              {dictionary.synonyms.map((synonym, index) => (
                <li key={index} className="text-xl list-disc">{synonym}</li>
              ))}
            </ul>
          </div>
        )}
         {dictionary.antonyms && dictionary.antonyms.length > 0 && (
          <div>
            <h2 className="text-xl">Antonyms: </h2>
            <ul>
              {dictionary.antonyms.map((antonym, index) => (
                <li key={index} className="text-xl list-disc">{antonym}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {noWordFound && (<div className="flex items-center justify-center h-96"><h2 className="text-xl">No definition Found</h2></div>)}
      <div className="absolute top-[100%] right-0 left-0">
        <button onClick={togglePreview} className={darkMode ? "px-4 p-2 bg-[#222] shadow-lg rounded-md text-white hover:bg-gray-800" : "px-4 p-2 bg-black shadow-lg rounded-md text-white"}>Toggle Preview</button>
      </div>

    </div>
  )
}

export default ContentSection
