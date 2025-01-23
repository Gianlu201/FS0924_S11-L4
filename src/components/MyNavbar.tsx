import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' data-bs-theme='dark'>
      <Container fluid>
        <Link to='/' className='navbar-brand'>
          Spaceflight
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
