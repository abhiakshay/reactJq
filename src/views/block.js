import React, { Component } from 'react';

class Block extends Component {
render(){
    return(
         <div className="col col-xs-6 col-md-3">
            <div className="block">
                <img className="image" src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/App_Store-256.png" alt="appstore"/>
                 <aside>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</aside>
            </div>
            <div  className="block-overlay">
                <div className="topbar"></div>
            </div>
         </div>
    );
}
}

export default Block;