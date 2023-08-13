import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/' element={<Home/>} />
					<Route path='/login' element={<Login/>} />
					<Route path='/register' element={<Register/>} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
