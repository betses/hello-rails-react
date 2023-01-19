import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/message';

const Message = () => {
    const dispatch = useDispatch();
    const message = useSelector((store) => store.message);
    console.log(message);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div className="">
            <h1 className="title-text">Hello</h1>
            <p className="title-text">{message.message}</p>
            <Link to="/" className="buttons">Back</Link>
        </div>
    )
}

export default Message;