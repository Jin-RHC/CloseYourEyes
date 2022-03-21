import React from 'react';

// import Story from './components/Story';



function Project({isKorean}) {

  // const [position, setPosition] = useState(0);
  // function onScroll() {
  //   setPosition(window.scrollY);
  // }
  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, []);
  

  // console.log(position)
  return (
    <section id="project" className="introduction">
      {/* <h1 style={{
        transform: `translateX(${Math.min(0, -350 + (position/2))}px)`,
      }}> */}

      
      <h1>
        Project
      </h1>

      {/* <picture>
        <source media="(max-width: 575.98px)" srcSet="./showcase/1.webp" type="image/webp" />  
        <source media="(max-width: 575.98px)" srcSet="./showcase/1.jpg" />
        <source srcSet="./showcase/2.webp" type="image/webp" />  
        <img src="./showcase/2.jpg" alt="roadmap"></img>
      </picture> */}
      
      {/* <img className="mainimage" src="universe.jpeg" alt="cats"
      style={{
        opacity: (position - 500) / 200,
      }}></img> */}

      <div style={{position: 'relative', width:'min(1024px, 100vw)', maxWidth: '100%'}}>
        <picture>
          <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/png.png" />  
          <img style={{zIndex:1, width:'min(1024px, 100vw)', maxWidth: '100%'}} src="./roadmap/roadmap_text.png" alt="roadmap"></img>
        </picture>
        {/* <img style={{zIndex:1, width:'min(1024px, 100vw)', maxWidth: '100%'}} src="./roadmap/roadmap_text.png" alt="roadmap"></img> */}
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v0_mo.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v0_mo_0205.jpg" />  
          <source srcSet="./roadmap/desktop/project_v0_0205.webp" type='image/webp' alt="roadmap"></source>
          <img style={{zIndex:2, width:'min(1024px, 100vw)', maxWidth: '100%', position: 'absolute', display:'block', top: 0, left: 0}} src="./roadmap/desktop/project_v0_0205.jpg" alt="roadmap"></img>
        </picture>


        <div id="pointer-1-1" ></div>
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v1_1_mo_0205.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v1_1_mo_0205.jpg" />  
          <source srcSet="./roadmap/desktop/project_v1_1_0205.webp" type='image/webp' alt="roadmap"></source>
          <img style={{width:'min(1024px, 100vw)', maxWidth: '100%'}} id="roadmap-1" src="./roadmap/desktop/project_v1_1_0205.jpg" alt="roadmap"></img>
        </picture>

        <div id="pointer-2-1" ></div>
        <div id="pointer-2-2" ></div>
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_mo_0205_v1_2.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v1_2_mo_0205.jpg" />  
          <source srcSet="./roadmap/desktop/project_v1_2_0205.webp" type='image/webp' alt="roadmap"></source>
          <img style={{width:'min(1024px, 100vw)', maxWidth: '100%'}} id="roadmap-2" src="./roadmap/desktop/project_v1_2_0205.jpg" alt="roadmap"></img>
        </picture>

        <div id="pointer-3-1" ></div>
        <div id="pointer-3-2" ></div>
        <div id="pointer-3-3" ></div>
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_mo_0205_v2.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v2_mo_0205.jpg" />  
          <source srcSet="./roadmap/desktop/project_v2_0205.webp" type='image/webp' alt="roadmap"></source>
          <img style={{width:'min(1024px, 100vw)', maxWidth: '100%'}} id="roadmap-3" src="./roadmap/desktop/project_v2_0205.jpg" alt="roadmap"></img>
        </picture>

        <div id="pointer-4-1" style={{zIndex: 6}}></div>
        <div id="pointer-4-2" ></div>
        <picture>
          {/* <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_mo_0205_v3.webp" type='image/webp' />   */}
          <source media="(max-width: 575.98px)" srcSet="./roadmap/mobile/project_v3_mo_0205.jpg" />  
          <source srcSet="./roadmap/desktop/project_v3_0205.webp" type='image/webp' alt="roadmap"></source>
          <img style={{width:'min(1024px, 100vw)', maxWidth: '100%'}} id="roadmap-4" src="./roadmap/desktop/project_v3_0205.jpg" alt="roadmap"></img>
        </picture>
      </div>


      <h2>Universe</h2>
      <div>
        <p>
          {isKorean? 'Close Your Eyes는 우리와 함께 삶을 여행하는 존재에 대한 NFT 프로젝트입니다.' 
          : 'There are different kinds of people living in this world, and each of them travels through life in their own way. Close Your Eyes is a story about little beings who were always there to help all of us.'}
        </p>
        <p>
          {isKorean? '이 세상에는 다양한 사람들이 존재하고, 각자의 방법으로 그들의 삶을 여행하고 있습니다. Close Your Eyes는 우리와 함께 여행을 하고 있는 작은 존재들에 대한 이야기예요.' 
          : 'Remember when you woke up in the morning and noticed you had an exceptionally good dream, or found your wallet which you’ve lost before? Those moments were not just luck, but there was always someone who was always there to support you. It’s just that you never had a chance to see them because they only do their job when you close your eyes!'}
          
        </p>
        <p>
          {isKorean? '당신은 유난히 좋은 꿈을 꾼 날이나 우연히 잃어버렸던 소중한 물건을 찾는 행운을 겪었던 적이 있지 않나요? 그렇다면 당신이 눈을 감고 있는 그 순간에 그들이 도움을 준 것이라고 해요.'
          : 'Now we start our journey to find out who they are, the mysterious chuchuCAT.'}
        </p>
        {isKorean? 
        <p>
          그들은 내면의 능력뿐 아니라 외적으로도 성장하고 진화한다고 합니다.
          그들이 누구인지, 또 어떤 능력을 갖고 있는지 궁금하지 않나요? 
          그렇다면 이 이야기의 첫 번째 주인공인 chuchuCAT과 함께 여행에 동참해 보세요.
        </p>: null}
      </div>
    
    </section>

  )
}

export default Project