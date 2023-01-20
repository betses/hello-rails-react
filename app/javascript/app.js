import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './home';
import Message from './message';

const app = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/greetings" element={<Message />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default app;
