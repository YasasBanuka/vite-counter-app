import { useState } from "react"
import "./Counter.css"

function Counter() {

    const [count, setCount] = useState(0);
    const [inputNum, setInputNum] = useState("");

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleDecrement = () => {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);

        } else {
            alert("Count cannot be less than zero");
        }
    }

    const handleInputChange = (event) => {
        setInputNum(event.target.value);
    }

    const handleSetCount = () => {
        const newCount = Number(inputNum);

        if (!isNaN(newCount) && newCount >= 0) { 
            setCount(newCount);
            setInputNum(""); 

        } else {
            alert("Count cannot be less than zero");
        }
    }

    const resetCounter = () => {
        setCount(0);
        setInputNum(""); 
    }

    return (
        <>
            <h1>Counter App</h1>

            <div className="card">
                <button onClick = {handleIncrement}> + </button>            
                <h3> Count is {count} </h3>            
                <button onClick = {handleDecrement}> - </button>
            </div>

            <div className="card2">
                <input type="number" placeholder="Type numbers here" 
                    value={inputNum} 
                    onChange={handleInputChange}
                />

                <button onClick={handleSetCount} disabled = {inputNum === ""}>
                    Set Count
                </button>
            </div>

            <div className="card3">
                <button onClick = {resetCounter}>
                    Reset
                </button>
            </div>
        </>

    )
}

export default Counter