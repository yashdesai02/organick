import React from 'react'
import Header from './common-components/Header'
import BlogImg from './images/BlogImg.png'
import { FaUser } from "react-icons/fa";
import Subscribe from './common-components/Subscribe';
import Footer from './common-components/Footer';
import { Scroll } from './common-components/Scroll'

const Blogsingle = () => {
    Scroll();
    return (
        <>
            <div className='blogImg'>
                <img src={BlogImg} alt="" />
                <div className='blogInfoMain'>
                    <div className='blogInfoMainInner'>
                        <div className='bloginfo'>
                            <div className='blogDate'>
                                <h6>Posted On:</h6>
                                <span>January 6, 2022</span>
                            </div>
                            <div className='blogUser'>
                                <FaUser />
                                <span>By Rachi Card</span>
                            </div>
                        </div>
                        <div className='bloginfo2'>
                            <h1>Research More Organic Food</h1>
                            <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='UserReviewMain'>
                <div className='container'>
                    <div className='userReview'>
                        <div className='userReviewInner'>
                            <p>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>
                            <h1>Preferred Form of Vitamin D?</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <ul>
                                <li>
                                    <p> Publishing packages and web pageLorem Ipsum as their default</p>
                                </li>
                                <li>
                                    <p>  Content here, content here', making it look like readable</p>
                                </li>
                                <li>
                                    <p>  Packages and web pageLorem Ipsum as their default</p>
                                </li>
                            </ul>
                        </div>
                        <div className='userMainReview'>
                            <h3>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</h3>
                        </div>
                        <div className='userReviewInner'>
                            <h3>Make perfect organic product with us</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                            <ul className='ul2'>
                                <li>
                                    <p>Publishing packages and web pageLorem Ipsum as their default</p>
                                </li>
                                <li>
                                    <p>Content here, content here', making it look like readable</p>
                                </li>
                                <li>
                                    <p>Packages and web pageLorem Ipsum as their default</p>
                                </li>
                                <li>
                                    <p>more-or-less normal distribution of letters</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Subscribe />
        </>
    )
}

export default Blogsingle