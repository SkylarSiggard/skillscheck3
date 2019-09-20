import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Routes from './routes'

export default class App extends Component {
  render(){
    return (
      
      <div className="App">
        <div>
          <header>
              <div>Houser</div>
            <Link to='/'>....</Link>
          </header>
        </div>
          {Routes}
      </div>
    );
  }
}


