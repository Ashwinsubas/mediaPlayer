import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router'
const Header = () => {
  return (
    <div>
      <Navbar style={{zIndex:1}} className="bg-primary sticky-top w-100">
        <Container>
          <Navbar.Brand className='text-light fw-bolder'>
          <Link style={{textDecoration:'none'}} to={'/'} ><i class="fa-solid fa-music"></i>{" "}
          Media Player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header