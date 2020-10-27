import React from 'react';
import Common from '../components/common/Common';
const ContactCompoent = () => {
    return (
        <Common name='Welcome to contact page'
            imgsrc={process.env.PUBLIC_URL + "/assets/features-1.svg"}
            visit="/services"
            btname="Get Started"
        />
    )
}

export default ContactCompoent;