import React, { Component } from 'react';

class Block extends Component {
    constructor(props){
        super(props);
    }
render(){
    return(
         <div className="col col-xs-6 col-md-3">
            <div className="block">
                <img className="image" src= {this.props.imgSrc} alt="appstore"/>
                <aside>{this.props.description}}</aside>
            </div>
            <div  className="block-overlay">
            <div className="topbar">
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/zoom_in-20.png" alt="view" onClick={() => {alert('view')}}/>
                <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/star-20.png" alt="edit" onClick={() => {alert('stars')}}/>
             </div>
            </div>
         </div>
    );
}
}

export default Block;