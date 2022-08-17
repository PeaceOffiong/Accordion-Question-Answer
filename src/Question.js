import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (person) => {
  const [showMoreOrLess, setShowMoreOrLess] = useState(false)


  const { id, title, info } = person;

  return <>
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick = {() => setShowMoreOrLess(!showMoreOrLess)}>{showMoreOrLess ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
      </header>
      <p>{showMoreOrLess && info }</p>
    </div>
  </>;
};

export default Question;
