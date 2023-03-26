import React from 'react'

const NewCard = () => {
    return (
        <form className='new-form'>
            <div className="mb-3">
                <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
                <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" placeholder='Password' />
            </div>
            <select className="form-select-lg mb-3" aria-label="Default select example">
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