import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            {/* <Navbar bg="primary" variant="dark" expand="lg">
                <Container className='container'>
                    <Link className='text-white no-underline' to="/">Navbar</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='text-white ms-2' to="/">Home</Link>
                        <Link className='text-white ms-2' to="statistics">Statistics</Link>
                        <Link className='text-white ms-2' to="blogs">Blogs</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
        </div>
    );
};

export default Header;