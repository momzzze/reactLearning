import React from 'react';

// class Header extends React.Component {
//     constructor() {
//         super();
//     }

//     render() {
//         return (<h1>{this.props.title}</h1 >)
//     }
// }

export const Header = (props) => {
    const reactEl = <h1>{props.title}</h1 >;
    return reactEl;
}

