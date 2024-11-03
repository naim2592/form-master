import { useContext } from "react";
import { uContex } from "./Grandfather";


const Uncle = () => {
    const gift=useContext(uContex)
    return (
        <div>
            <h2>uncle {gift}</h2>
        </div>
    );
};

export default Uncle;