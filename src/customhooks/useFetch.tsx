import { useEffect, useState } from "react";

const useFetch = (url:string) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean|null>(null);
    const [error, setError] = useState<unknown | null>(null);
    useEffect(()=>{
        const fetchData = async() => {
            try{
                setLoading(true);
                const response = await fetch(url);
                const responseData = await response.json();
                setData(responseData);
                setLoading(false);
            }
            catch(err:unknown){
                setError(err);
                setLoading(false);
            }
        }; 
        fetchData();
    },[url]);
    return {
        error, loading, data
    }
};

export default useFetch;