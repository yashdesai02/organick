import React, { useContext, useEffect, useState } from "react";
import Header from "./common-components/Header";
import Rating from "@mui/material/Rating";
import { Button } from "./common-components/Button";
import { Scroll } from "./common-components/Scroll";
import CreateContext from "./context/CreateContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  Scroll();
  const [filterProduct, setfilterProduct] = useState([]);

  const { setUser } = useContext(CreateContext);

  useEffect(() => {
    let newProduct = JSON.parse(localStorage.getItem("cart_item"));
    if (newProduct) {
      setfilterProduct(newProduct);
    }
    setUser(newProduct ? newProduct.length : 0);
  }, [setUser]);

  const removeItem = (id) => {
    const newItems = filterProduct.filter((item) => item.a.id !== id);
    setfilterProduct(newItems);
    localStorage.setItem("cart_item", JSON.stringify(newItems));
    setUser(newItems.length);
  };

  return (
    <>
      <div className="main cartMain">
        <div className="container">
          <div className="pageTitle">
            <h1>Cart</h1>
          </div>
        </div>
      </div>
      <div className="main shopItem">
        <div className="container">
          {filterProduct.length > 0 ? (
            filterProduct.map((item) => (
              <div className="shopItemInner" key={item.a.id}>
                <div className="shopItemImg">
                  <img src={item.a?.image} alt="" />
                  <span>{item.a?.category}</span>
                </div>
                <div className="shopoItemInfo shopoItemInfoCart">
                  <div className="itemInfoInner">
                    <h4>{item.a?.name}</h4>
                    <Rating name="read-only" value={item.a?.rating} readOnly />
                    <h6 className="cartPrice">
                      <span>Price: </span> ${item.a?.discountPrice.toFixed(2)}
                    </h6>
                    <form className="Quantity">
                      <label htmlFor="">Quantity :</label>
                      <span>{item.qty}</span>
                    </form>
                    <div className="totalMain d-flex">
                      <h4 className="total">Total : </h4>
                      <h4 className="total">
                        $ {(item.qty * item.a.discountPrice).toFixed(2)}
                      </h4>
                    </div>
                    <Button
                      value={"Buy Now"}
                      fontWeight={"700"}
                      color={"#274C5B"}
                      font={"#fff"}
                      border={"transparent"}
                    />
                    <Button
                      value={"Remove Item"}
                      fontWeight={"700"}
                      color={"#f20808cc"}
                      font={"#fff"}
                      border={"transparent"}
                      functions={() => removeItem(item.a.id)}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="emptyCart">
              <h1 className="notification">Your cart is empty...</h1>
              <Button
                value={"Shop"}
                fontWeight={"700"}
                color={"#274C5B"}
                font={"#fff"}
                border={"transparent"}
                functions={() => navigate("/shop")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
