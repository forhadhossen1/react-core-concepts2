import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);
    }

    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount);
    }

    return (
        <div style={{ border: '2px solid gray', marginBottom: '10px', background: 'orange', borderRadius: '8px' }}>
            <h3>Counter: {count}</h3>

            <div style={{display: 'flex', justifyContent: 'space-around', marginBottom: '15px'}}>
                <button onClick={handleAdd}>add</button>
                <button onClick={handleReduce}>reduce</button>
            </div>
        </div>
    )
}