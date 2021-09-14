import { useState } from 'react';
import SwipeController from './components/SwipeController';
import Airship from './components/SwipeController/Airship/Airship';

import './App.css';

function App() {
	const [direction, setDirection] = useState<any>(0);
	return (
		<>
			<div className="root-game">
				<Airship controller={direction} />
				<SwipeController action={setDirection} />
			</div>
		</>
	);
}

export default App;
