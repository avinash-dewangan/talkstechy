import React, { useEffect, useState } from 'react'

const Page = (props) => {
    const { postsPerPage, totalPosts, paginate } = props;
    const pageNumbers = [];
    const [counter, setCounter] = useState(1);
    //const [isActive, setActive] = useState(false);
    const [id, setId] = useState('');

    // for new updates and changes
    useEffect(() => {
        paginate(counter);
        //console.log(counter);
        document.title = "Pagination";
    }, [counter]);



    // storing number is array
    for (let index = 1; index <= Math.ceil(totalPosts / postsPerPage); index++) {
        pageNumbers.push(index);
    }


    const paginateHandler = (number) => {
        paginate(number);
        setCounter(number);
    }


    const onButtonClick = (e) => {
        const id = e.target.id;
        console.log(e.target.className);
        setId(id)
        if (id === "prev") {
            if (counter === 1) {
                setCounter(1);

            } else {
                setCounter(counter - 1);

            }
        } else if (id === "next") {
            if (Math.ceil(totalPosts / postsPerPage) === counter) {
                setCounter(counter)

            } else {
                setCounter(counter + 1);

            }
        }
    }

    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={`page-item ${id === "prev" ? "active" : null}`}><span id="prev" onClick={onButtonClick} className="page-link" href="#">Previous</span></li>
                    {pageNumbers.map(number => {
                        return <li key={number} className={`page-item ${number === counter ? "active" : null}`}>
                            <span onClick={() => paginateHandler(number)} className="page-link">
                                {number}
                            </span>
                        </li>
                    })}
                    <li className={`page-item ${id === "next" ? "active" : null}`}><span id="next" onClick={onButtonClick} className="page-link" href="#">Next</span></li>
                </ul>
            </nav>
        </>

    )
}

export default Page;
