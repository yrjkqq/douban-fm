import React from 'react';
import { NavLink } from 'react-router-dom';
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
                {/* NavLink 可以在匹配路由时s带上样式 */}
                <NavLink to="/fm" activeClassName="active-link">FM</NavLink>
                {/* <Link to="/fm">FM</Link> */}
                <NavLink to="/exercise" activeClassName="active-link">练习</NavLink>
                {/* <Link to="/fm">DEMO</Link> */}
            </nav>
        )
    }

}

export { NavBar };