import { useEffect, useState } from "react";

export function Fetch(url) {
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);
    const [error  , setError] = useState(true);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch(() => setError(false))
            .finally(() => setLoading(false));
    }, [])
    return { data, loading , error}
}