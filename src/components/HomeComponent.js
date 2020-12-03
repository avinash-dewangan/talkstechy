import React, { useEffect } from 'react';
import Common from '../components/common/Common';
const HomeComponent = () => {
    useEffect(() => {
        document.title = "Talks Techy | Home";
    })
    return (
        <Common name='Grow your bussiness with'
            imgsrc={process.env.PUBLIC_URL + "/assets/features-1.svg"}
            visit="/services"
            btname="Get Started"
        />

    )
}

export default HomeComponent;
