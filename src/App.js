import React from 'react';
import './App.css';
import Navbar from './components/Containers/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Clubs from './pages/clubs';
  
function App() {
	const pages = ['Clubs'];
  	return (
		<Router>
			<Navbar pages={pages}/>
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/clubs' component={Clubs} />
			</Switch>
		</Router>
  	);
}

export default App;