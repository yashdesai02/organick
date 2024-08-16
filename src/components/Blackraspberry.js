import React from 'react'
import Header from './common-components/Header'
import BlackRaspberry from './images/BlackRaspberry.png'
import AboutFarm from './images/AboutFarmImg.png'
import Subscribe from './common-components/Subscribe'
import Footer from './common-components/Footer'
import { Scroll } from './common-components/Scroll'

const Blackraspberry = () => {
    Scroll();
    return (
        <>
            <div className='itemPoster'>
                <img src={BlackRaspberry} alt="" />
            </div>
            <div className='container '>
                <div className='itemPosterInfoMain'>
                    <div className='itemPosterInfo'>
                        <h5>Black Raspberry</h5>
                        <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                    </div>
                    <div className='itemPosterInfo2'>
                        <table>
                            <tr>
                                <td><h6>Date</h6></td>
                                <td><h6>:</h6></td>
                                <td><p>December 4, 2022</p></td>
                            </tr>
                            <tr>
                                <td><h6>Client</h6></td>
                                <td><h6>:</h6></td>
                                <td><p>Kevin Martin</p></td>
                            </tr>
                            <tr>
                                <td><h6>Category</h6></td>
                                <td><h6>:</h6></td>
                                <td><p>Agriculture , Eco</p></td>
                            </tr>
                            <tr>
                                <td><h6>Service</h6></td>
                                <td><h6>:</h6></td>
                                <td><p>Organic Products</p></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='aboutFarm'>
                <div className='container'>
                    <div className='aboutFarmInner'>
                        <div className='aboutFarmContent'>
                            <h4>About The Farm:</h4>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                            <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                        </div>

                        <div className='aboutFarmImg'>
                            <img src={AboutFarm} alt="" />
                        </div>
                        <div className='aboutFarmContent'>
                            <p className='organicProduct'>The Organic Products</p>
                            <h4>How To Farm:</h4>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                            <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                        </div>
                        <div className='aboutFarmContent'>
                            <h4>Conclusion:</h4>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                            <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default Blackraspberry