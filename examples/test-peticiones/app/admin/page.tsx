"use client";

import { use, useEffect, useState } from "react";

function page() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState<any>();

    function handleCount() {
        setCount(count + 1);
    }

    useEffect(() => {
        fetch("https://dragonball-api.com/api/characters").then((res) => {
            res.json().then((data) => {
                setData(data);
            });
        })
    }, []);

    return (
        <div>
            {data && (
                JSON.stringify(data)
            )}
        </div>
    )
}

export default page