global.jQuery = global.$ = require('jquery');

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/homePage'
import About from './components/about/aboutPage'

(function(win){
    "use strict";
    class App extends React.Component{
        render(){
            var Child;
    
            switch(this.props.route) {
                case 'about': Child = About; break;
                default: Child = Home;
            }
    
            return (
                <div>
                    <Child/>
                </div>
            );
        }
    }
    
    function render(){
        var route = win.location.hash.substr(1);
        win.console.log(route);
        ReactDOM.render(<App route={route}/> , document.getElementById('app'));
    }
    
    win.addEventListener('hashchange', render);
    render();
    
})(window);
