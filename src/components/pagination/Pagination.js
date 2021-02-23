import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Posts from './Posts';
import Page from './Page';

function Pagination() {
    const [posts, setPosts] = useState([]);
    const [loading, setloading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setloading(true);
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setPosts(res.data);
            setloading(false);
        }
        fetchPosts();
    }, []);

    //Get Current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexofFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexofFirstPost, indexOfLastPost);



    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    //console.log(posts);
    return (
        <div className='container'>
            <h1 className='text-primary mb-3'>My Blog</h1>
            <Posts posts={currentPost} loading={loading} />
            <Page postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate} />
        </div>
    )
}

export default Pagination;





