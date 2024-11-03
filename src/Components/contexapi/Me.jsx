import { useContext } from "react";
import { uContex } from "./Grandfather";


const Me = () => {
    const [gift,setGift]=useContext(uContex)
    setGift('bike')
    return (
        <div>
            <h1>me {gift}</h1>

        </div>
    );
};

export default Me;