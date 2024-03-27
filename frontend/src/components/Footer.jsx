import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <div className={darkMode ? "border-t p-2 mt-20" : "border-t border-gray-700 p-2 mt-20"}>
       <footer>&copy; developers dictionary 2024. All Rights Reserved.</footer>
    </div>
  )
}

export default Footer
