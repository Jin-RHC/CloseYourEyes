import React from 'react';


function Roadmap ({isKorean}) {


  return (
    <section id="roadmap">
      <div className="introduction">
        <h1>Roadmap</h1>
        {isKorean? 
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/new_roadmap_mo_v1_1.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap_kr_mo_new.jpg" />  
          <img style={{maxWidth: '100%', margin: 'auto', display:'block'}} src="./roadmap_kr_new.jpg" alt="roadmap"></img>
        </picture>
        :
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/new_roadmap_mo_v1_1.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap_en_mo_new.jpg" />  
          <img style={{maxWidth: '100%', margin: 'auto', display:'block'}} src="./roadmap_en_new.jpg" alt="roadmap"></img>
        </picture>
        }

      </div>
    </section>
  )
}

export default Roadmap