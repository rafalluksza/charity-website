import {useState, useEffect} from 'react'

const useFetch = (props) => {

    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);

    fetch(props.url, {
        method: 'GET',
    })
        .then(resp => {
            if (resp.ok)
                return resp.json()
            else
                throw new Error('Blad sieci!');
        })
        .then(d => {
            setData(d)
        }).catch( err => {console.log(err)});
    console.log(data)

}