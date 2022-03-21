import React from 'react';




function FaqItem ({question, answer}) {
  console.log('무슨 일이야...')
  return (
    <>
      <div className="faq col-xl-8">
        <div className="question">
          <p>Q. {question}</p>
          <button style={{appearance: 'none'}}>{'>'}</button>
        </div>
        <hr style={{width: '100%'}} />
        <p className="faq-item">A. {answer}</p>
      </div>
    </>

  )
}

export default FaqItem