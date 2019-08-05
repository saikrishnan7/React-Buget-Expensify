import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Portfolio = () => (
    <header>
        <p>Check the stuff I have done.</p>
        <Link to="/portfolio/1">Item One</Link>
        <Link to="/portfolio/2">Item Two</Link>
    </header>
);

export default Portfolio;