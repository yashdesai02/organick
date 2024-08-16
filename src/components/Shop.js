import React, { useEffect } from "react";
import Header from "./common-components/Header";
import { Modal, Card, Col, Row } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Allproducts } from "./Data";
import Subscribe from "./common-components/Subscribe";
import Footer from "./common-components/Footer";
import { Scroll } from "./common-components/Scroll";
import { Link, useNavigate } from "react-router-dom";

const Shop = () => {
  Scroll();
  const navigate = useNavigate();

  const shoping = (item) => {
    localStorage.setItem("shop", JSON.stringify(item));
    
    navigate("/shopsingle");
  };
  return (
    <>
      <div className="main shopMain">
        <div className="container">
          <div className="pageTitle">
            <h1>Shop</h1>
          </div>
        </div>
      </div>
      <div className="productsMain">
        <div className="container">
          <div className="products">
            <Row>
              {Allproducts.map((item, index) => (
                <Col md={3} className="cardbox">
                  <Card
                    onClick={() => shoping(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="cardimgmain">
                      <Card.Img
                        variant="top"
                        className="cardimg"
                        src={item.image}
                      />
                      <h6 className="category">{item.category}</h6>
                    </div>
                    <Card.Body>
                      <Link to={item.path}>
                        <Card.Title className="name">{item.name}</Card.Title>
                      </Link>
                      <hr className="productHr" />
                      <div className="priceAndRating d-flex justify-content-between align-items-center">
                        <div className="price">
                          <strike>${item.price.toFixed(2)}</strike>
                          <span>${item.discountPrice.toFixed(2)}</span>
                        </div>
                        <div className="rating">
                          <Rating
                            name="read-only"
                            value={item.rating}
                            readOnly
                          />
                        </div>
                      </div>
                      <Card.Text></Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default Shop;
