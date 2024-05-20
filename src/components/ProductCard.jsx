import { Card, Button, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/ProductCard.scss'

function ProductCard({ title, price, category, buy, thumbnail, id }) {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="product-card shadow-sm h-100">
                <Card.Img variant="top" src={thumbnail} alt="img-product" className="card-img-top w-25 h-25 m-auto"/>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">{title}</Card.Title>
                    <Card.Text className="text-center text-muted">{category}</Card.Text>
                    <Card.Text className="text-center product-price mb-4">{price}$</Card.Text>
                    <div className="mt-auto">
                        <Button variant="success" className="w-100 mb-2 btn-login bg-dark border-dark" as={Link} to={`/producto/${id}`}>
                            Ver Descripcion
                        </Button>
                        <Button variant="primary" className="w-100 pt-3 pb-3 bg-primary border-primary" onClick={buy}>
                            Agregar al Carrito
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ProductCard;

