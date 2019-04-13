import React, { Component } from 'react';


const numbers = [1, 2, 4, 3, 5];
const doubled = numbers.map((element) => element * 2);
// console.log(doubled);

const listItems = numbers.map((element) => (
    <li key={element}>{element * 2}</li>
));

function NumberList(props) {
    const numbers = props.numbers;
    // const listItems = numbers.map((number) => (
    //     <li>{number}</li>
    // ));
    let _listItems = [];
    numbers.forEach(element => {
        _listItems.push(
            <li key={element.toString()}>{element * 2}</li>
        );
    });
    return (
        <ul>{_listItems}</ul>
    )
}

class Blog extends Component {

    render() {
        const sidebar = (
            <ul>
                {this.props.posts.map((post) => {
                    return (
                        <li key={post.id}>{post.title}</li>
                    );
                })}
            </ul>
        )
        const content = this.props.posts.map((post) =>
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        );
        return (
            <div>
                {sidebar}
                <hr />
                {content}
            </div>
        )
    }
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

export { doubled, listItems, NumberList, posts, Blog };