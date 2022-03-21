import React from 'react';
import Chuchucat from './Chuchucat';
// import Roadmap from './Roadmap';
import Team from './Team';
import Faq from './Faq';
import Project from './Project';
// import FaqTemp from './FaqTemp';
import Roadmap from './Roadmap';


function Content ({isKorean}) {
  
  return (
    <>
      <Project isKorean={isKorean}/>
      <Chuchucat isKorean={isKorean} />
      <Roadmap isKorean={isKorean} />
      <Team isKorean={isKorean} />
      <Faq isKorean={isKorean} />
      {/* <FaqTemp /> */}
    </>

  )
}

export default Content