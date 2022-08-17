import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestion] = useState(data);
  
  return <main>
    <section className='container'>
      <div>
        <h3>Questions And answers about login</h3>
      </div>
      <div>
          {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </div>
    </section>
  </main>;
}

export default App;
