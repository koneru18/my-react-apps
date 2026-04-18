import { useEffect, useState } from 'react';

interface FetchReturnType<T> {
    data: T | null,
    loading: boolean,
    error: Error | null
}

const useFetch = <T extends unknown>(url: string): FetchReturnType<T> => {

    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setLoading(true);
        
        try {
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json() as T;
            setData(result);
        } catch (error) {
            if (error instanceof Error)
                setError(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error } ;
};

export default useFetch;