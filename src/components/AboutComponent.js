import React from 'react';
import Common from '../components/common/Common';
const AboutComponent = () => {
    return (
        <Common name='Welcome to About Page'
            imgsrc={process.env.PUBLIC_URL + "/assets/features-2.svg"}
            visit="/services"
            btname="Get Started"
        />
    )
}

export default AboutComponent;