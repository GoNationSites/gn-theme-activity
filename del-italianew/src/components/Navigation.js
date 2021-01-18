import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SocialIcons from '../components/social/SocialIcons'
export default function Navigation({
  hasAbout,
  hasMenu,
  hasEvents,
  hasGallery,
  hasContact,
  Logo,
  contact,
}) {
  const [navOpen, toggleNav] = useState(false)

  const navOptions = [hasAbout, hasMenu, hasEvents, hasGallery, hasContact]
  const pages = ['about', 'menu', 'events', 'gallery', 'contact']
  return (
    <Container>
      {/* <LogoContainer>
        <Link to='/'>
          <img
            class='brand-logo-fixed'
            src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${Logo}`}
          />
        </Link>
      </LogoContainer> */}
      <Hamburger
        onClick={() => {
          toggleNav(!navOpen)
        }}
        className={navOpen ? 'navopen' : ''}>
        <div className='top'></div>
        {!navOpen ? <div className='middle'></div> : ''}
        <div className='bottom'></div>
      </Hamburger>

      <NavMenu style={{ left: `${navOpen ? '0%' : '-150%'}` }}>
        <MenuLogo>
          <Link to='/'>
            <img
              class='brand-logo'
              src={`https://res.cloudinary.com/gonation/w_1000,c_fit,fl_lossy,f_auto,q_auto/${Logo}`}
            />
          </Link>
        </MenuLogo>

        {navOptions.map((option, index) => {
          if (option) {
            return (
              <li>
                <Link to={`/${pages[index]}`}>{pages[index]}</Link>
              </li>
            )
          } else {
            return ''
          }
        })}

        <li>
          <SocialIcons
            instagram={contact.instagram}
            facebook={contact.facebook}
            twitter={contact.twitter}
          />
        </li>
      </NavMenu>
      <NavBlock
        style={{ left: `${navOpen ? '0%' : '-500%'}` }}
        onClick={() => {
          toggleNav(!navOpen)
        }}
      />
    </Container>
  )
}

const Container = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  height: 75px;
  padding: 0.5rem;
  display: flex;
  transition: all ease-in-out 0.5s;
  align-items: center;

  .navopen {
    div {
      position: absolute;
      box-shadow: none;
      top: 50%;
      left: 50%;
    }
    .top {
      transform: translate(-50%, -50%) rotate(135deg);
    }
    .bottom {
      transform: translate(-50%, -50%) rotate(-135deg);
    }
  }
`
// const LogoContainer = styled.div`
//   position: absolute;
//   background-color: white;
//   top: 0;
//   left: 0;
//   a {
//     display: flex;
//     max-width: 170px;
//   }
//   img {
//     width: 100%;
//   }
// `

const Hamburger = styled.div`
  position: relative;
  display: flex;
  z-index: 2000;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  width: 35px;
  height: 25px;
  padding: 11px 5px;
  cursor: pointer;
  margin: 0 0.5rem 0 auto;
  div {
    align-self: flex-end;
    transition: all ease-in-out 0.3s;
    height: 4px;
    width: 100%;
    background: black;
    box-shadow: 2px 2px 1px rgb(0, 0, 0);
  }
`

const NavMenu = styled.ul`
  position: absolute;
  margin: 0;
  box-sizing: border-box;
  justify-content: space-between;
  height: 100vh;
  background: white;
  top: 0;
  z-index: 1000;
  width: 50%;
  min-width: 250px;
  left: -120%;
  transition: all ease-in-out 0.5s;
  padding: 0.5rem 0.5rem 3rem;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  li {
    margin-bottom: 0.75rem;
    z-index: 100;
    margin-left: 1rem;
    list-style-type: none;
    a {
      font-size: 1.25em;
      text-transform: uppercase;
      font-weight: 400;
      color: black;
      letter-spacing: 2px;
      text-decoration: none;
    }
  }

  @media (min-width: 767px) {
    padding: 2rem;
  }
`

const MenuLogo = styled.li`
  a {
  }
  img {
    max-width: 150px;
  }
`

const NavBlock = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  margin: 0;
  z-index: 500;
  transition: all ease-in-out 0.5s;
  top: 0;
  left: -200%;
  width: 100%;
  height: 100vh;
`
