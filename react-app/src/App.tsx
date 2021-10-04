/* eslint-disable */
import { useState } from 'react';
import Tracker from './components/Tracker';
// import SwipeController from './components/SwipeController';
// import Airship from './components/SwipeController/Airship/Airship';

import './App.css';

function App() {
	// const [direction, setDirection] = useState<any>(0);
	return (
		<>
			<Tracker />
			{/* <div className="root-game"> */}
			{/* <Airship controller={direction} /> */}
			{/* <SwipeController action={setDirection} /> */}
			{/* </div> */}
		</>
	);
}

export default App;
