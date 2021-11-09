// import logo from './logo.svg';
import "./App.css";

import winnie_logo from "./Assets/winnie_logo.png";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				{/* <div className="logo-frame"> */}
				<img src={winnie_logo} className="App-logo logo-frame" alt="logo" />
				{/* </div> */}
				<h1>Winnie Coin Comming Soon</h1>
			</header>
		</div>
	);
}

export default App;
