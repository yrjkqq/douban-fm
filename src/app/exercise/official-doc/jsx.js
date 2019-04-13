import React from 'react';

function formatName(user) {
    return `${user.firstName} ${user.lastName}`;
}

const user = {
    firstName: '<script>alert("ha")</script>',
    lastName: 'Per'
};

// const element = (
//     <h1>
//         Hello, {formatName(user)}
//     </h1>
// );

const element1 = React.createElement(
    'h1',
    {className: 'greeting'},
    'hello, world'
)

export { element1 as element };