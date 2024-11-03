import useInputState from "./useinputstate";


const HookFrom = () => {
    const [name,handleNameChange]=useInputState('Zinnia')
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('From data',name);
        
    }
    return (
        <div>
              <form onSubmit={handleSubmit} >
                <input value={name} onChange={handleNameChange} type="text" name="bal" /><br />
                <input type="email" name="email" id="" />
               <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default HookFrom;