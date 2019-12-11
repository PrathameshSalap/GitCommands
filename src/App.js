import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {ParentClass} from './component/ParentClass'
import {ChildClass} from './component/ChildClass'
import {MainClass} from './component/MainClass'
import './App.css';
function App() {
  return (
    <div className="App">
     <Router>
       <switch>
       <Route exact path="/" component={MainClass}/>
       <Route path="/parent" component={ParentClass}/>
       <Route path="/parent/child" component={ChildClass}/>
       </switch>
     </Router>
    </div>
  );
}
export default App;
