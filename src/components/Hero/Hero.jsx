import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import './Hero.css'
import { TypeAnimation } from 'react-type-animation';
import webapps from '../../images/webapps.png'
import webapps2 from '../../images/webapps2.png'
import mobileapps from '../../images/mobileapps.png'

export const Hero = () => {

    const [hasStarted, setHasStarted] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true,
        onChange: (inView) => {
            if (inView) {
                setHasStarted(true);
            }
        },
    });


    return (
        <>
            <div className='main_container2'>
                <div className='left_side'>
                    <div style={{ fontSize: '4em', fontWeight: 'bold', height: '11rem' }}>
                        <span>Building Digital </span>
                        <TypeAnimation
                            sequence={[
                                'Brands & Businesses',
                                1000,
                                'Web Apps',
                                1000,
                                'Mobile Apps',
                                1000,
                                'Markets for Startups',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            style={{
                                background: 'linear-gradient(90deg, #A156F0, #F84844, #FFAD3B)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        />
                        {/* <span> & Experience</span> */}
                    </div>
                    <p>
                        An enthusiastic team building your dream, delivering web apps, websites, and mobile apps with the latest industry level technologies, so you can get started ASAP.
                    </p>
                    <div className='get_started'>
                        <button className='button'>
                            Get Started
                        </button>

                    </div>
                </div>
                <div className='right_side'>

                    {/* <img src={webapps}></img> */}
                    <img src={mobileapps} className='mobileapps'></img>

                </div>
                <div className=''>

                </div>
            </div>
            <div className='main_container3'>
                <div className='trusted_section'>
                    <h2>Trusted by 1,000+  &emsp;  companies around the World</h2>
                    <p>CreatedInAm has delivered wide range of WebApps, Mobile Apps and Digital Services, One Happy customer is always better than 100 dissapointed customers...</p>
                </div>

                <div ref={ref} style={{}} className='counters'>
                    <div>

                        <div>
                            <div className='counter'>
                                {hasStarted && (
                                    <CountUp start={0} end={600} duration={2.75} separator="," />
                                )}
                                <span>+</span>
                            </div>
                            <p className='types_of_service'>Mobile Apps</p>
                        </div>
                        <div>
                            <div className='counter'>
                                {hasStarted && (
                                    <CountUp start={0} end={400} duration={2.75} separator="," />
                                )}
                                <span>+</span>
                            </div>
                            <p className='types_of_service'>Web Apps</p>
                        </div>

                    </div>
                    <div>

                        <div>
                            <div className='counter'>
                                {hasStarted && (
                                    <CountUp start={0} end={1000} duration={2.75} separator="," />
                                )}
                                <span>+</span>
                            </div>
                            <p className='types_of_service'>Happy Clients</p>
                        </div>
                        <div>
                            <div className='counter'>
                                {hasStarted && (
                                    <CountUp start={0} end={10} duration={2.75} separator="," />
                                )}
                                <span>+</span>
                            </div>
                            <p className='types_of_service'>Years of Experience</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
