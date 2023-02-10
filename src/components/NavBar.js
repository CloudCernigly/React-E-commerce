import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const NavBar = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Button variant="outline-success">Search</Button>
          </Container>
        </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
