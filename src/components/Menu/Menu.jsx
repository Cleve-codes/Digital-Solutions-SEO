// import React from 'react'
import './Menu.css';
import data from '../../constants/data';
// import {Menu} from '../../constants/data';
import images from '../../constants/images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.css';

const Menu = () => {
  // console.log(data, typeof data)
  return (
    <Navbar collapseOnSelect expand="lg" bg='ligth' variant='ligth' >
  <Container>
    <Navbar.Brand href="#home" className='logo' >
      <div style={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
        <img src={images.logo} alt="logo" className='img-logo'  />
        <h1 className="h1">SM Digital</h1>
      </div>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end' >
      <Nav>
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