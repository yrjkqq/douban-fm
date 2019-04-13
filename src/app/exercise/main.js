import React from 'react';
import { Link } from 'react-router-dom';

export default function Exercise(props) {
    return (
        <div>
            <h3>练习</h3>
            <ol>
                <li>
                    <Link to="/exercise/official-doc">official doc</Link>
                </li>
                <li>
                    <Link to="/exercise/css3">css3</Link>
                </li>
            </ol>
        </div>
    )
}