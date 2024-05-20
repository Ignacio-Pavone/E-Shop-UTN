import { Container } from "react-bootstrap";

function Footer() {
  return (
    <div className="margen position-fixed bottom-0 w-100 bg-dark">
      <footer className="bg-light py-3 font-weight-bold fs-2 bg-dark">
        <Container className="footer-custom d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 text-white">&copy; {new Date().getFullYear()} Ignacio Pavone - Pablo Cugini</p>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
