import React, {useState} from 'react';
import {ReactComponent as Mail} from '../assets/mail2.svg';
import {ReactComponent as Twitter} from '../assets/twitter.svg';
import {ReactComponent as KakaoTalk} from '../assets/kakaotalk.svg';
import {ReactComponent as Discord} from '../assets/discord2.svg';
import {ReactComponent as Opensea} from '../assets/Opensea.svg';
// import { Center } from '@react-three/drei';




function Faq ({isKorean}) {
  const [showAnswer1, setShowAnswer1] = useState(false)
  const [showAnswer2, setShowAnswer2] = useState(false)
  const [showAnswer3, setShowAnswer3] = useState(false)
  const [showAnswer4, setShowAnswer4] = useState(false)
  const [showAnswer5, setShowAnswer5] = useState(false)
  const [showAnswer6, setShowAnswer6] = useState(false)
  const [showAnswer7, setShowAnswer7] = useState(false)
  const [showAnswer8, setShowAnswer8] = useState(false)
  const [showAnswer9, setShowAnswer9] = useState(false)
  const [showAnswer10, setShowAnswer10] = useState(false)
  const [showAnswer11, setShowAnswer11] = useState(false)
  const [showAnswer12, setShowAnswer12] = useState(false)
  const [showAnswer13, setShowAnswer13] = useState(false)
  const [showAnswer14, setShowAnswer14] = useState(false)

  const toggleAnswer1 = () => {
    setShowAnswer1(showAnswer1 => !showAnswer1); // on,off 개념 boolean
  }

  const toggleAnswer2 = () => {
    setShowAnswer2(showAnswer2 => !showAnswer2); // on,off 개념 boolean
  }

  const toggleAnswer3 = () => {
    setShowAnswer3(showAnswer3 => !showAnswer3); // on,off 개념 boolean
  }

  const toggleAnswer4 = () => {
    setShowAnswer4(showAnswer4 => !showAnswer4); // on,off 개념 boolean
  }

  const toggleAnswer5 = () => {
    setShowAnswer5(showAnswer5 => !showAnswer5); // on,off 개념 boolean
  }

  const toggleAnswer6 = () => {
    setShowAnswer6(showAnswer6 => !showAnswer6); // on,off 개념 boolean
  }

  const toggleAnswer7 = () => {
    setShowAnswer7(showAnswer7 => !showAnswer7); // on,off 개념 boolean
  }

  const toggleAnswer8 = () => {
    setShowAnswer8(showAnswer8 => !showAnswer8); // on,off 개념 boolean
  }

  const toggleAnswer9 = () => {
    setShowAnswer9(showAnswer9 => !showAnswer9); // on,off 개념 boolean
  }

  const toggleAnswer10 = () => {
    setShowAnswer10(showAnswer10 => !showAnswer10); // on,off 개념 boolean
  }

  const toggleAnswer11 = () => {
    setShowAnswer11(showAnswer11 => !showAnswer11); // on,off 개념 boolean
  }

  const toggleAnswer12 = () => {
    setShowAnswer12(showAnswer12 => !showAnswer12); // on,off 개념 boolean
  }

  const toggleAnswer13 = () => {
    setShowAnswer13(showAnswer13 => !showAnswer13); // on,off 개념 boolean
  }

  const toggleAnswer14 = () => {
    setShowAnswer14(showAnswer14 => !showAnswer14); // on,off 개념 boolean
  }



  return (
    <section id="faq">
      
      <div className="faq col-xl-8 col-sm-12">
        <h1>FAQ</h1>

        {/* <div className="faq-item" onClick={toggleAnswer1}>
          <div className="question">
            <p>
              Q.{isKorean? '민팅 날짜는 언제인가요?'
              : 'When can I mint chuchuCAT?'}
            </p>
            <span>{showAnswer1? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer1? null : {display:"none"}}>
              <p>• {isKorean ? '정확한 민팅 날짜와 시간이 곧 공개될 예정입니다.'
              : 'Official launching date will be announced soon!'}
              </p>
            </div>

            <hr style={{width: '100%', size:'2px'}} />
        </div>

        <div className="faq-item" onClick={toggleAnswer2}>
          <div className="question">
            <p>
              Q. {isKorean? '민팅은 어디서 가능한가요?'
              : 'How can I mint chuchuCAT?(ETH)'}
            </p>
            <span>{showAnswer2? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer2? null : {display:"none"}}>
              {isKorean? <p>• 민팅 웹사이트 주소가 트위터와 디스코드를 통해 공개될 예정입니다.</p>
              : <><p>• There are two ways to mint, each method will follow the logic as below!</p><p style={{marginLeft: '8%'}}>- Pre-sales: Free-to-mint. “Normal” grade will appear ONLY. </p><p style={{marginLeft: '8%'}}>-  Public sales: “Rare”, “Unique”, “Legend”, and “Handmade” grades will appear ONLY. Price to be announced soon.</p></>}
            </div>
            <hr style={{width: '100%', size:'2px'}} />
        </div>     

        <div className="faq-item" onClick={toggleAnswer3}>
          <div className="question">
            <p>
              Q. {isKorean? '민팅 가격은 얼마인가요?'
              : 'What are the benefits to collect chuchuCATs?'}
            </p>
            <span>{showAnswer3? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer3? null : {display:"none"}}>
              {isKorean? <p>• 곧 공개 예정입니다.</p>
              :
              <>
                <p>• All Close Your Eyes family will have the exclusive benefit to get whitelisted for the ‘new character’ NFT which we are already planning to drop in the middle of 1Q 2022.</p>
                <p>• Legend, and Handmade grade holders will receive special 3D PFP image airdrops from the artist.</p>
                <p>• Exciting benefits to be announced after minting is done.</p>
              </>}
            </div>
            <hr style={{width: '100%', size:'2px'}} />
        </div>

        <div className="faq-item" onClick={toggleAnswer4}>
          <div className="question">
            <p>
              Q. {isKorean? '채굴이나 게임 개발 예정이 있는 프로젝트인가요?' 
              : 'What are the plans for Close Your Eyes NFT project?'}
            </p>
            <span>{showAnswer4? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer4? null : {display:"none"}}>
              {isKorean? <p>• 저희는 채굴 모델 또는 게임 개발을 계획하고 있지 않습니다.</p>
              :
              <>
                <p>• We believe in the greatness of community power. Join to be one of our members to grow your chuchuCAT into a child and mature version. We will release V2 and V3 on 2Q 2022!</p>
                <p>• Constellation events will be announced.</p>
              </>}
            </div>
            <hr style={{width: '100%', size:'2px'}} />
        </div>      */}
        
        {isKorean? 
        <>
          <div className="faq-item" onClick={toggleAnswer1}>
            <div className="question">
              <p>Q. 민팅 날짜는 언제인가요?</p>
              <span>{showAnswer1? '-':'+'}</span>
            </div>
              <div className="answer" style={showAnswer1? null : {display:"none"}}>
                <p>• chuchuCAT 민팅은 2월 중 진행될 예정입니다.</p>
              </div>
              <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer2}>
          <div className="question">
            <p>Q. 민팅은 어디서 가능한가요?</p>
            <span>{showAnswer2? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer2? null : {display:"none"}}>
              <p>• 민팅 가능한 웹사이트 주소가 트위터와 디스코드 및 공식 채널을 통해 민팅 시작 '5분 전'에 공개될 예정입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer3}>
          <div className="question">
            <p>Q. 민팅 가격은 얼마인가요?</p>
            <span>{showAnswer3? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer3? null : {display:"none"}}>
              <p>• V.0의 민팅가는 1일차 1,000개 / 150Klay, 2일차 2,000개 / 250Klay, 3일차 5,000개 / 300Klay입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer4}>
          <div className="question">
            <p>Q. 채굴이나 게임 개발 예정이 있는 프로젝트인가요?</p>
            <span>{showAnswer4? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer4? null : {display:"none"}}>
              <p>• 샌드박스 랜드 구매 후 게임 개발 예정 중에 있습니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer5}>
            <div className="question">
              <p>Q. 어떤 글로벌 아티스트/브랜드와 협업이 진행 될 예정인가요?</p>
              <span>{showAnswer5? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer5? null : {display:"none"}}>
              <p>• 협업 오픈 전까지 기밀유지를 위해 정확한 답변을 드릴 수 없어 죄송합니다. 각 분야별 '핫' 아티스트분들과 콜라보를 진행할 예정이니 조금만 기다려 주세요!</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer6}>
            <div className="question">
              <p>Q. 10/20/30개 홀더들에게 지급되는 한정 NFT는 무엇인가요?</p>
              <span>{showAnswer6? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer6? null : {display:"none"}}>
              <p>• 홀더분들을 위해 특별히 제작한 NFT를 지정된 날짜에 에어드랍 할 예정입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer7}>
            <div className="question">
              <p>Q. V.1 츄츄 이더리움 민팅은 어떻게 진행되나요?</p>
              <span>{showAnswer7? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer7? null : {display:"none"}}>
              <p>• 이더리움을 기반으로 하여 무료/유료 두 가지 형식으로 민팅할 예정입니다. 자세한 계획은 공식채널을 통해 공지하겠습니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer8}>
            <div className="question">
              <p>Q. 15개 보유 홀더에게 주어지는 V.1 츄츄 민팅 화이트리스트는 무엇인가요?</p>
              <span>{showAnswer8? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer8? null : {display:"none"}}>
              <p>• 이더리움에서 유료민팅으로 진행되는 츄츄캣의 화이트리스트입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer9}>
            <div className="question">
              <p>Q. 어떤 굿즈가 제작되나요?</p>
              <span>{showAnswer9? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer9? null : {display:"none"}}>
              <p>• 깜짝 선물을 준비하고 있습니다. 아직은 비밀입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer10}>
            <div className="question">
              <p>Q. PFP 사진을 어떻게 받을 수 있나요?</p>
              <span>{showAnswer10? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer10? null : {display:"none"}}>
              <p>• 디스코드를 통해 정확한 날짜와 수량을 공지하겠습니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer11}>
            <div className="question">
              <p>Q. 온/오프라인 전시는 어떻게 진행될 예정인가요?</p>
              <span>{showAnswer11? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer11? null : {display:"none"}}>
              <p>• 홀더분들께 많은 혜택을 드릴 수 있는 전시를 기획 중입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer12}>
            <div className="question">
              <p>Q. Close your eyes는 어디까지 진행되는 시리즈인가요?</p>
              <span>{showAnswer12? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer12? null : {display:"none"}}>
              <p>• 성장형 NFT로서 아기-아이-성인으로 성장하도록 기획되어 있습니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer13}>
            <div className="question">
              <p>Q. 화이트리스트의 혜택은 V.2, V.3도 동일한가요?</p>
              <span>{showAnswer13? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer13? null : {display:"none"}}>
              <p>• 네, 맞습니다. 홀더분들께 제공됩니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer14}>
            <div className="question">
              <p>Q. V.0는 무엇인가요?</p>
              <span>{showAnswer14? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer14? null : {display:"none"}}>
              <p>• V.1의 프리퀄 개념으로서 클레이튼 한정으로 진행되는 프로젝트입니다.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>
        </>
        : 
        <>
          <div className="faq-item" onClick={toggleAnswer1}>
            <div className="question">
              <p>Q. When can I mint chuchuCAT V.0?</p>
              <span>{showAnswer1? '-':'+'}</span>
            </div>
              <div className="answer" style={showAnswer1? null : {display:"none"}}>
                <p>• You will mint chuchuCAT V.0 in February.</p>
              </div>
              <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer2}>
          <div className="question">
            <p>Q. Where can I mint chuchuCAT V.0?</p>
            <span>{showAnswer2? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer2? null : {display:"none"}}>
              <p>• Minting site will be announced through our official Twitter and Discord account.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer3}>
          <div className="question">
            <p>Q. What is the minting price for chuchuCAT V.0?</p>
            <span>{showAnswer3? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer3? null : {display:"none"}}>
              <p>• 5th - 1,000ea / 150 Klay, 6th - 2,000ea / 250 Klay, 7th - 5,000ea / 300Klay.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer4}>
          <div className="question">
            <p>Q. Are there any plans with metaverse game development?</p>
            <span>{showAnswer4? '-':'+'}</span>
          </div>
            <div className="answer" style={showAnswer4? null : {display:"none"}}>
              <p>• Metaverse game to be developed after we purchase the SANDBOX LAND.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer5}>
            <div className="question">
              <p>Q. Which global artist / brand will the project collaborate with?</p>
              <span>{showAnswer5? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer5? null : {display:"none"}}>
              <p>• We will reveal the line-up of top artist/brand that we will collaborate with. Stay focused!</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer6}>
            <div className="question">
              <p>Q. What is the 'special limited edition NFT' that 10+/20+/30+ holders will receive?</p>
              <span>{showAnswer6? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer6? null : {display:"none"}}>
              <p>• Team will airdrop the special NFT which is created for our holders exclusively.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer7}>
            <div className="question">
              <p>Q. How will V.1 chuchuCAT Ethereum minting be proceeded?</p>
              <span>{showAnswer7? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer7? null : {display:"none"}}>
              <p>• We will proceed with two different ways of minting in Ethereum. Stay tuned!</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer8}>
            <div className="question">
              <p>Q. What does it mean to be whitelisted for V.1 chuchuCAT with 15+ holders?</p>
              <span>{showAnswer8? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer8? null : {display:"none"}}>
              <p>• We will benefit our holders to achieve the chance of whitelist for the V.1 chuchuCAT minting on Ethereum.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer9}>
            <div className="question">
              <p>Q. What kind of official goods will be produced?</p>
              <span>{showAnswer9? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer9? null : {display:"none"}}>
              <p>• Special merchs coming soon for our holders, exclusive!</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer10}>
            <div className="question">
              <p>Q. How can I receive the PFP image?</p>
              <span>{showAnswer10? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer10? null : {display:"none"}}>
              <p>• Exact date will be announced through our official Discord channel.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer11}>
            <div className="question">
              <p>Q. How will on{'&'}off-line exhibition be proceeded?</p>
              <span>{showAnswer11? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer11? null : {display:"none"}}>
              <p>• Exhibition will be based on giving benefits to our holders.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer12}>
            <div className="question">
              <p>Q. What is the ultimate goal for 'Close Your Eyes' project?</p>
              <span>{showAnswer12? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer12? null : {display:"none"}}>
              <p>• ChuchuCAT universe has the story of evolving through 3 steps (baby - child - mature).</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer13}>
            <div className="question">
              <p>Q. Will the whitelist benefit be the same when V.2 and V.3 gets revealed?</p>
              <span>{showAnswer13? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer13? null : {display:"none"}}>
              <p>• Yes. All benefit will be provided to our holders.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>

          <div className="faq-item" onClick={toggleAnswer14}>
            <div className="question">
              <p>Q. What is V.0?</p>
              <span>{showAnswer14? '-':'+'}</span>
            </div>
            <div className="answer" style={showAnswer14? null : {display:"none"}}>
              <p>• V.0 is a limited edition of chuchuCAT which lives on KLAYTN chain.</p>
            </div>
            <hr style={{width: '100%', size:'2px'}} />
          </div>
        </>}


        
        <div id="contact">
          <a href="https://twitter.com/closeyoureyesV0" target="_blank" rel="noreferrer" ><Twitter className='contact-item' circle-fill="white" /></a>
          <a href="https://open.kakao.com/o/gtG51ZUd" target="_blank" rel="noreferrer" ><KakaoTalk className='contact-item' /></a>
          <a href="https://discord.gg/GqPun5497Z" target="_blank" rel="noreferrer" ><Discord className='contact-item'  fill="grey" /> </a>
          <a href="https://opensea.io/collection/cye-chuchucat-v0" target="_blank" rel="noreferrer" ><Opensea className='contact-item' /> </a>
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
      {/* <img style={{maxWidth: '100%', display:'block', margin: '0 auto', marginTop:'5vh', width:'min(100%, 960px)'}} src="footer.png" alt="footer"></img> */}
    </section>

  )
}

export default Faq