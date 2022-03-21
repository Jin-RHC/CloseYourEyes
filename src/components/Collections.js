import React from 'react';


function Collections ({modelNum, setTargetModal, setShowModal}) {
  // const stopScroll = () => {
  //   console.log('눌리긴 했어')
  //   document.body.classList.add('stop-scroll')
  // }

  const open = () => {
    setTargetModal(modelNum)
    setShowModal(true)
  }

  return (
    <div onClick={open} className="showcase-image">
      <picture>
        <source srcSet={`showcase/new_${modelNum}.webp`} type="image/webp" />  
        <img src={`showcase/new_${modelNum}.jpg`} alt={modelNum}></img>
      </picture>
    </div>

  )
}

export default Collections