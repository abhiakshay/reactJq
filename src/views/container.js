import React, { Component } from 'react';
import Block from './block';

class Container extends Component {
    render(){
        return (
        <main className="container">
            <div className="row">
                <Block></Block>
                <Block></Block>
                <Block></Block>
                <Block></Block>
            </div>
        </main>
        );
    }
}

export default Container;