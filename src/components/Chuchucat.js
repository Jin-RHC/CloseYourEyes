import React, {useState} from 'react';
import Collections from './Collections';
import Modal from './Modal';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Zodiac from './Zodiac'
// import Rarity from './Rarity';
// import Slime from './Slime'


const zodiac = ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpius', 'Sagittarius', 'Capricornus',	'Aquarius', 'Pisces']


function Chuchucat ({isKorean}) {
  const range = (start, end) => {
    const length = end - start;
    return Array.from({ length }, (_, i) => start + i);
  }
  
  const [showModal, setShowModal]= useState(false)
  const [targetModal, setTargetModal]= useState(1)


  return (
    // <section id="chuchucat" style={{zIndex:-10, height: '100vh', backgroundPositionY:position/ 2 - 2900}}>
    <section id="chuchucat">
      <div className="introduction">
        <h1 id="chuchu-title">chuchuCAT Story</h1>

        <div>
          <p>
            {isKorean? "chuchuCAT은 별자리를 길잡이 삼아 사람들의 꿈을 여행한다고 해요. 그들은 ‘꿈의 요정’이며, 나쁜 꿈을 꾸는 사람들을 도와주고 보호하는 귀여운 꿈의 보안관이라고 불린답니다." 
            : 'ChuchuCAT, also known as ‘fairy of dreams’, is a human-cat who navigates through people’s dreams by the unique power of constellation she has inside. Her mission is to help people who are having a bad dream, a nightmare. Once they find someone struggling, chuchuCAT immediately travels into their dream and then pulls out from dreamland. She then captures all the negative elements, and puts them into her luggage. Finally, she replaces it with the happiest dream by using the heart she’s holding in her hands. And the job’s done!'}
          </p>
          <p>
            {isKorean? '우리가 악몽을 꿀 때 chuchuCAT은 나쁜 꿈을 꺼내 항상 가지고 다니는 캐리어에 가두고 손에 든 하트로 좋은 꿈을 꾸도록 우리 곁을 지켜준다고 해요. 꿈을 꾸는 사람이 있다면 어디든 존재하며 버스나 기차, 비행기에서도 종종 발견이 되곤 한답니다.' 
            : 'ChuchuCATs can easily be found next to someone who’s asleep or dozed off on a bus, a train, or even on a plane.'}
          </p>
          <p>
            {isKorean? 'chuchuCAT은 아기(Baby), 아이(Child), 어른(Adult) 3단계에 걸쳐 성장한다고 합니다.' 
            : 'ChuchuCATs grow (evolve) into three steps: Baby, child, and mature.'}
          </p>    
        </div>

        <h2 id="v0-h2">V.0 : chuchuCAT (Klaytn Limited)</h2>
        <div id="showcase">
          {range(1,7).map((modelNum) => 
            (<Collections setTargetModal={setTargetModal} setShowModal={setShowModal} modelNum={modelNum} key={modelNum} />
          ))}
        </div>

        <h2>V.1 : chuchuCAT ETH</h2>
        <div id="showcase">
          {range(7,13).map((modelNum) => 
            (<Collections setTargetModal={setTargetModal} setShowModal={setShowModal} modelNum={modelNum} key={modelNum} />
          ))}
        </div>

          <Modal showModal={showModal} changeShow={setShowModal} setTargetModal={setTargetModal}
          targetModal={targetModal} />
      </div>

      
      

      <div className="introduction">
        <h2>S.L.I.M.E.</h2>


        <div id="slime">
          {/* <div className='slimeitem'>
            <img src="slime3.jpg" alt="slime" />
            <p>
              S.L.I.M.E.은 chuchuCAT의 분신이자 가장 친한 친구다. ‘Signal Living In My Emotions’의 약자로, chuchuCAT의 기분이나 감정을 대신 느끼고 표현하며 그들을 지켜주는 존재다. chuchuCAT이 사람들의 꿈을 가져오는 동안 모양을 변형하여 외부의 위협으로부터 그들을 지켜주는 보호막 역할을 한다.
              chuchuCAT이 성장하는 과정에서 그 속성이 점차 발현된다.
            </p>
          </div> */}
          <div className='slimeitem'>
            <picture>
              <source srcSet="handmade.webp" type="image/webp" />
              <img src="handmade.png" alt="slime" />
            </picture>
            {/* <h4 className="slime-name">
              HAND MADE
            </h4> */}
            {/* <h2>S</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="legendary.webp" type="image/webp" />
              <img src="legendary.png" alt="slime" />
            </picture>
            {/* <h4 className="slime-name">
              LEGEND
            </h4> */}
            {/* <h2>L</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="unique.webp" type="image/webp" />
              <img src="unique.png" alt="slime" />
            </picture>
            {/* <h4 className="slime-name">
              UNIQUE
            </h4> */}
            {/* <h2>I</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="rare.webp" type="image/webp" />
              <img src="rare.png" alt="slime" />
            </picture>
            {/* <h4 className="slime-name">
              RARE
            </h4> */}
            {/* <h2>M</h2> */}
          </div>

          <div className='slimeitem'>
            <picture>
              <source srcSet="normal.webp" type="image/webp" />
              <img src="normal.png" alt="slime" />
            </picture>
            {/* <h4 className="slime-name">
              NORMAL
            </h4> */}
            {/* <h2>E</h2> */}
          </div>
        </div>

        {isKorean?
        <>
          <p>
            우리들이 행복한 꿈을 꿀 수 있도록 chuchuCAT이 돕는 동안, 그들을 지켜주는 수호 생물인 S.L.I.M.E이 함께합니다.
          </p>
          <p>
            S.L.I.M.E은 chuchuCAT의 기분을 대신 표현하는 자아이며, chuchuCAT이 나쁜 꿈을 꺼내오는 동안 주변의 위험으로부터 chuchuCAT을 보호한다고 해요.
          </p>
          <p>
            S.L.I.M.E은 자신이 원하는 모든 모양으로 몸의 형태를 변형시킬 수 있으며, 24시간 chuchuCAT과 함께 지내고 아직은 작은 아기인 chuchuCAT을 보호하는 역할도 한답니다.
          </p>
        </>
        : <p>S.L.I.M.E. is chuchuCAT’s alter ego, and also her best friend. The name stands for ‘Signal Living In My Emotions’, which expresses all their feelings for her. They also protect her from danger by turning into a shield while she’s concentrating to capture bad dreams. S.L.I.M.E.s can transform their body into any kind of form they want.</p>}
        
        

      </div>

      {/* <Slime /> */}

      <div className="introduction2">
        {/* <div style={{width: 'inherit', display:'flex', justifyContent:'space-between', alignItems: 'start', flexWrap: 'wrap'}}>
          <h2 style={{fontSize: "2rem", textAlign: 'start'}}>Constellations <span style={{fontSize:'1.5rem', fontFamily: 'Noto Serif', fontStyle:'italic'}}>Hidden properties</span></h2>
          <div style={{float:'left', width: 'min(250px, 30vw)', margin: '0 auto'}}>
          </div>

        </div> */}



        <div id="constellation">
          <div>
            {/* <h2 style={{fontSize: "2rem", textAlign: 'start'}}>Constellations <span style={{fontSize:'1.5rem', fontFamily: 'Noto Serif', fontStyle:'italic'}}>Hidden properties</span></h2> */}
            <h2>Constellations <span>Hidden properties</span></h2>
            <div className="m-text">
              <p>
                {isKorean? '모든 chuchuCAT은 각자의 몸속에 고유의 별자리 속성을 가지고 태어난다고 해요.' 
                : 'Each chuchuCAT has her own constellation star power inside her body when they are born.'}
              </p>
              <p>
                {isKorean ? '별자리는 총 12가지이며 134개의 별로 구성되어 있고, 각각 다른 종류의 별로 구성되어 있답니다. chuchuCAT이 아이와 성인으로 성장하는 동안 별자리의 속성과 능력이 점차 발현된다고 합니다.'
                : 'Total 12 kinds of constellations, 134 stars form the entire Close Your Eyes universe. Each constellation type contains different stars. These properties will continue to have critical meanings when chuchuCAT grows V2 (child) and V3 (mature).'}
              </p>
            </div>
          </div>
          <div style={{width:'100%'}}>
            <Carousel swipeable={false} animationHandler={'fade'} showArrows={true} showThumbs={false} showIndicators={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
              {zodiac.map((name, index) => 
                  (<Zodiac name={name} key={index} />
                ))}
            </Carousel>
            <div className="sm-text">
              <p>
                {isKorean? '모든 chuchuCAT은 각자 몸 속에 고유의 별자리 속성을 가지고 태어난다.' 
                : 'Each chuchuCAT has her own constellation star power inside her body when they are born.'}
              </p>
              <p>
                {isKorean ? '별자리는 총 12가지이며 134개의 별로 구성되어있으며, 각각 다른 종류의 별들로 구성되어있다. chuchuCAT이 아이와 성인으로 성장하는동안, 별자리의 속성과 능력이 점차 발현된다.'
                : 'Total 12 kinds of constellations, 134 stars form the entire Close Your Eyes universe. Each constellation type contains different stars. These properties will continue to have critical meanings when chuchuCAT grows V2 (child) and V3 (mature).'}
              </p>
            </div>
          </div>


        </div>
      </div>
    
    {/* <Rarity /> 언젠간 돌아온다,,, */}

    </section>

  )
}

export default Chuchucat