// import React from 'react'
import './Menu.css';
import data from '../../constants/data';
// import {Menu} from '../../constants/data';
import images from '../../constants/images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';
// import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Menu = () => {
  // console.log(data, typeof data)

  {/* Animate Links from right to current position */}

  useGSAP(() => {

    const tl = gsap.timeline();


    {/* Logo to scale up */}
    tl.fromTo('.logo',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 1.5, ease: 'power3.inOut' })
    .fromTo('.nav-links a',
    { opacity: 0, duration: 0.5, stagger: 0.2,},
    { opacity: 1, duration: 0.5, stagger: 0.2,ease: 'power3.inOut' })

  }, [])

  return (
    <Navbar collapseOnSelect expand="lg" bg='ligth' variant='ligth' >
  <Container>
    <Navbar.Brand href="#home" className='logo' >
      <div id="logo" style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <img src={images.logo} alt="logo" className='img-logo'  />
        <h1 className="h1">SM Digital</h1>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end' >
      <Nav className="nav-links">
        {data.Menu.map((item, index) => (
          <Nav.Link key={index} href={item.link} >{item.text}</Nav.Link>
        ))}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Menu;