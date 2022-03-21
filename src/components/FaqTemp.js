import React from 'react';
import {ReactComponent as Mail} from '../assets/mail2.svg';
import {ReactComponent as Twitter} from '../assets/twitter.svg';
import {ReactComponent as Discord} from '../assets/discord2.svg';
import {ReactComponent as Opensea} from '../assets/Opensea.svg';
// import { Center } from '@react-three/drei';




function Faq ({isKorean}) {
  

  return (
    <section id="faq">
      
      <div className="faq col-xl-8 col-sm-12">
        
        {/* <h2 style={{alignSelf: 'center', fontSize:'1rem', marginTop: '9rem', display: 'inline-block'}}>ⓒ 2022 Close Your Eyes</h2> */}
        
        {/* <button style={{border: '2px solid white', alignSelf: 'center', backgroundColor:'transparent', outline: 'none', padding:'1%', marginTop: '1.5rem'}}><a style={{textDecoration: 'none', color: 'white'}} href="mailto:chuchucatcs@gmail.com"><h3 style={{margin: 0}}>Contact Us</h3></a></button> */}

        
        <div id="contact">
          <a href="https://twitter.com/closeyoureyesV1" target="_blank" rel="noreferrer" ><Twitter className='contact-item' circle-fill="white" /></a>
          <a href="https://discord.gg/GqPun5497Z" target="_blank" rel="noreferrer" ><Discord className='contact-item'  fill="grey" /> </a>
          <a href="#" ><Opensea className='contact-item' /> </a>
          <a style={{textDecoration: 'none', color: 'white'}} href="mailto:chuchucatcs@gmail.com"><Mail className='contact-item' circle-fill="white" /></a>
        </div>
      </div>


      <picture>
        <source media="(max-width: 575.98px)" srcSet="./footer_mo_new.jpg" />  
        {/* <source srcSet="./footer_new.webp" type='image/webp' alt="footer:chuchu image"></source> */}
        <img style={{width:'min(1600px, 100vw)', maxWidth: '100%', margin:'auto', display:'block'}} src="./footer_new.jpg" alt="footer: chuchu"></img>
      </picture>

      {/* <picture>
        <source srcSet="footer.webp" type="image/webp" />  
        <img src="footer.png" alt="footer" id="footer-image" />
      </picture> */}
    </section>

  )
}

export default Faq