import { useEffect, useState } from 'react';

interface IProps {
	controller: any;
}
const Airship = ({ controller }: IProps) => {
	// const [initPosition, setInitPosition] = useState<boolean>(false);
	const airShip = document.querySelector('.airship');
	// let startControl = false;

	let currentYPosition = 100;
	let currentXPosition = 100;
	useEffect(() => {
		if (controller.moving === 1) {
			if (airShip instanceof HTMLElement) {
				currentYPosition = parseInt(airShip?.style.top);
				currentXPosition = parseInt(airShip?.style.left);
				console.log('minha posicao', currentYPosition);
				// 		// 	currentXPosition = parseInt(airShip?.style.left);
			}
			// 		// startControl = true;
			// 		setInitPosition(true);
			// 		console.log('MMM');
			console.log('position');

			// 		// console.log('minha posicao');
		}
	}, [controller]);
	// let currentYPosition: number = 0;
	// let currentXPosition: number = 0;

	// if (airShip instanceof HTMLElement) {
	// 	currentYPosition = parseInt(airShip?.style.top);
	// 	// 	currentXPosition = parseInt(airShip?.style.left);
	// }
	let dirY = currentYPosition;
	let dirX = currentXPosition;
	if (controller.moving === 2) {
		dirY = controller.valueY + currentYPosition;
		dirX = controller.valueX + currentXPosition;
	}
	// if (dirY === 0) {
	// console.log('paulista');
	// }
	console.log('ministro', dirY);
	// const dirY = document.querySelector('.airship').left;
	// }
	// const topPosition = controller.valueY;
	return (
		<div className="airship" style={{ top: `${dirY}px`, left: `${dirX}px` }}>
			{controller.moving && <pre style={{ fontSize: '1rem' }}>{controller.moving}</pre>}
			<pre style={{ fontSize: '1rem' }}>{JSON.stringify(controller, null, 1)}</pre>
		</div>
	);
};

export default Airship;
