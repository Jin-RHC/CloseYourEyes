import React from 'react';


function Zodiac ({name}) {

  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
        <img style={{width:'80%', objectFit: 'cover'}} src={`zodiac/${name}.png`} alt="none" />
        <p style={{bottom: '1%', padding:'0%', marginTop: 0}}>{name}</p>
      </div>
    </div>

  )
}

export default Zodiac