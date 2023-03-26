import React from 'react'

const NewCard = () => {
    return (
        <form className='new-form'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <select className="form-select mb-3" aria-label="Default select example">
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