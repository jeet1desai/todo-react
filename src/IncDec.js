import React, {useState} from 'react';
import './IncDec.css';


export default function IncDec() {
    const [num, setNum] = useState(0)

    const IncBtn = () => {
        setNum(num +1);
    }

    const DecBtn = () => {
        if(num === 0){
            alert('dec.. limit is 0');
            setNum(0)
        }else{
            setNum(num - 1);
        }
    }

    return (
        <>
            <div className="main-div">
                <div className="center-div">
                    <br />
                    <h1> {num} </h1>
                    <br />

                    <div className="inc-dec-btns">
                        <button onClick={IncBtn} className="inc-btn">+</button>
                        <button onClick={DecBtn} className="dec-btn">-</button>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}
