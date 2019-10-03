import React, {useState, useEffect} from 'react'
import axios from "axios";
import TableData from "./TableData";
import Pagination from "./Pagination";


const TableFund = (props) => {

    //fetching data from database
    const url = `http://localhost:4000/${props.path}`;

    //pagination
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    useEffect( () => {
        const fetchData = async () => {
            setLoading(true)
            const result = await axios.get(url);
            // console.log(result)
            setPosts(result.data);
            setLoading(false)
        };

        fetchData();
    }, [url]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = number => setCurrentPage(number);

    return (
        <div className="table">
            <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            <TableData posts={currentPosts} loading={loading}/>
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
        </div>
    )
}
export default TableFund;