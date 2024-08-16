import React from 'react'
import Header from './common-components/Header'
import { allNews } from './Data'
import { FaUser } from "react-icons/fa";
import { Button } from './common-components/Button'
import { IoArrowForwardCircle } from "react-icons/io5";
import Subscribe from './common-components/Subscribe';
import Footer from './common-components/Footer';
import { Scroll } from './common-components/Scroll';
import { Link } from 'react-router-dom';

const News = () => {
    Scroll();
    return (
        <>
            <div className='main newsMain'>
                <div className='container'>
                    <div className='pageTitle'>
                        <h1>Recent  News</h1>
                    </div>
                </div>
            </div>
            <div className='main UserNewsMain'>
                <div className='container'>
                    <div className='newsUserMain'>
                        {
                            allNews.map((item, index) =>
                                <div className='newsBox'>
                                    <img src={item.image} alt="" />
                                    <span className='date'>{item.date} <br />{item.month}</span>
                                    <div className='NewsBoxMain'>
                                        <div className='newsWritter d-flex align-items-center'>
                                            <FaUser />
                                            <span>{item.user}</span>
                                        </div>
                                        <div className='newsTitle'>
                                            <h6>{item.title}</h6>
                                            <p>{item.news}</p>
                                            <Link to={"/blogsingle"}>
                                                <Button value={"Read More "} fontWeight={"700"} color={"#EFD372"} font={"#274C5B"} border={"transparent"} icon={<IoArrowForwardCircle />} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default News