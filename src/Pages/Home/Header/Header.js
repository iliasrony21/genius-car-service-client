import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'
import logo from '../../../images/logo.png'
import './Header.css'
import { signOut } from 'firebase/auth'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignout = () => {
    signOut(auth)
  }
  return (
    <div className='sticky-top'>
      <Navbar collapseOnSelect expand='lg' bg='primary' variant='dark'>
        <Container>
          <Navbar.Brand as={Link} className='logo' to='/'>
            <img src={logo} alt='' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/home'>
                Home
              </Nav.Link>
              <Nav.Link href='home#services'>Services</Nav.Link>
              <Nav.Link href='home#experts'>Experts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to='about'>
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <>
                  <Nav.Link as={Link} to='addservice'>
                    Add Services
                  </Nav.Link>
                  <Nav.Link as={Link} to='manage'>
                    Manage
                  </Nav.Link>
                  <Nav.Link as={Link} to='orders'>
                    Orders
                  </Nav.Link>
                </>
              )}
              {user ? (
                <button
                  className='btn btn-link text-white text-decoration-none'
                  onClick={handleSignout}
                >
                  Sign Out
                </button>
              ) : (
                <Nav.Link as={Link} to='login'>
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
