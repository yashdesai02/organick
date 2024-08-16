import React from 'react'
import Header from './common-components/Header'
import errorImg from './images/404Img.png'
import { Button } from './common-components/Button'
import { IoArrowForwardCircle } from "react-icons/io5";
import Footer from './common-components/Footer';
import { Link } from 'react-router-dom';
import { Homepage } from './Homepage';

const Error = () => {
  return (
    <>
      <div className='main errorMian'>
        <div className='container'>
          <div className='pageNotFound'>
            <div className='notFoundInner'>
              <img src={errorImg} alt="" />
              <h1>Page not found</h1>
              <p>The page you are looking for doesn't exist or has been moved</p>
              <Link to={"/"}>
                <Button value={"Go to Homepage "} fontWeight={"700"} color={"#274C5B"} font={"#fff"} border={"transparent"} icon={<IoArrowForwardCircle />} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error