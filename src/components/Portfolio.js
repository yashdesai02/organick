import React from 'react'
import Header from './common-components/Header'
import { portfolioCard } from './Data'
import Subscribe from './common-components/Subscribe'
import Footer from './common-components/Footer'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <>
            <div className='main portfolioMain'>
                <div className='container'>
                    <div className='pageTitle'>
                        <h1>Portfolio Standard</h1>
                    </div>
                </div>
            </div>
            <div className='portfoliioCard'>
                <div className='container'>
                    <div className='portfolioCardMain'>
                        {
                            portfolioCard.map((item, index) =>
                                <div className='portfoliocard'>
                                    <div className='img'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='cardinfo'>
                                        <Link to={item.path}>
                                            <h4>{item.title}</h4>
                                        </Link>
                                        <h6>{item.type}</h6>
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

export default Portfolio