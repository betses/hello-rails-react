import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="">
        <h1 className="">
            setup RoR + React project as two apps
        </h1>
        <p className="">Click the button below to view Diffrent Greetings From rails Database</p>
        <div>
            <Link to="/greetings" className="">Message</Link>
        </div>
    </div>
);

export default Home;