import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    render() {
        return (
            <nav className="navbar">
                <Link to="/fm">FM</Link>
                <Link to="/exercise">练习</Link>
                {/* <Link to="/fm">DEMO</Link> */}
            </nav>
        )
    }

}

export { NavBar };