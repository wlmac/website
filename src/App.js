import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Clubs from './pages/clubs';
  
function App() {
  return (
    <Router>
		<Navbar />
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/clubs' component={Clubs} />
		</Switch>
    </Router>
  );
}

export default App;