import React from 'react';
import './main.css';

export default class ScrollToTop extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleScrollTop = () => window.scrollTo(0, 0);

    render() {
        return (
            <div className="scroll-to-top">
                <img src="/assets/icons/top.svg" alt="to-top" onClick={this.handleScrollTop} />
            </div>
        );
    }
}