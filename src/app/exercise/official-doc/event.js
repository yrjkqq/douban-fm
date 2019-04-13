import React, { Component } from 'react';

function ActionLink(params) {

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="" onClick={handleClick}>Click me</a>
    )
}

class Toggle extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }
        // 为 handleClick 函数绑定作用域，避免回调时获取不到 this 值
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, e) {
        console.log(id);
        console.log(e);
        this.setState(state => {
            return {
                isToggleOn: !state.isToggleOn
            }
        });
    }

    // 推荐方式：使用 箭头函数 使函数内部的 this 指向创建时的 this
    // handleClick = () => {
    //     this.setState(state => {
    //         return {
    //             isToggleOn: !state.isToggleOn
    //         }
    //     });
    // }

    // createList = () => {
    //     for(let i = 0; i < 3; i++) {
    //     }
    //     return (
    //         <div>
    //             <button onClick={(e) => this.deleteRow(i, e)}>{i}</button>
    //         </div>
    //     )
    // }

    render() {
        // {/* <button onClick={this.handleClick}> */}
        return (
            // 使用闭包和箭头函数使调用时的 this 就是创建的对象
            <div>
            <button onClick={(e) => this.handleClick(e, 'id-01')}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>

            <button onClick={this.handleClick.bind(this, 'id-01')}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            </div>
        )
    }
}

export { ActionLink, Toggle };