import React from 'react';



function Team ({isKorean}) {
  

  return (
    <section id="team" className='introduction'>
      <h1>Team</h1>
      <div id="team_intro">
        <div>
          <div id="team_intro1">
            <picture>
              <source media="(max-width: 575.98px)" srcSet="dummy.png" />
              <source srcSet="team/team_designer_new.webp" type="image/webp" />
              <img className="over-tablet" src="team/team_designer_new.png" alt="designer illustrate" />
            </picture>
            <picture>
              <source media="(max-width: 575.98px)" srcSet="dummy.png" />
              <source srcSet="team/team_developer_new.webp" type="image/webp" />
              <img className="over-tablet" src="team/team_developer_new.png" alt="developer illustrate" />
            </picture>
          </div>
        </div>
        <div id="team_intro2">
          <picture>
            <source media="(min-width: 575.98px)" srcSet="dummy.png" />
            {/* <source srcSet="team/team_mo_new.webp" type="image/webp" /> */}
            <img className="mobile" src="team/team_mo_new.png" alt="teamimage" />
          </picture>
          <div>
            <p><span className='gteam'>Art Director</span>&nbsp; &nbsp;<span className='yteam'>205</span></p>
            <p style={{marginBottom:'2rem'}}>
              {isKorean? 
              <>
                "이공오" 아트디렉터는 아트토이 그룹 "COOLABO"의 대표. <br /> 현재 많은 글로벌 브랜드와 협업 중이고, 일러스트레이터를 겸하며 새로운 IP 생산에 매진 중.
              </>
              : 
              <>
                Art director "205", also known as the CEO of art toy brand "COOLABO". <br /> He has collaborated with numerous major global brands, and currently focusing on developing new IPs from his creative mind.
              </>}
              <br/> 
              {isKorean? '대표작으로는 astroCAT, rabbiTT, ohFACE, spaceHOOD, chuchuCAT 등이 있다.' : 'Notable characters that he created are as follows: astroCAT, rabiTT, ohFACE, spaceHOOD, chuchuCAT and many more.'}
            </p>
          </div>
          <picture>
            <source media="(max-width: 575.98px)" srcSet="dummy.png" />
            <source srcSet="team/team_others_new.webp" type="image/webp" />
            <img className="over-tablet" src="team/team_others_new.png" alt="other team illustrate" />
          </picture>
          <div>
            <p><span className='gteam'>Developer</span>&nbsp; &nbsp;<span className='yteam'>ELIXIR</span></p>
            <p style={{marginBottom:'2rem'}}>
              {isKorean? '만렙 개발자. 팝캣티움이라는 귀여운 고양이 밈 블록체인을 개발했다. 최근까지 CxNxD(클네다), Mimon(미몽), Paper Children(기부 NFT 프로젝트) 등 NFT 프로젝트를 성공적으로 개발했다.'
              : 'Full-stack developer. He developed a cute cat meme coin called ‘POPCATEUM’. He also contributed to multiple successful NFT projects as the head developer, such as ‘CxNxD(Clones Never Die)’, Mimon and Paper Children(donation NFT project).'}
            </p>
          </div>
          <div>
            <p><span style={{display:"inline-block"}} className='gteam'>Project<br style={{display:'inline-block'}}/>Management</span>&nbsp; &nbsp;<span className='yteam'>CAMP JACKSON</span></p>
            <p>
              {isKorean? 'NFT 크리에이티브 그룹이자, 진성 홀더들로 구성된 팀. 투자, 마케팅, 프로젝트 운영에 노하우가 축적된 사람들이다.'
              : 'Creative group & NFT enthusiasts. Experts in investing and business managing.'}
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Team








// function Team ({position}) {
  

//   return (
//     <section id="team">
//       <div className='introduction'>
//         <h1>Team</h1>
//         <h3>Designer</h3>
//         <div className="designer">
//           <p style={{fontFamily:'Vantely', fontStyle: 'bold', textAlign:'right'}}>205</p>
//           <div>
//             <p>
//               Collaborated as design director with numerous major brands like Samsung Card, Pop Mart, Kellogg, tencent and more. 
//               Also created characters such as AstroCAT, rabbiTT, ohFACE, chuchuCAT, etc.
//             </p>
//           </div>
//           <img src="designer.jpg" alt="designer intro"></img>
//         </div>
//         <h3>Developer</h3>
//         <div className="designer">
//           <p style={{fontFamily:'Vantely', fontStyle: 'bold', textAlign:'right'}}>ELIXIR</p>
//           <p>Full-stack developer, successfully developed multiple blockchains, and a warm hearted cat lover.</p>
//         </div>
//         <h3>Project Management</h3>
//         <div className="designer">
//           <p style={{fontFamily:'Vantely', fontStyle: 'bold', textAlign:'right'}}>CAMP JACKSON</p>
//           <p>Creative group {'&'} NFT enthusiasts. Experts in investing and business managing.</p>
//         </div>
//         <img src="team.png" alt="team sketch"/>
//       </div>

//     </section>

//   )
// }

// export default Team