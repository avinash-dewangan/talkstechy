import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { sdata } from '../../albumdb'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const CardComponent = () => {
    const [posts, setPost] = useState(sdata);
    //console.log(postApis);

    const [showPerPage, setShowPerPage] = useState(100);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })

    if (!posts) {
        return <h1>Loading...</h1>
    }
    return (
        <>
            {
                posts.slice(pagination.start, pagination.end).map((post) => (
                    <div className="col-md-4 col-10 mx-auto mb-4">
                        <div className="card" id={post.id}>
                            <LazyLoadImage
                                effect="blur"
                                src={post.url}
                                className="card-img-top" alt="..."
                                placeholderSrc={process.env.PUBLIC_URL + "/blogger.svg"}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink exact to="#" className="btn btn-primary">Go somewhere</NavLink>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    )
}

export default CardComponent;



/*
Lazy Loading compoent documentation link
https://www.npmjs.com/package/react-lazy-load-image-component

*/