import React from 'react'

const CustomWords = () => {
  return (
    <div className="flex flex-col gap-4 text-left">
    <div className="ml-10 mt-10 p-3">
      <h3 className="text-2xl">Word</h3>
      <h2>Definition:</h2>
      <h2>Real-life Scenario:</h2>
      <div>
        <h2>Snippet:</h2>
        <pre>
            <code>
                {`code snippet`}
            </code>
        </pre>
      </div>

    </div>
  </div>
  )
}

export default CustomWords
