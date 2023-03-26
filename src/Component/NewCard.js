import React,{ useState } from "react"

const NewCard = () => {
    const [inputs, setInputs] = useState({email:'', password:'', video:''});

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
                <input type="email" name="email" className="form-control form-control-lg" onChange={inputHandler} 
                value={inputs.email} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
                <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <input type="password" name="password" className="form-control form-control-lg" id="exampleInputPassword1" 
                onChange={inputHandler} placeholder='Password' value={inputs.password} />
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