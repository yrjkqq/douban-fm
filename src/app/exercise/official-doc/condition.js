import React, { Component } from 'react';

function UserGreeting(props) {
    return <h1>Welcome back.</h1>
}

function GuestGreeting(props) {
    return <h1>Please sing up.</h1>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {
            isLoggedIn: false
        }
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        // if (isLoggedIn) {
        //     button = <LogoutButton onClick={this.handleLogoutClick} />
        // } else {
        //     button = <LoginButton onClick={this.handleLoginClick} />
        // }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {isLoggedIn ? (
                    <LogoutButton onClick={this.handleLogoutClick} />
                ) : (
                        <LoginButton onClick={this.handleLoginClick} />
                    )}
                {button}
            </div>
        )
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messaged.
                </h2>
            }
        </div>
    );
}

const messages = ['react', 'Re: React', 'Re:Re: React'];


// function WarningBanner(props) {
//     if (props.warn) {
//         return (
//             <div className="warning">
//                 Warning!
//             </div>
//         );
//     } else {
//         return null;
//     }
// }

class WarningBanner extends Component {

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    render() {
        if (this.props.warn) {
            return (
                <div className="warning">
                    Warning!
                </div>
            );
        } else {
            return null;
        }
    }
}

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => {
            return {
                showWarning: !state.showWarning
            }
        });
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

export { LoginControl, messages, Mailbox, Page };