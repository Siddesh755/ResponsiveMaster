import React from 'react'
import ucjpg from "./assets/uc.jpg";
function App() {
  return (
    <div className='flex flex-col justify-center item items-center'>
      <img src={ucjpg} alt=" uc"  className='flex justify-center w-5/12 h-5/12 -mt-8' />
      <div className='flex  flex-col items-center '>
        <h1>for more details contact </h1>
        <a href="https://www.linkedin.com/in/siddesh-navthale-38b555230/" class=" text-gray-700 font-bold text-4xl"> Siddesh Navthale</a>
      </div>
      </div>
      
  )
}

export default App


