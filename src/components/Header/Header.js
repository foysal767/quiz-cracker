import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container className='container'>
                    <img style={{ width: 60, height: 60 }} className='' src="https://www.freeiconspng.com/thumbs/education-png/education-png-24.png" alt="" />
                    <Link style={{ textDecorationLine: 'none' }} className='text-white ms-2' to="/">TopQuizCoder</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link style={{ textDecorationLine: 'none' }} className='text-white ms-2' to="/">Topic</Link>
                        <Link style={{ textDecorationLine: 'none' }} className='text-white ms-2' to="statistics">Statistics</Link>
                        <Link style={{ textDecorationLine: 'none' }} className='text-white ms-2' to="blogs">Blogs</Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;