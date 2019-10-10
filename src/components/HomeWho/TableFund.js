import React, {useState, useEffect} from 'react'
import TableData from "./TableData";
import Pagination from "./Pagination";
import {withFirebase} from "../Firebase/context";


const TableFund = (props) => {

    const url = `${props.path}`;
    // console.log(url);

    //pagination
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);

    //getting data from firebase

    useEffect(()=> {
        setLoading(true);

        props.firebase.db.ref(`who/${url}`).on('value', snapshot => {
            const postsObject = snapshot.val();
            const postsList = Object.keys(postsObject).map(key => ({
                ...postsObject[key],
                uid: key,
            }));
            setPosts(postsList);
            setLoading(false)
        });
    },[url]);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //change page
    const paginate = number => setCurrentPage(number);

    return (
        <>
            <div className="table">
                { url === 'fund' && <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>}
                { url === 'local' && <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet dictum mi, et vehicula.
                </p>}
                { url === 'ngo' && <p> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi.
                </p>}
                <TableData posts={currentPosts} loading={loading}/>
            </div>
            <div>
                <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
            </div>
        </>
    )
}
export default withFirebase(TableFund);