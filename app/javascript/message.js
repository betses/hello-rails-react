import React from 'react'
import { Link } from 'react-router-dom';

const Message = () => {
    return (
        <div className="">
            <h1 className="title-text">Hello</h1>
            <Link to="/" className="buttons">Back</Link>
        </div>
    )
}

export default Message;