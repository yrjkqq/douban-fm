import React from 'react';
import './player.css';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleTogglePlayer = (type, event) => {
        this.props.onTogglePlayer(type);
    }

    render() {
        return (
            <section className="player">
                播放器
                {this.props.playerExpanded ?
                    (<button onClick={(e) => this.handleTogglePlayer('shrink', e)}>up</button>)
                    :
                    (<button onClick={(e) => this.handleTogglePlayer('expand', e)}>down</button>)
                }
            </section>
        )
    }
}

export default Player;