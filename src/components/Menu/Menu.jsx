// import React from 'react'
import './Menu.css';
import data from '../../constants/data';
import images from '../../constants/images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg='ligth' variant='ligth' >
      <Container>
        <Navbar.Brand href="#home">
          <img src={images.logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end' >
          <Nav>
            {data.menu.map((item, index) => (
              <Nav.Link key={index} href={item.link} >{item.text}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Menu