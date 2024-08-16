import React from 'react'
import { Button } from './Button'
const Subscribe = () => {
    return (
        <>
            <div className='main subscribe'>
                <div className='container'>
                    <div className='innerSub'>
                        <div className='subContent d-flex justify-content-between align-items-center'>
                            <div className='innercontent'>
                                <h4>Subscribe to our Newsletter</h4>
                            </div>
                            <div className='subBtnBox'>
                                <input type="text" placeholder='Your Email Address'/>
                                <Button value={"Subscribe "} fontWeight={"700"} color={"#274C5B"} font={"#fff"} border={"2px solid #274C5B"} />
                            </div>
                            <div className='innerSocials'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe