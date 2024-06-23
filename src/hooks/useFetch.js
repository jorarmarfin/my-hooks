import {useEffect, useState} from "react";

const localCache = {}
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

        if(localCache[url]){
            setState({
                data: localCache[url],
                loading: false,
                hasError: false,
                error: null
            });
            return;
        }

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
        localCache[url] = data;
    }

    return {
        ...state
    }
}