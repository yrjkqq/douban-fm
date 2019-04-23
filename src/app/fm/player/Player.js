/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './player.css';

class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleTogglePlayer = (type, event) => {
        this.props.onTogglePlayer(type);
    }

    handleLogin = (event) => {
        event.preventDefault();
    };
    handleRegister = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <section className="player">
                {this.props.playerExpanded ?
                    (
                        <>
                            <div className="player-row">
                                <div className="fm-logo">
                                    <img src="/assets/images/fm-logo.svg" alt="fm-log" width="100" height="40" />
                                </div>
                                <div className="feedback">
                                    <span>下载豆瓣FM APP</span>
                                    <svg width="16" height="16">
                                        <circle r="2" cx="8" cy="8" fill="#8f8e94" />
                                    </svg>
                                    <Link to="/feedback">我要反馈</Link>
                                </div>
                                <div className="login">
                                    <a href="#" onClick={this.handleLogin}>登录</a>
                                    <span style={{ 'margin': '0 0.75rem' }}>|</span>
                                    <a href="#" onClick={this.handleRegister}>注册</a>
                                </div>
                            </div>
                            <div className="player-row">
                                <div className="scan-img">
                                    <img src="/assets/images/scan-img.jpg" alt="scan-img" width="90" height="90"/>
                                    <p>
                                        下载豆瓣FM APP
                                    </p>
                                    <p>
                                        让好音乐继续
                                    </p>
                                </div>
                            </div>
                            <div className="player-row">
                                <button onClick={(e) => this.handleTogglePlayer('shrink', e)}>up</button>
                            </div>
                        </>
                    )
                    :
                    (
                        <button onClick={(e) => this.handleTogglePlayer('expand', e)}>down</button>
                    )
                }
            </section>
        )
    }
}

export default Player;