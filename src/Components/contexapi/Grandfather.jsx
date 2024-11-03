import { createContext, useState } from "react";
import Father from "./Father";
import Uncle from "./Uncle";
Uncle
export const uContex=createContext()
const Grandfather = () => {
    const [gift,setGift]=useState('car')
    return (
        <div>
            <h2>Grandfather</h2>
            <uContex.Provider value={[gift,setGift]}>
            <div style={{display:'flex'}}>
            <Father></Father>
            <Uncle></Uncle>
            </div>
            </uContex.Provider>
        </div>
    );
};

export default Grandfather;