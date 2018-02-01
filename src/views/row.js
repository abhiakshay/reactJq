import React, { Component } from 'react';
import Block from './block';
import $ from 'jquery';

class Row extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let blocks = [];
        for(let i=0;i<this.props.data.length;i++){
            blocks.push( <Block imgSrc={this.props.data[i].imageSrc} description={this.props.data[i].text}/>);
        }
        return blocks;
    }
}

export default Row;