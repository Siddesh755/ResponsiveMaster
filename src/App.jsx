import React from 'react';
import ucjpg from "./assets/uc.jpg";

function App() {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen p-4'>
      <img 
        src={ucjpg} 
        alt="uc"  
        className='w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 h-auto -mt-8' 
      />
      <div className='flex flex-col items-center text-center mt-4'>
        <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold'>For more details contact</h1>
        <a 
          href="https://www.linkedin.com/in/siddesh-navthale-38b555230/" 
          className="text-gray-700 font-bold text-2xl sm:text-3xl md:text-4xl mt-2 hover:text-[#56e3a6] transition"
        >
          Siddesh Navthale
        </a>
      </div>
    </div>
  );
}

export default App;