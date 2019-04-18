import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

export default class Menu extends React.Component {

    handleTogglePlayer = event => {
        const type = event.deltaY < 0 ? 'expand' : 'shrink';
        this.props.onTogglePlayer(type);
    }

    render() {
        return (
            <nav className="menu" onWheel={this.handleTogglePlayer}>
                <Link to="/fm/hz">兆赫</Link>
                <Link to="/fm/songlist">歌单</Link>
                <Link to="/fm/mine">我的</Link>
                <Link to="/fm/search">搜索</Link>
            </nav>
        )
    }
}