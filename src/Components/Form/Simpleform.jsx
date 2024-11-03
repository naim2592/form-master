

const Simpleform = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        console.log('submited form')
        console.log(e.target.email.value)
        console.log(e.target.bal.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="bal" /><br />
                <input type="email" name="email" id="" /><br />
        <input type="submit"  value="Submit" />
            </form>
        </div>
    );
};

export default Simpleform;