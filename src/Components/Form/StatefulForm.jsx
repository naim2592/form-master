import { useState } from "react";


const StatefulForm = () => {
    const [error,setError]=useState('')
    const handleSubmit=e=>{
       e.preventDefault()
       if(name.length<5){
           setError('More Data need')
           
       }
       else{
        setError('')
        console.log(name);
           console.log(email);
       }
       
        
    }
    const [name,setName]=useState(null)
    const handleName=(e)=>{
          setName(e.target.value)
          }
    const [email,setEmail]=useState(null)
    const handleEmail=(e)=>{
          setEmail(e.target.value)
        
  
          
    }
    return (
        <div>
              <form onSubmit={handleSubmit} >
                <input onChange={handleName} type="text" name="bal" /><br />
                <input onChange={handleEmail} type="email" name="email" id="" /><br />
        <input type="submit"  value="Submit" />
        {
            error && <p>{error}</p>
        }
            </form>
        </div>
    );
};

export default StatefulForm;