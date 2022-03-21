import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = ({position, isKorean, changeLanguage}) => {
  function scrollToTop () {
    scroll.scrollToTop({smooth:true});
  };

  return (
    <header id="navbox" style={{backgroundColor:`rgba(72,77,109, ${position})`}}>
      <nav id="navbar">
        <div onClick={scrollToTop} className="navbar__logo">
          <img src="logo_landscape.png" alt="logo" />
        </div>
        <input type="checkbox" id="menuicon" />
        <label htmlFor="menuicon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="sidebar">
          <ul className="navbar__menu">
            <li>
              <Link
                className="blinking2"
                activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="blinking"
                activeClass="active"
                to="chuchucat"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                chuchuCAT
              </Link>
            </li>
            {/* <li>
              <Link
                className="blinking2"
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Roadmap
              </Link>
            </li> */}
            <li>
              <Link
                className="blinking2"
                activeClass="active"
                to="roadmap"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Roadmap
              </Link>
            </li>

            <li>
              <Link
                className="blinking"
                activeClass="active"
                to="team"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                Team
              </Link>
            </li>
            <li>
              <Link
                className="blinking2"
                activeClass="active"
                to="faq"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
              >
                FAQ
              </Link>
            </li>

            <li className="dropdown dropbtn" style={{width:'5rem'}}>Social▾
              <div className="dropdown-content">
                <a href="https://twitter.com/closeyoureyesV0" target="_blank" rel="noreferrer" ><p style={{cursor: 'pointer'}}>Twitter</p></a>
                <a href="https://open.kakao.com/o/gtG51ZUd" target="_blank" rel="noreferrer" ><p style={{cursor: 'pointer'}}>KakaoTalk</p></a>
                <a href="https://discord.gg/GqPun5497Z" target="_blank" rel="noreferrer" ><p style={{cursor: 'pointer'}}>Discord</p></a>
              </div>
            </li>

            {/* <li className="dropdown dropbtn" style={{color:'rgb(149, 149, 149)', width:'3rem'}}><a style={{textDecoration:'none'}}>{ isKorean ? ' kr▾' : 'eng▾' }</a> */}
            <li className="dropdown dropbtn" style={{width:'3rem'}}>{ isKorean ? ' KR▾' : 'EN▾' }
              {/* <button className=""></button> */}
              <div className="dropdown-content">
                <p style={{cursor: 'pointer'}} onClick={changeLanguage}>{ isKorean ? 'EN' : ' KR' }</p>
                {/* <p onClick={() => setIsKorean(true)} style={ isKorean ? {color : '#5EBF8F'} : null }>kr</p> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    


    // <header>
    //   <div className="navbar">
    //     <h1>
    //       <a href="#" onClick={scrollToTop} style={style}>ChuChuCat</a>
    //     </h1>
    //     <nav className="nav">
    //         <ul className="nav-items">
    //           <li className="nav-item">
    //             <Link
    //               activeClass="active"
    //               to="story"
    //               spy={true}
    //               smooth={true}
    //               offset={-70}
    //               duration={500}
    //             >
    //               Story
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               activeClass="active"
    //               to="roadmap"
    //               spy={true}
    //               smooth={true}
    //               offset={-70}
    //               duration={500}
    //             >
    //               Roadmap
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               activeClass="active"
    //               to="team"
    //               spy={true}
    //               smooth={true}
    //               offset={-70}
    //               duration={500}
    //             >
    //               Team
    //             </Link>
    //           </li>
    //           <li className="nav-item">
    //             <Link
    //               activeClass="active"
    //               to="faq"
    //               spy={true}
    //               smooth={true}
    //               offset={-70}
    //               duration={500}
    //             >
    //               FAQ
    //             </Link>
    //           </li>
    //         </ul>
    //     </nav>
    //   </div>
    // </header>
  )
}

export default Navbar