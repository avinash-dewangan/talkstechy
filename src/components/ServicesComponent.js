import React from 'react';
import Common from '../components/common/Common';
import CardComponent from './common/CardComponent';
import { withRouter } from 'react-router-dom';
const ServicesComponent = () => {

    useCallback(() => {
        document.title = "Talks Techy | Our Services";
    })
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <CardComponent />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(ServicesComponent);