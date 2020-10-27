import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { sdata } from '../../albumdb'
const CardComponent = () => {
    const [posts, setPost] = useState(sdata);
    //console.log(postApis);

    const [showPerPage, setShowPerPage] = useState(6);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage
    })

    return (
        <>
            {
                posts.slice(pagination.start, pagination.end).map((post) => (
                    <div className="col-md-4 col-10 mx-auto mb-4">
                        <div className="card" id={post.id}>
                            <img src={post.url} className="card-img-top" alt="..." />
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