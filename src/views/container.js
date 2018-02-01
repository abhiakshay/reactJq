import React, { Component } from 'react';
import Row from './row'
import $ from 'jquery';

class Container extends Component {
   
    componentWillMount(){
       this.setState({
           data:[],
           imgSrc:"",
           description: ""
        });
    }
    componentDidMount(){
        $.getJSON('http://localhost:3000/data.json').done(function(data) {
            this.setState({data:data,imgSrc: data[0].imageSrc, description:data[0].text});
        }.bind(this));
    }
   
    render(){
        if(this.state.imgSrc!==""){
            return (
                <main className="container">
                 <div className="row">
                    <Row data={this.state.data}></Row>
                 </div>
                </main>
        );
        }else{
            return(<div>Loading...</div>);
        }
    }
}

export default Container;