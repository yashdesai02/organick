import React from 'react'
import Header from './common-components/Header'
import CreativeDish from './images/creativeDish.png'
import TractorImg from './images/TractorIcon.svg'
import FactoryImg from './images/Factory.svg'
import { Button } from './common-components/Button'
import { IoArrowForwardCircle } from "react-icons/io5";
import Ring from './images/Ring.png'
import ChooseImg from './images/ChooseImg.jpg'
import ChooseCart from './images/ChooseCart.svg'
import ChooseLeafe from './images/ChooseLeafe.svg'
import ChoosePhone from './images/ChoosePhone.svg'
import ChooseCard from './images/ChooseCard.svg'
import { experts } from './Data.js'
import Spicy from './images/Spicy.jpg'
import NutsFeeds from './images/Nuts&Feeds.jpg'
import Pomegranate from './images/Pomegranate.jpg'
import Ginger from './images/Ginger.jpg'
import Subscribe from './common-components/Subscribe';
import Footer from './common-components/Footer.js'

const About = () => {
    return (
        <>
            <div className='main aboutMain'>
                <div className='container'>
                    <div className='pageTitle'>
                        <h1>About</h1>
                    </div>
                </div>
            </div>
            <div className='main creativeThings'>
                <div className='container'>
                    <div className='row'>
                        <div className='creativeDish'>
                            <img src={CreativeDish} alt="" />
                        </div>
                        <div className='creativeInfo'>
                            <div className='title'>
                                <div className='innerTitle'>
                                    <h6>About Us</h6>
                                    <h4>We do Creative Things for Success</h4>
                                </div>
                            </div>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>

                            <p> Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                            <div className='row'>
                                <div className='tractorIconMain d-flex'>
                                    <div className='tractorIcon'>
                                        <img src={TractorImg} alt="" />
                                    </div>
                                    <div className='tractorContent'>
                                        <h6>Modern Agriculture Equipment</h6>
                                    </div>
                                </div>
                                <div className='tractorIconMain d-flex'>
                                    <div className='tractorIcon'>
                                        <img src={FactoryImg} alt="" />
                                    </div>
                                    <div className='tractorContent'>
                                        <h6>No growth hormones are used</h6>
                                    </div>
                                </div>
                            </div>
                            <Button value={"Explore More "} fontWeight={"700"} color={"#274C5B"} font={"#fff"} border={"transparent"} icon={<IoArrowForwardCircle />} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='main whyChooseUs'>
                <div className='container'>
                    <div className='row align-items-center'>
                        <div className='whyChooseContent'>
                            <div className='title'>
                                <div className='innerTitle'>
                                    <h6>Why Choose us?</h6>
                                    <h4>We do not buy from the open market & traders.</h4>
                                </div>
                            </div>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                            <div className='choosePonits'>
                                <div className='ringImg'>
                                    <img src={Ring} alt="" />
                                </div>
                                <div className='pointContent'>
                                    <h6>100% Natural Product</h6>
                                </div>
                            </div>
                            <p className='choosePointInner'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                            <div className='choosePonits'>
                                <div className='ringImg'>
                                    <img src={Ring} alt="" />
                                </div>
                                <div className='pointContent'>
                                    <h6> Increases resistance</h6>
                                </div>
                            </div>
                            <p className='choosePointInner'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                        </div>
                        <div className='chooseImg'>
                            <img src={ChooseImg} alt="" />
                        </div>
                    </div>
                    <div className='chooseFacility'>
                        <div className='facilityData'>
                            <div className='facilityIcon'>
                                <img src={ChooseCart} alt="" />
                            </div>
                            <h6>Return Policy</h6>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className='facilityData'>
                            <div className='facilityIcon'>
                                <img src={ChooseLeafe} alt="" />
                            </div>
                            <h6>100% Fresh</h6>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className='facilityData'>
                            <div className='facilityIcon'>
                                <img src={ChoosePhone} alt="" />
                            </div>
                            <h6>Support 24/7</h6>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                        <div className='facilityData'>
                            <div className='facilityIcon'>
                                <img src={ChooseCard} alt="" />
                            </div>
                            <h6>Secured Payment</h6>
                            <p>Simply dummy text of the printintypesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='main team'>
                <div className='container'>
                    <div className='title'>
                        <div className='innerTitle'>
                            <h6>Team</h6>
                            <h4>Our Organic Experts</h4>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        </div>
                    </div>
                    <div className='experts'>
                        <div className='row md-12'>
                            {
                                experts.map((item, index) =>
                                    <div className='col md-4'>
                                        <div className="card expertCard ">
                                            <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body expertCardBody">
                                                <h5 className="card-title">{item.name}</h5>
                                                <div className='jobandsocial'>
                                                    <h6 className='expertJob'>{item.job}</h6>
                                                    <div className='socialMain'>
                                                        <a href="#">
                                                            {item.instagram}
                                                        </a>
                                                        <a href="#">
                                                            {item.facebook}
                                                        </a>
                                                        <a href="#">
                                                            {item.twitter}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            }
                        </div>
                    </div>
                </div>
            </div >
            <div className='main aboutUsOffer'>
                <div className='container'>
                    <div className='title'>
                        <div className='innerTitle'>
                            <h6>About Us</h6>
                            <h4>What We Offer for You</h4>
                        </div>
                    </div>
                    <div className='aboutOfferCardMain'>
                        <div className='aboutOfferCard'>
                            <div className='offerImg'>
                                <img src={Spicy} alt="" />
                            </div>
                            <h6>Spicy</h6>
                        </div>
                        <div className='aboutOfferCard'>
                            <div className='offerImg'>
                                <img src={NutsFeeds} alt="" />
                            </div>
                            <h6>Nuts & Feeds</h6>
                        </div>
                        <div className='aboutOfferCard'>
                            <div className='offerImg'>
                                <img src={Pomegranate} alt="" />
                            </div>
                            <h6>Fruits</h6>
                        </div>
                        <div className='aboutOfferCard'>
                            <div className='offerImg'>
                                <img src={Ginger} alt="" />
                            </div>
                            <h6>Vegetable</h6>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default About