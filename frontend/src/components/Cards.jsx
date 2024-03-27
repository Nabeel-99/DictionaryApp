import React, { useEffect, useState } from 'react'
import { BiCodeAlt } from "react-icons/bi";
const Cards = ({darkMode}) => {
  return (
    <div className="bgsvg relative flex flex-col md:items-center  xl:flex-row md:gap-4">
      <div className="flex flex-col gap-10 xl:ml-10 mt-10 p-5 ">
        <div className={darkMode ? " rounded-md bg-[#222] flex items-center justify-center gap-4 shadow-lg shadow-cyan-800 drop-shadow-2xl  py-10 p-3 md:w-[27rem] " : "border bg-white rounded-md flex items-center justify-center gap-4 shadow-lg shadow-cyan-300 drop-shadow-2xl  py-10 p-3 md:w-[27rem] overflow-auto"}>
            <p className="border overflow-auto h-7 text-left px-2 min-w-44 w-72  md:min-w-0 md:w-40 rounded-md">developer</p>
            <p className="shadow-md text-sm px-4 border h-7 flex justify-center items-center rounded-md">Search</p>
        </div>
        <div className={darkMode ? " bg-[#222] rounded-md shadow-md shadow-blue-800   p-3 flex flex-col text-left md:w-[38rem] h-48 " : " bg-white rounded-md shadow-lg shadow-blue-200 drop-shadow-2xl border p-3 flex flex-col text-left md:w-[38rem] h-48"}>
            <h2 className="text-xl px-3 py-3 overflow-auto">
              A developer is a professional who designs, creates, and maintains software applications, websites, or other digital products.
            </h2>
            <p className="px-3"></p>
            
        </div>
      </div>
      <div className="p-5 md:p-0">
       <div className={darkMode ? "relative h-[29rem] flex rounded-md   flex-col  bg-[#222] shadow-lg shadow-green-900 drop-shadow-2xl  md:w-[42rem] lg:mt-16" : "relative h-[29rem] flex rounded-md   flex-col  bg-white shadow-lg shadow-green-200 drop-shadow-2xl border md:w-[42rem] lg:w-[60rem] xl:w-[38rem] xl:mt-16"}>
        <div className={darkMode ? "bg-[#333] p-2 rounded-t-md" : "bg-gray-300 p-2 rounded-t-md"}><BiCodeAlt/></div>
        <div className="text-left text-sm px-3 py-3 overflow-auto">
          <pre>
            <code className="">
           &lt;<span className="text-blue-700">div</span> <span className="text-blue-600">className=</span><span className="text-pink-500">"flex flex-col items-center justify-center h-96 w-35rem bg-gray-100 rounded-lg shadow-md p-8"</span>&gt;<br/>
      &nbsp; &lt;<span className="text-blue-700">h1</span> <span className="text-blue-600">className=</span><span className="text-pink-500">"text-3xl font-bold mb-4"</span>&gt;Developer&lt;/<span className="text-blue-700">h1</span>&gt;<br/>
      &nbsp; &nbsp; &lt;<span className="text-blue-700">p</span> <span className="text-blue-600">className=</span><span className="text-pink-500">"text-lg mb-6"</span>&gt;<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; A developer is a professional who designs, creates, and maintains software applications, websites, or other digital products.<br/>
      &nbsp; &nbsp; &lt;/<span className="text-blue-700">p</span>&gt;<br/>
      &nbsp; &nbsp;&lt;<span className="text-blue-700">div</span> <span className="text-blue-600">className=</span><span className="text-pink-500">"bg-white p-4 rounded-lg shadow"</span>&gt;<br/>
      &nbsp; &nbsp; &nbsp;&lt;<span className="text-blue-700">button</span> <span className="text-blue-600">onclick=</span><span className="text-pink-500">&#123;fetchWord&#125;</span> <span className="text-blue-600">class=</span><span className="text-pink-500">"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"</span>&gt;Fetch Word&lt;/<span className="text-blue-700">button</span>&gt;<br/>
      &nbsp; &nbsp; &nbsp;&lt;<span className="text-blue-700">pre</span> <span className="text-blue-600">className=</span><span className="text-pink-500">"text-sm font-mono whitespace-pre overflow-x-auto h-64"</span>&gt;<br/>
      &nbsp; &nbsp; &nbsp; &nbsp;&lt;<span className="text-blue-700">code</span> <span className="text-blue-600">className=</span><span className="text-pink-500">"language-javascript"</span>&gt;<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;const fetchWord = () =&gt; &#123;<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;console.log("Fetching product details...");<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;fetch('https://api.example.com/products')<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.then(response =&gt; response.json())<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.then(data =&gt; console.log(data))<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;.catch(error =&gt; console.error('Error fetching products:', error));<br/>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&#125;<br/>
      &nbsp; &nbsp; &nbsp; &nbsp;&lt;/<span className="text-blue-700">code</span>&gt;<br/>
      &nbsp; &nbsp; &nbsp;&lt;/<span className="text-blue-700">pre</span>&gt;<br/>
      &nbsp; &nbsp;&lt;/<span className="text-blue-700">div</span>&gt;<br/>
    &lt;/<span className="text-blue-700">div</span>&gt;<br/>
    </code>
  </pre>
</div>

       </div>
      </div>
     
    </div>
  )
}

export default Cards


{/* <div class="flex flex-col items-center justify-center h-96 w-35rem bg-gray-100 rounded-lg shadow-md p-8">
    <h1 class="text-3xl font-bold mb-4">Developer</h1>
    <p class="text-lg mb-6">
        A developer is a professional who designs, creates, and maintains software applications, websites, or other digital products.
    </p>
    <div class="bg-white p-4 rounded-lg shadow">
        <button onclick="fetchWord()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Fetch Word</button>
        <pre class="text-sm font-mono whitespace-pre overflow-x-auto h-64">
            <code class="language-javascript">
                const fetchWord = () => {
                    console.log("Fetching product details...");
                    fetch('https://api.example.com/products')
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error('Error fetching products:', error));
                }
            </code>
        </pre>
    </div>
</div>`}
        </code>
    </pre>
</div>

remove it from the the curly brackets {``} and make the tags in span classes with the colours  */} 