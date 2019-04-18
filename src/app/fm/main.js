import React from 'react';
import { Route } from 'react-router-dom';
import Player from './player/Player';
import Menu from './menu/Menu';
import Hz from './hz/Hz';
import Mine from './mine/Mine';
import Search from './search/Search';
import SongList from './song-list/SongList';
import './main.css';

class ArtistList extends React.Component {

    componentDidMount() {
        fetch('api/artists', { method: 'get', credentials: 'include' })
            .then((response) => {
                response.json().then(resp => console.log(resp));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                ArtistList...
            </div>
        )
    }
}

export default class FM extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerExpanded: true
        };
    }

    togglePlayer = (type) => {
        // shrink 点击向上箭头和向后滚动鼠标滚轮，页面缩小；expand 点击向下箭头和向前滚动鼠标滚轮；
        let playerDom = document.querySelector('.main .player');
        playerDom.className = 'player player-' + type;
        this.setState({
            playerExpanded: type === 'expand'
        });
    }

    render() {
        return (
            <section className="main">
                <Player onTogglePlayer={this.togglePlayer} playerExpanded={this.state.playerExpanded}  />
                <Menu onTogglePlayer={this.togglePlayer} />
                <Route path="/fm/hz" component={Hz} />
                <Route path="/fm/songlist" component={SongList} />
                <Route path="/fm/mine" component={Mine} />
                <Route path="/fm/search" component={Search} />
            </section>
        )
    }
}