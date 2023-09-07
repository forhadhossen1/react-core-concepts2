import { useState } from "react"

export default function Players() {
    const teamStyle = {
        border: '2px solid red',
        marginBottom: '15px',
        borderRadius: '8px'
    }

    const [player, setPlayer] = useState(11)
    const handleAdd = () => {
        setPlayer(player + 1)
    }
    const handleRemove = () => {
        setPlayer(player - 1);
    }


    return (

        <div style={teamStyle}>
            <h3>Players : {player} </h3>

            <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '15px' }}>
                <button onClick={handleAdd}> add </button>
                <button onClick={handleRemove}> remove </button>
            </div>
        </div>
    )
}