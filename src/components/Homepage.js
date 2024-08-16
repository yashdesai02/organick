import React from "react";
import { Button } from "./common-components/Button";
import { IoArrowForwardCircle } from "react-icons/io5";
import flowers from "../components/images/Photo3.png";
import group1 from "../components/images/Group 1.svg";
import group2 from "../components/images/Group 2.svg";
import { products, offerProducts, demoNews } from "./Data";
import { Modal, Card, Col, Row } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import Customer1 from "./images/Customer1.png";
import Ecofriendly from "./images/Ecofriendly.png";
import Organicjuice from "./images/Organicjuice.png";
import Organicfood from "./images/Organicfood.png";
import Cookis from "./images/Cookis.png";
import Leaves from "./images/leaves.png";
import Tomatoes from "./images/Tomatoes.png";
import { FaUser } from "react-icons/fa";
import Subscribe from "./common-components/Subscribe";
import Footer from "./common-components/Footer";
import Header from "./common-components/Header";
import { json, Link, useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navigate = useNavigate();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const shoping = (item) => {
    localStorage.setItem("shop", JSON.stringify(item));
    navigate("/shopsingle");
  };

  return (
    <>
      <div className="home-main">
        <div className="container">
          <div className="explore">
            <div className="exploreBox">
              <h5>100% Natural Food</h5>
              <h1>
                Choose the best healthier way <br></br>of life
              </h1>
              <Button
                value={"Explore Now "}
                fontWeight={"700"}
                font={"#274C5B"}
                color={"#EFD372"}
                border={"transparent"}
                icon={<IoArrowForwardCircle />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="main" data-aos="fade-in">
        <div className="container">
          <div className="itemInfo">
            <div className="row justify-content-between">
              <a href="#" className="infoBox" id="infoBox1">
                <h6>Natural!!</h6>
                <h5>Get Garden Fresh Fruits</h5>
              </a>
              <a href="#" className="infoBox" id="infoBox2">
                <h6>Offer!!</h6>
                <h5>Get 10% off on Vegetables</h5>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* About */}

      <div className="main about">
        <div className="container">
          <div className="row align-items-center">
            <div className="photoBox">
              <img src={flowers} alt="" />
            </div>
            <div className="aboutFarmers">
              <h6>About Us</h6>
              <h5>We Believe in Working Accredited Farmers</h5>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="organicFood">
                <div className="iconBoxMain">
                  <div className="iconBox">
                    <img src={group1} alt="" />
                  </div>
                </div>
                <div className="organicFoodInfo">
                  <h6>Organic Foods Only</h6>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <div className="organicFood organicFood2">
                <div className="iconBoxMain">
                  <div className="iconBox">
                    <img src={group2} alt="" />
                  </div>
                </div>
                <div className="organicFoodInfo">
                  <h6>Quality Standards</h6>
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                </div>
              </div>
              <Link to={"/shop"}>
                <Button
                  value={"Shop Now "}
                  fontWeight={"700"}
                  color={"#274C5B"}
                  font={"#fff"}
                  border={"transparent"}
                  icon={<IoArrowForwardCircle />}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Our Products */}
      <div className="main ourProducts">
        <div className="container">
          <div className="title">
            <div className="innerTitle">
              <h6>Categories </h6>
              <h4>Our Products</h4>
            </div>
          </div>
          <div className="products">
            <Row>
              {products.map((item, index) => (
                <Col md={3} className="cardbox">
                  <div
                    onClick={() => shoping(item)}
                    style={{ cursor: "pointer" }}
                  >
                    <Card>
                      <div className="cardimgmain">
                        <Card.Img
                          variant="top"
                          className="cardimg"
                          src={item.image}
                        />
                        <h6 className="category">{item.category}</h6>
                      </div>
                      <Card.Body>
                        <p>
                          <Card.Title className="name">{item.name}</Card.Title>
                        </p>
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
                  </div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="shopnowBtn d-flex justify-content-center">
            <Link to={"/shop"}>
              <Button
                value={"Shop Now "}
                fontWeight={"700"}
                color={"#274C5B"}
                font={"#fff"}
                border={"transparent"}
                icon={<IoArrowForwardCircle />}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="main testimonial">
        <div className="container">
          <div className="innertestimonial">
            <div className="title">
              <div className="innerTitle">
                <h6>Testimonial</h6>
                <h4>What Our Customer Saying? </h4>
              </div>
            </div>
            <Slider {...settings}>
              <div className="cusBox">
                <div className="cusImg ">
                  <img src={Customer1} alt="" />
                </div>
                <div className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </div>
                <div className="cusReviews">
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
                <div className="cusName">
                  <h6>Sara Taylor</h6>
                  <p>Consumer</p>
                </div>
              </div>
              <div className="cusBox">
                <div className="cusImg ">
                  <img src={Customer1} alt="" />
                </div>
                <div className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </div>
                <div className="cusReviews">
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
                <div className="cusName">
                  <h6>Sara Taylor</h6>
                  <p>Consumer</p>
                </div>
              </div>
              <div className="cusBox">
                <div className="cusImg ">
                  <img src={Customer1} alt="" />
                </div>
                <div className="rating">
                  <Rating name="read-only" value={5} readOnly />
                </div>
                <div className="cusReviews">
                  <p>
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </p>
                </div>
                <div className="cusName">
                  <h6>Sara Taylor</h6>
                  <p>Consumer</p>
                </div>
              </div>
            </Slider>
            <div className="line">
              <hr />
            </div>
            <div className="testimonialInfo">
              <div className="testimonialBox">
                <div className="innerTestimonialBox">
                  <h4>100%</h4>
                  <h6>Organic</h6>
                </div>
              </div>
              <div className="testimonialBox">
                <div className="innerTestimonialBox">
                  <h4>285</h4>
                  <h6>Active Product</h6>
                </div>
              </div>
              <div className="testimonialBox">
                <div className="innerTestimonialBox">
                  <h4>350+</h4>
                  <h6>Organic Orchads</h6>
                </div>
              </div>
              <div className="testimonialBox">
                <div className="innerTestimonialBox">
                  <h4>25+</h4>
                  <h6>Years of Farming</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offers */}
      <div className="main offers">
        <div className="container">
          <div className="title d-flex justify-content-between">
            <div className="innerTitle">
              <h6>Offer</h6>
              <h4>We Offer Organic For You</h4>
            </div>
            <div className="offerbtn">
              <Link to={"/shop"}>
                <Button
                  value={"View All Product "}
                  fontWeight={"700"}
                  color={"#EFD372"}
                  font={"#274C5B"}
                  border={"transparent"}
                  icon={<IoArrowForwardCircle />}
                />
              </Link>
            </div>
          </div>
          <div className="products">
            <Row>
              {offerProducts.map((item, index) => (
                <Col md={3} className="cardbox">
                  <Card>
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

      {/* Eco Friendly */}
      <div className="main  d-flex">
        <div className="ecoFriendly">
          <img src={Ecofriendly} alt="" />
        </div>
        <div className="ecoFriendlyInfo">
          <div className="ecoInfoInner">
            <div className="title">
              <h6>Eco Friendly</h6>
              <h4>Econis is a Friendly Organic Store</h4>
            </div>
            <div className="ecoDetails">
              <h6>Start with Our Company First</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <h6>Learn How to Grow Yourself</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <h6>Farming Strategies of Today</h6>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Food Types */}
      <div className="main foodTypesMain">
        <Row className="justify-content-between">
          <div className="foodType">
            <img src={Organicjuice} alt="" />
            <div className="foodTypeBtn">
              <Button
                value={"Organic Juice "}
                fontWeight={"700"}
                color={"#fff"}
                font={"#274C5B"}
                border={"transparent"}
              />
            </div>
          </div>
          <div className="foodType">
            <img src={Organicfood} alt="" />
            <div className="foodTypeBtn">
              <Button
                value={"Organic Juice "}
                fontWeight={"700"}
                color={"#fff"}
                font={"#274C5B"}
                border={"transparent"}
              />
            </div>
          </div>
          <div className="foodType">
            <img src={Cookis} alt="" />
            <div className="foodTypeBtn">
              <Button
                value={"Organic Juice "}
                fontWeight={"700"}
                color={"#fff"}
                font={"#274C5B"}
                border={"transparent"}
              />
            </div>
          </div>
        </Row>
      </div>

      {/* Weekly Contant */}
      <div className="main weeklyContant">
        <div className="container">
          <div className="title d-flex align-items-end justify-content-between">
            <div className="innertitle">
              <h6>News</h6>
              <h4>Discover weekly content about organic food, & more</h4>
            </div>
            <div className="moreNews">
              <Link to={"/news"}>
                <Button
                  value={"More News "}
                  fontWeight={"700"}
                  color={"#fff"}
                  font={"#274C5B"}
                  border={"2px solid #274C5B"}
                  icon={<IoArrowForwardCircle />}
                />
              </Link>
            </div>
          </div>
          <div className="newsUserMain">
            {demoNews.map((item, index) => (
              <div className="newsBox">
                <img src={item.image} alt="" />
                <span className="date">
                  {item.date} <br />
                  {item.month}
                </span>
                <div className="NewsBoxMain">
                  <div className="newsWritter d-flex align-items-center">
                    <FaUser />
                    <span>{item.user}</span>
                  </div>
                  <div className="newsTitle">
                    <h6>{item.title}</h6>
                    <p>{item.news}</p>
                    <Button
                      value={"Read More "}
                      fontWeight={"700"}
                      color={"#EFD372"}
                      font={"#274C5B"}
                      border={"transparent"}
                      icon={<IoArrowForwardCircle />}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};
