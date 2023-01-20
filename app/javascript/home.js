import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <>
        <h1 className="title-text">
            Setup RoR + React project as a single APP
        </h1>
        <p className="text">Click the button below to view Diffrent Greetings From rails Database</p>
        <Link to="/greetings" className="buttons">Message</Link>
    </>


);

export default Home;