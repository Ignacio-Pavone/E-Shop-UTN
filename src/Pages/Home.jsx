import React, { useState, useEffect } from "react";
import { Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from "../components/ProductCard";
import { getAll } from "../Services/ProductServices";
import classes from '../styles/home.module.css'

const Home = () => {
  const numProductosAMostrar = 5;
  const [compra, setCompra] = useState(false);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await getAll();
        setProductos(response?.results);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    request();
  }, []);

  const handleComprar = () => {
    setCompra(true);
  };

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (compra) {
    return <div>Gracias por su compra!</div>;
  } else {

    return (
      <div className="container">
        <div id="carouselExample" class="carousel slide mb-5 w-50 m-auto">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.muycomputer.com/wp-content/uploads/2022/04/iPhone-14-Pro-portada.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
            </div>
            <div class="carousel-item">
              {/* <img src="..." class="d-block w-100" alt="..."> */}
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div>
          <Row xs={1} sm={2} md={3} lg={4} xl={5} className="card-product-custom text-center mx-auto justify-content-center">
            {productos.slice(0, numProductosAMostrar).map((producto) => (
              <Col key={producto.id} className="mb-4">
                <ProductCard {...producto} buy={handleComprar} />
              </Col>
            ))}
          </Row>
          <div className={`${classes.btnContainer} text-center`}>
            <button className={`${classes.btnHome} bg-dark`}>
              <Link to='./ProductList'>Ver Todos los productos</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default Home;
