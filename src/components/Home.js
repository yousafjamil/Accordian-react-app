import React, { useState } from 'react'
import data from './Data'
import Question from './Question';

function Home() {
  const [questions, setquestions] = useState(data);
  

 


  return (
    <div className='container py-2 '>
      <div className='row'>
       
{questions.map((question,index)=><Question  ans={question} /> ) }


        </div>
      </div>
  
   
  )
}

export default Home