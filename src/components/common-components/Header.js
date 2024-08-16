import React, { useContext, useEffect, useState } from "react";
import logo from "../images/Logo.svg";
import { IoSearch } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import CreateContext from "../context/CreateContext";
import { Allproducts } from "../Data";
import { Modal, Card, Col, Row } from "react-bootstrap";
import Rating from "@mui/material/Rating";

const Header = () => {
  const navigate = useNavigate();
  const [searchProduct, setsearchProduct] = useState("");
  console.log(searchProduct, "=====>searchProduct");

  const [filteredItem, setfilteredItem] = useState([]);

  const handleSearch = (e) => {
    setsearchProduct(e.target.value);
  };
  useEffect(() => {
    if (searchProduct === "") {
      setfilteredItem([]);
    } else {
      const searhItem = Allproducts.filter((item) =>
        item.name.toLowerCase().includes(searchProduct.toLowerCase())
      );
      setfilteredItem(searhItem);
    }
  }, [searchProduct]);

  const shoping = (item) => {
    localStorage.setItem("shop", JSON.stringify(item));

    navigate("/shopsingle");
    setfilteredItem([]);
  };

  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Pages",
      submenu: [
        {
          name: "Portfolio",
          path: "/portfolio",
        },
        {
          name: "Our Team",
          path: "/ourteam",
        },
        {
          name: "Service Single",
          path: "/servicesingle",
        },
      ],
    },
    { name: "Shop", path: "/shop" },
    { name: "Service", path: "/service" },
    { name: "News", path: "/news" },
  ];

  const setUser = useContext(CreateContext);

  return (
    <>
      <div className="container">
        <div className="headerMain">
          <div className="innerHeader d-flex justify-content-between">
            <div className="navbar d-flex justify-content-between">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <div className="navigation">
                <ul className="menus d-flex">
                  {menu.map((item, i) => (
                    <>
                      <li key={i}>
                        <Link
                          to={item.path}
                          className="d-flex align-items-center"
                        >
                          {item.name} {item.submenu && <FaAngleDown />}{" "}
                        </Link>
                        <ul className="subMenu">
                          {item.submenu?.map((submenuList) => (
                            <li>
                              <Link to={submenuList.path}>
                                {submenuList.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </>
                  ))}
                </ul>
              </div>
            </div>
            <div className="searchBar d-flex justify-content-between">
              <div className="search">
                <input
                  type="text"
                  value={searchProduct}
                  onChange={(e) => handleSearch(e)}
                />
                <span className="searchBox d-flex justify-content-center align-items-center">
                  <button>
                    <IoSearch />
                  </button>
                </span>
              </div>
              <div className="cart-main d-flex justify-content-between align-items-center">
                <div className="cart-box">
                  <span className="cart d-flex justify-content-center align-items-center">
                    <Link to={"/cart"}>
                      <button>
                        <IoCartOutline />
                      </button>
                    </Link>
                  </span>
                </div>
                <div className="cart-info">
                  <h6>Cart({setUser.user})</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="searchedPro">
        <div className="container">
          <div className="row">
            {filteredItem.length > 0 &&
              filteredItem.map((item) => (
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
