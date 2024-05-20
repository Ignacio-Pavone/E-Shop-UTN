import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById, getDescription } from "../Services/ProductServices";
import { Card, Button, Col} from "react-bootstrap";
import "../styles/General.css";

function ProductDetails() {
  const { productoId } = useParams();
  const [producto, setProducto] = useState({});
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const request = async () => {
      try {
        const responseProducto = await getById(productoId);
        setProducto(responseProducto);
        const responseDescription = await getDescription(productoId);
        setDescription(responseDescription);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, [productoId]);

  const buy = () => {
    alert("Producto agregado al carrito")
  };

  if (loading) {
    return <div>Cargando ...</div>;
  }
  return (
    <Col className="my-3">
      <Card
        className="product-card-details shadow-lg mx-auto"
      >
        <Card.Img
          variant="top"
          src={producto.thumbnail}
          alt={producto.title}
        />
        <Card.Body>
          <Card.Title className="text-center"><h3>{producto.title}</h3></Card.Title>
          <Card.Text>
            <h3 className="product-price text-center font-weight-bold">$ {producto.price}</h3>
            <p className="product-card-details-text">{description.plain_text}</p>
            <p className="text-center">{producto.warranty}</p>
          </Card.Text>
          <div className="text-center mb-2">
          <Button variant="success" className="mt-2 mb-4 btn-login bg-dark border-dark" onClick={buy}>
            Agregar al carrito
          </Button>
          </div>

        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductDetails;
