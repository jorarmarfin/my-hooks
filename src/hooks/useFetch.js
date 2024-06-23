import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        getFetch();
    }, [url]);

    const loadingTrue = () => {
        setState({
            data: null,
            loading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async () => {
        loadingTrue();
        const response = await fetch(url);
        const data = await response.json();
        if(!response.ok){
            setState({
                data: null,
                loading: false,
                hasError: true,
                error: data.message
            });
        }
        setState({
            data,
            loading: false,
            hasError: false,
            error: null
        });
    }

    return {
        ...state
    }
}