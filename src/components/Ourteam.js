import React from 'react'
import Header from './common-components/Header'
import { allExperts } from './Data'
import Subscribe from './common-components/Subscribe'
import Footer from './common-components/Footer'

const Ourteam = () => {
    return (
        <>
            <div className='main ourTeamMain'>
                <div className='container'>
                    <div className='pageTitle'>
                        <h1>Our Team</h1>
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
                                allExperts.map((item, index) =>
                                    <div className='col-4 pt-3 pb-3'>
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
            <Subscribe />
        </>
    )
}

export default Ourteam