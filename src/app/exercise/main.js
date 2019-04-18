import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../common/nav-bar';

export default function Exercise(props) {
    return (
        <div>
            <NavBar />
            <h3>练习</h3>
            <ol>
                <li>
                    <Link to="/exercise/official-doc">official doc</Link>
                </li>
                <li>
                    <Link to="/exercise/css3">css3</Link>
                </li>
                <li>
                    <Link to="/exercise/html5">html5</Link>
                </li>
            </ol>
        </div>
    )
}