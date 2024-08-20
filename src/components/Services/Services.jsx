import React from 'react';
import './Services.css';
import uiux from '../../images/uiux.png'
import website from '../../images/website.png'
import mobile from '../../images/mobile.png'

export const Services = () => {
    
    
    return (
        <>
            <div className='main_container4'>
                <h2 className='service_heading'>Services we Provide <br/> to our clients Worldwide</h2>
                <div className='card_container'>
                    <div className='small_div'>
                        <div><img src={uiux}></img></div>
                        <h4>UI/UX Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, totam enim dignissimos velit quia numquam beatae quibusdam voluptatum recusandae soluta?</p>
                    </div>
                    <div className='small_div'>
                        <div><img src={website}></img></div>
                        <h4>WebApps/Websites Development</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, totam enim dignissimos velit quia numquam beatae quibusdam voluptatum recusandae soluta?</p>
                    </div>
                    <div className='small_div'>
                        <div><img src={mobile}></img></div>
                        <h4>Mobile Apps Development</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, totam enim dignissimos velit quia numquam beatae quibusdam voluptatum recusandae soluta?</p>
                    </div>                    

                </div>
            </div>
        </>
    );
};


