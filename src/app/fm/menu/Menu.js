import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './menu.css';

class Menu extends React.Component {

    handleTogglePlayer = event => {
        const type = event.deltaY < 0 ? 'expand' : 'shrink';
        this.props.onTogglePlayer(type);
    }

    render() {
        const parentUrl = this.props.match.url || 'fm';
        return (
            <nav className="menu" onWheel={this.handleTogglePlayer}>
                <Link to={parentUrl + '/hz'}>兆赫</Link>
                <Link to={parentUrl + '/songlist'}>歌单</Link>
                <Link to={parentUrl + '/mine'}>我的</Link>
                <Link to={parentUrl + '/search'}>搜索</Link>
            </nav>
        )
    }
}

// 没有使用 Route 加载的组件，如果需要使用路由参数需要使用 withRouter 包裹
export default withRouter(Menu);