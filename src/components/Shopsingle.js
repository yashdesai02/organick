import React, { useEffect, useState } from "react";
import Header from "./common-components/Header";
import Pista from "./images/Pista.png";
import Rating from "@mui/material/Rating";
import { Button } from "./common-components/Button";
import { IoArrowForwardCircle } from "react-icons/io5";
import { Modal, Card, Col, Row } from "react-bootstrap";
import { relatedProducts } from "./Data";
import Subscribe from "./common-components/Subscribe";
import Footer from "./common-components/Footer";
import { Scroll } from "./common-components/Scroll";
import { Link, useNavigate } from "react-router-dom";

const Shopsingle = () => {
  const navigate = useNavigate();
  Scroll();
  const [quantity, setquantity] = useState(1);
  let a = JSON.parse(localStorage.getItem("shop"));

  const toCart = (quantity) => {
    let item = JSON.parse(localStorage.getItem("cart_item")) || [];
    let x = item.find((s) => s.a.name === a.name);
    if (!x) {
      item.push({ a, qty: parseInt(quantity) });
    } else {
      x.qty = parseInt(x.qty) + parseInt(quantity);
    }
    localStorage.setItem("cart_item", JSON.stringify(item));
    navigate("/cart");
  };

  const shoping = (item) => {
    localStorage.setItem("shop", JSON.stringify(item));
    navigate("/shopsingle");
    <Scroll />;
  };
  return (
    <>
      <div className="shopSingleMain">
        <div className="container">
          <div className="pageTitle">
            <h1>Shop Single</h1>
          </div>
        </div>
      </div>
      {/* shop item */}
      <div className="main shopItem">
        <div className="container">
          <div className="shopItemInner">
            <div className="shopItemImg">
              <img src={a.image} alt="" srcset="" />
              <span>{a.category}</span>
            </div>
            <div className="shopoItemInfo">
              <div className="itemInfoInner">
                <h4>{a.name}</h4>
                <Rating name="read-only" value={a.rating} readOnly />
                <h6>
                  <strike>${a.price.toFixed(2)}</strike> $
                  {a.discountPrice.toFixed(2)}
                </h6>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
                {/* <form className="Quantity"> */}
                <label htmlFor="">Quantity :</label>
                <input
                  type="number"
                  name=""
                  id=""
                  defaultValue={1}
                  value={quantity}
                  onChange={(e) => setquantity(e.target.value)}
                />
                {/* <Link to={"/cart"}> */}
                <div onClick={() => toCart(quantity)}>
                  <Button
                    value={"Add To Cart "}
                    fontWeight={"700"}
                    color={"#274C5B"}
                    font={"#fff"}
                    border={"transparent"}
                    icon={<IoArrowForwardCircle />}
                  />
                </div>
                {/* </Link> */}
                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* products information */}
      <div className="main productInfo">
        <div className="container">
          <div className="productInfoBtn">
            <Button
              value={"Product Description "}
              fontWeight={"700"}
              color={"#274C5B"}
              font={"#fff"}
              border={"transparent"}
            />
            <Button
              value={"Additional Info "}
              fontWeight={"700"}
              color={"#EFF6F1"}
              font={"#274C5B"}
              border={"transparent"}
            />
          </div>
          <p>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We have grown on the principles of health,
            ecology, and care. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars — such as glucose and fructose — make up 70%
            and 80% of the carbs in raw.
          </p>
        </div>
      </div>
      {/* related products */}
      <div className="main relatedProducts">
        <div className="container">
          <div className="title">
            <div className="innerTitle">
              <h4>Related Products</h4>
            </div>
          </div>
          <div className="products">
            <Row>
              {relatedProducts.map((item, index) => (
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
                      <Card.Title className="name">{item.name}</Card.Title>
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

export default Shopsingle;
