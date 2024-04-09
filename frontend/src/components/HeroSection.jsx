import axios from "axios"
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from "react-router-dom"
import ContentSection from "./ContentSection"
import CustomWords from "./CustomWords"
import { FaXmark } from "react-icons/fa6";
import Cards from "./Cards"

const HeroSection = ({darkMode}) => {
    const [word, setWord] = useState('')
    const [dictionary, setDictionary] = useState([])
    const [displayContent, setDisplayContent] = useState(false)
    const [displayCustomWord, setDisplayCustomWord] = useState(false)
    const [displayCards, setDisplayCards] = useState(true)
    const  dictionaryAPI = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const [terms, setTerms] = useState([])
    const [noOfWords, setNoOfWords] = useState(18)
    const [displayedTerms, setDisplayedTerms] = useState([])
    const [customWords, setCustomWords] = useState([])
    const contentRef = useRef();
    const wordRef = useRef();
    const [btnText, setBtnText] = useState('Show more...')
    const [isViewWords, setIsViewWords] = useState(false)
    const [isShowingMore, setIsShowingMore] = useState(false)
    const [noWordFound, setNoWordFound] = useState(false)

    const fetchWord = async () => {
      setWord('')
      setDisplayContent(true)
      setDisplayCustomWord(false)
      setDisplayCards(false)
      if(word === ''){
        setDisplayCards(true)
      }
      const response = await fetch(dictionaryAPI)
      if(response.ok){
      const data = await response.json()
      console.log(data)
      const { word, meanings} = data[0];
      const definitions = meanings.map(meaning => meaning.definitions[0].definition)
      const phonetic = data[0].phonetics.map(phonetic => phonetic.text)[0]
      const synonyms = meanings[0].synonyms ? meanings[0].synonyms : []
      const antonyms = meanings[0].antonyms ? meanings[0].antonyms : []

      setDictionary({
        word: word,
        definition: definitions,
        phonetic: phonetic,
        synonyms: synonyms,
        antonyms: antonyms
      })

      setNoWordFound(false)
    }else{
      const errorData = await response.json()
      console.log('error:', errorData.title)
      setNoWordFound(true)
      setDictionary('')
    }

    
      if(contentRef.current && displayContent ){
        contentRef.current.scrollIntoView({behavior: 'smooth'})
      }
    }
    
    useEffect(() => {
      console.log(dictionary)
      if(contentRef.current && displayContent ){
        contentRef.current.scrollIntoView({behavior: 'smooth'})
      }
      
    }, [dictionary, displayContent])

    const allWords = async () => {
      try {
        const response = await axios.get("http://localhost:3000/words")
        setTerms(response.data.map(title => title.title))
  
      } catch (error) {
        console.log(error)
      }
  }
   const showLess = () => {
    setNoOfWords(18)
    setIsShowingMore(false)
   }

    const showMoreWords = () => {
       setNoOfWords(prevNo => prevNo + noOfWords)
       setIsShowingMore(true)
    }
   
    useEffect(() => {
      setDisplayedTerms(terms.slice(0, noOfWords))
    }, [terms, noOfWords])

    const displayWords = async() => {
      console.log(terms)
      setIsViewWords(!isViewWords)
      setDisplayCards(false)
      setDisplayCustomWord(false)
      setDictionary('')
      
    
  }
    const closeWordsContainer = () => {
      setIsViewWords(!isViewWords)
      setDisplayCards(true)
      setDictionary('')
    }
    useEffect(() => {
        allWords()
        if(wordRef.current && displayCustomWord){
          wordRef.current.scrollIntoView({behavior: 'smooth'})
      }
    }, [displayCustomWord])
    


  const handleSpecificWord = async(id) => {
    try {
      const response = await axios.get(`http://localhost:3000/word/${id}`)
      console.log(response.data)
      setCustomWords(response.data)
      setDisplayCustomWord(true)
      setDisplayContent(false)
      setDisplayCards(false)
      setIsViewWords(false)

      if(wordRef.current && displayCustomWord){
          wordRef.current.scrollIntoView({behavior: 'smooth'})
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  const togglePreview = () => {
    setDisplayCards(!displayCards)
    setDisplayContent(false)
    setDisplayCustomWord(false)
    setDictionary('')

  }

  
  
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
    <div className="relative flex flex-col gap-5 justify-center items-center bg text-white p-5 ">
      <h2 className="text-[2rem] md:text-[5rem] tracking-tight font-serif">Developers Dictionary</h2>
      <div className="">
        <form className="flex justify-center items-center gap-4 py-3" onSubmit={handleSubmit}>
         <input 
            placeholder="Search for a word" 
            className="md:w-96 border  shadow-sm  rounded-md px-2 p-1 md:p-2 bg-[#222]"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            />
         <button type="submit" onClick={fetchWord} className="w-24 border-2 border-gray-800 p-1 md:p-2 rounded-md bg-[#222] cursor-pointer hover:bg-gray-800">Search</button>
        </form> 
      </div>
      <div className="relative flex flex-col gap-5">
        <p className="text-center md:text-xl">Fundamental and frequently used terms every programmer should know.</p>
      <div className="hidden mt-5 md:grid md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-9 md:gap-8 lg:gap-8"> 
        {displayedTerms.map((term, index) => (
           <div key={index}> 
            <button onClick={() => handleSpecificWord(term)} className="w-32 h-14 overflow-auto bg-[#222] p-2 px-2 rounded-md text-sm hover:bg-[#3e3d3d]">{term}</button>
           </div> 
        ))}
       </div> 
      
       <div className="md:hidden">
          <button onClick={displayWords} className="bg-[#222] p-2 rounded-lg px-3 hover:bg-gray-800 text-sm">View more</button>
        </div> 
        <div className={isShowingMore ? "" : "hidden md:inline absolute md:top-[90%] lg:top-[88%]   bg-gradient-to-b rounded-lg from-transparent to-black z-20 h-10 w-full gradien"}>
           
        </div>
     </div> 
     <div className="hidden md:inline">
         {isShowingMore ? (
          <button onClick={showLess} className="bg-[#666] py-3 px-4 rounded-md shadow-md shadow-gray-600 hover:bg-gray-500">Show less</button>
         ): (
          <button onClick={showMoreWords} className="bg-[#666] py-3 px-4 rounded-md shadow-md shadow-gray-600 hover:bg-gray-500">Show more...</button>
         )}
      </div> 
    </div>
    <div className={isViewWords ? "absolute top-0 right-0 left-0 bg-white w-full z-30 " : "hidden"}>
        <div className={darkMode ? "py-3 bg-black text-right px-5" : "py-3 text-right px-5" }>
           <button onClick={closeWordsContainer}><FaXmark className="w-8 h-8"/></button>
        </div>
        <div className={darkMode ? "grid grid-cols-3 gap-3 py-8 bg-black text-white" : "grid grid-cols-3 gap-3 py-8 bg-white"}> 
        {terms.map((term, index) => (
           <div key={index}> 
            <button onClick={() => handleSpecificWord(term)} className={darkMode ? "w-32 h-14 overflow-auto bg-[#222] shadow-lg p-2 px-2 rounded-md text-sm hover:bg-black hover:text-white" : "w-32 h-14 overflow-auto bg-white shadow-lg p-2 px-2 rounded-md text-sm hover:bg-black hover:text-white"}>{term}</button>
           </div> 
        ))}
       </div> 
    </div>
    {displayCards && (<div><Cards darkMode={darkMode}/></div>)}
    {displayContent && (
      <div ref={contentRef}>
        <ContentSection dictionary={dictionary} togglePreview={togglePreview} darkMode={darkMode} noWordFound={noWordFound}/>
      </div>)}
    {displayCustomWord && (<div ref={wordRef}><CustomWords customWords={customWords} togglePreview={togglePreview} darkMode={darkMode}/></div>)}

    </>
  )
}

export default HeroSection
