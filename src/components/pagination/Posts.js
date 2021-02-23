const Posts = ({ posts, loading }) => {

    if (loading) {
        return <h2> Loading...</h2>
    }
    //console.log(posts[0].title);

    return (
        <>
            <ul className="list-group mb-4">
                {/* {posts.forEach(item => console.log(item))} */}
                {posts.map(post => {
                    return < li key={post.id} className='list-group-item' >
                        {post.title}
                    </li>
                })}
            </ul>
        </>
    )
}

export default Posts;