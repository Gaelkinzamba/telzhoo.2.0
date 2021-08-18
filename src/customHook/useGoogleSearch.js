import { useState, useEffect } from 'react';
import API_KEY from '../keys';

const CONTEXT_KEY = "2add8e93f8fe55f09";

const useGoogleSearch = (term, startIndex) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDate = async() => {
            fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}&start=${startIndex}`
                )
                .then(res => res.json())
                .then(result => {
                    setData(result)
                })
        }

        fetchDate();
    }, [term, startIndex])


    return { data }
}

export default useGoogleSearch