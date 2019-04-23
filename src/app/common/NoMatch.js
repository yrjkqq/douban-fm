import React from 'react';
import { Link } from 'react-router-dom';

export default function NoMatch({ location }) {
    return (
        <>
            <p>no match for: {location.pathname}</p>
            <p><Link to="/">Back</Link></p>
        </>
    )
}