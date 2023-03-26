import React,{ useState } from "react"

const NewCard = () => {
    const [inputs, setInputs] = useState({name:'', url:'', video:''});

   const inputHandler = (e) => {
   console.log(e.target.name, e.target.value)
   setInputs({
    ...inputs,
    [e.target.name] : e.target.value
})
console.log(inputs);
   }
  
    return (
        <form className='new-form'>
            <div className="mb-3">
                <input type="name" name="name" className="form-control form-control-lg" onChange={inputHandler} 
                value={inputs.name} id="exampleInputEmail1" aria-describedby="nameHelp" placeholder='Name' required />
            </div>
            <div className="mb-3">
                <input type="url" name="url" className="form-control form-control-lg" id="exampleInputPassword1" 
                onChange={inputHandler} placeholder='https://example.com' value={inputs.url} pattern="https://.*" size="30"
                required />
            </div>
            <select className="form-select-lg mb-3" aria-label="Default select example"
            name="video" onChange={inputHandler} value={inputs.video}>
                <option defaultValue={"Entertainment Videos"}>Open this select menu</option>
                <option value="Education Videos">Education Videos</option>
                <option value="Finance Videos">Finance Videos</option>
                <option value="Entertainment Videos">Entertainment Videos, </option>
                <option value="Devotional Videos">Devotional Videos</option>
            </select>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default NewCard