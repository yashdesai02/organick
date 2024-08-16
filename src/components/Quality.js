import React from 'react'
import Header from './common-components/Header'
import QualityImg from './images/Quality Img.jpg'
import OraganicImg1 from './images/OrganicImg1.jpg'
import OraganicImg2 from './images/OrganicImg2.jpg'
import Subscribe from './common-components/Subscribe'
import Footer from './common-components/Footer'

const Quality = () => {
    return (
        <>
            <div className='main qualitymain'>
                <div className='container'>
                    <div className='pageTitle'>
                        <h1>Quality Standard</h1>
                    </div>
                </div>
            </div>
            <div className='main oraganicStore'>
                <div className='container'>
                    <div className='QualityImgMain'>
                        <img src={QualityImg} alt="" />
                    </div>
                    <div className='orgaicInfo'>
                        <div className='organicInfoTitle'>
                            <h3>Organic Store Services</h3>
                            <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>

                            <p> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                        </div>
                        <div className='organicContent'>
                            <div className='organicContentImg'>
                                <img src={OraganicImg1} alt="" />
                            </div>
                            <div className='organicContentInfo'>
                                <h6>Why Organic</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                            </div>
                        </div>
                        <div className='organicContent'>
                            <div className='organicContentInfo'>
                                <h6>Speciality Produce</h6>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat. page editors now use Lorem Ipsum as their default model text, and auncover.</p>
                            </div>
                            <div className='organicContentImg'>
                                <img src={OraganicImg2} alt="" />
                            </div>
                        </div>
                        <div className='organicContent2'>
                            <h3>We farm your land</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <div className='organicPoints'>
                                <div className='organicPoint1'>
                                    <h6>Best quality support</h6>
                                    <span>01</span>
                                </div>
                                <div className='organicPoint1'>
                                    <h6>Money back guarantee</h6>
                                    <span>02</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default Quality