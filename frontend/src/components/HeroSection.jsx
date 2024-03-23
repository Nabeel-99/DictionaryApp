import axios from "axios"
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

const HeroSection = () => {
    const [word, setWord] = useState('')
    const [dictionary, setDictionary] = useState([])
    const dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const [terms, setTerms] = useState([])
    
    const fetchWord = async() => {
        try{
            const response = await fetch(dictionaryAPI) 
            const data = await response.json()  
            
            
            // const meanings = data.map((meaning) => {
            //     const partOfSpeech = meaning.partOfSpeech;
            //     const definitions = meaning.definitions.map((definition) => {
            //         return {
            //             definition: definition.definition,
            //             synonyms: definition.synonyms,
            //             antonyms: definition.antonyms
    
            //         }
            //     });
            //     return {partOfSpeech, definitions}
            // })
            
            // const phonetics = data.phonetics.map((phonetic) => {
            //      return {
            //         text: phonetic.text,
            //         audio: phonetic.audio
            //      }
            // })
    
            // const wordResult = {
            //     title: data[0].word,
            //     phonetics: phonetics,
            //     meanings: meanings
            // }
    
            setDictionary({
               word: data[0].word
            })
            console.log(dictionary)
        }catch(error){
            console.log(error)
        }
       
    }
    useEffect(() => {
        console.log(dictionary)
    }, [dictionary])

    useEffect(() => {
        const allWords = async () => {
            try {
              const response = await axios.get("http://localhost:3000/words")
              setTerms(response.data.map(title => title.title))
            } catch (error) {
              console.log(error)
            }
        }
        allWords()
    }, [])
    
  //  

  const handleSpecificWord = async(id) => {
    try {
      const response = await axios.get(`http://localhost:3000/word/${id}`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <div className="flex flex-col gap-5 bg text-white p-5">
      <h2 className="text-[2rem] md:text-[5rem] tracking-tight font-serif">Developers Dictionary</h2>
      <div className="">
        <form className="flex justify-center items-center gap-4 py-3" onSubmit={handleSubmit}>
         <input 
            placeholder="Search for a word" 
            className="md:w-96  shadow-sm  rounded-md px-2 p-1 md:p-2 bg-[#222]"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            required/>
         <button type="submit" onClick={fetchWord} className="w-24 p-1 md:p-2 rounded-md bg-[#222] cursor-pointer hover:bg-gray-800">Search</button>
        </form> 
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-center md:text-xl">Fundamental and frequently used terms every programmer should know.</p>
      <div className="hidden mt-5 md:grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 md:gap-2 lg:gap-8"> 
        {terms.map((term, index) => (
           <div key={index}> 
            <button onClick={() => handleSpecificWord(term)} className="w-32 h-14 overflow-auto bg-[#222] p-2 px-2 rounded-md text-sm hover:bg-[#3e3d3d]">{term}</button>
           </div> 
        ))}
       </div>  
     </div>  
    </div>
    {}
    </>
  )
}

export default HeroSection
