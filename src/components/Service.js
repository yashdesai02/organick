import React from 'react'
import Header from './common-components/Header'
import AgriculturePista from './images/AgriculturePista.png'
import AgriIcon1 from './images/AgriIcon1.svg'
import AgriIcon2 from './images/AgriIcon2.svg'
import AgriIcon3 from './images/AgriIcon3.svg'
import AgriIcon4 from './images/AgriIcon4.svg'
import AgriIcon5 from './images/AgriIcon5.svg'
import AgriIcon6 from './images/AgriIcon6.svg'
import { Button } from './common-components/Button'
import { IoArrowForwardCircle } from "react-icons/io5";
import VideoIcon from './images/Video Icon.png'
import Footer from './common-components/Footer'

const Service = () => {
    return (
        <>
            <div className='main serviceMain'>
                <div className='container'>
                    <div className='pageTitle'>
                        <h1>Services</h1>
                    </div>
                </div>
            </div>
            <div className='main agricultureMain'>
                <div className='container'>
                    <div className='title'>
                        <div className='innerTitle'>
                            <h6>What we Grow</h6>
                            <h4>Better Agriculture for Better Future</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-4 agriInfo'>
                            <div className='agriInfoInnerMain'>
                                <div className='agriInfoInner'>
                                    <img src={AgriIcon1} alt="" />
                                    <h6>Dairy Products</h6>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className='agriInfoInner'>
                                    <img src={AgriIcon2} alt="" />
                                    <h6>Store Services</h6>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className='agriInfoInner'>
                                    <img src={AgriIcon3} alt="" />
                                    <h6>Delivery Services</h6>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 AgriculturePistaImg'>
                        </div>
                        <div className='col-4'>
                            <div className='agriInfoInnerMain'>
                                <div className='agriInfoInner agriInfoInner2'>
                                    <img src={AgriIcon4} alt="" />
                                    <h6>Dairy Products</h6>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className='agriInfoInner agriInfoInner2'>
                                    <img src={AgriIcon5} alt="" />
                                    <h6>Store Services</h6>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                                <div className='agriInfoInner agriInfoInner2'>
                                    <img src={AgriIcon6} alt="" />
                                    <h6>Delivery Services</h6>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremqlaudantium. Sed ut perspiciatis</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='agribtn'>
                        <Button value={"Explore More "} fontWeight={"700"} color={"transparent"} font={"#274C5b"} border={"2px solid #335B6B"} icon={<IoArrowForwardCircle />} />
                    </div>
                </div>
            </div>
            <div className='main organicMain'>
                <div className='container'>
                    <div className='title'>
                        <div className='innerTitle'>
                            <h6>Organic Only</h6>
                            <h4>Everyday Fresh & Clean</h4>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the </p>
                        </div>
                        <div className='videoIcon'>
                            <a href="#">
                                <img src={VideoIcon} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service