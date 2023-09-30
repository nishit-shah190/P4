import React from 'react';
import ReactDOM from 'react-dom';
import './p5.css'
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/header';
import { HashRouter, Route, Link } from 'react-router-dom'; // Import React Router components

function App() {
  return (
    <div>
    <Header/>
    <HashRouter>
      <div>
        <nav>
          {/* Use Link components to create navigation links */}
          <ul>
            <li>
              <Link to="/states">States</Link>
            </li>
            <li>
              <Link to="/example">Example</Link>
            </li>
          </ul>
        </nav>
        {/* Define routes for your components */}
            <Route path="/states" component={States} />
            <Route path="/example" component={Example} />
      </div>
    </HashRouter>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
