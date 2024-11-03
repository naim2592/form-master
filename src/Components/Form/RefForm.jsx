import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef=useRef(null)
    const emailRef=useRef(null)
    const handleSubmit=e=>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        
    }
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    return (
        <div>
             
             <form onSubmit={handleSubmit} >
                <input ref={nameRef} type="text" name="bal" /><br />
                <input ref={emailRef} type="email" name="email" id="" /><br />
                <input type="submit"  value="Submit" />
            </form>
        </div>
    
    );
};

export default RefForm;