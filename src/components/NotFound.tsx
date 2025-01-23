import { Alert, Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className='pt-4'>
      <Alert variant='danger'>Page Not Found! :(</Alert>
    </Container>
  );
};

export default NotFound;
