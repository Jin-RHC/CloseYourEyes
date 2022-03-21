import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


function Slime ({name}) {

  return (
    <div className="introduction">
      <h2>S.L.I.M.E.</h2>

      <div id="slime">
        
        <Carousel centerMode={true} showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
          <div className='slimeitem'>
            <picture>
              <source srcSet="handmade.webp" type="image/webp" />
              <img src="handmade.png" alt="slime" />
            </picture>
            <h4 className="slime-name">
              HAND MADE
            </h4>
            {/* <h2>S</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="legendary.webp" type="image/webp" />
              <img src="legendary.png" alt="slime" />
            </picture>
            <h4 className="slime-name">
              LEGEND
            </h4>
            {/* <h2>L</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="unique.webp" type="image/webp" />
              <img src="unique.png" alt="slime" />
            </picture>
            <h4 className="slime-name">
              UNIQUE
            </h4>
            {/* <h2>I</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="rare.webp" type="image/webp" />
              <img src="rare.png" alt="slime" />
            </picture>
            <h4 className="slime-name">
              RARE
            </h4>
            {/* <h2>M</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="normal.webp" type="image/webp" />
              <img src="normal.png" alt="slime" />
            </picture>
            <h4 className="slime-name">
              NORMAL
            </h4>
            {/* <h2>E</h2> */}
          </div>
        </Carousel>

        
      </div>

      <p>
        S.L.I.M.E. is chuchuCAT’s alter ego, and also her best friend. 
        The name stands for ‘Signal Living In My Emotions’, which expresses all their feelings for her. 
        They also protect her from danger by turning into a shield while she’s concentrating to capture bad dreams. 
        S.L.I.M.E.s can transform their body into any kind of form they want. 
      </p>
      
      

    </div>


  )
}

export default Slime