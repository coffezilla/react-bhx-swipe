/* eslint-disable */
import { useEffect, useState } from 'react';

interface IProps {
	action: any;
}
const SwipeController = ({ action }: IProps) => {
	// const [consoleDomStart, setConsoleDomStart] = useState<any>({ x: 0, y: 0 });
	// const [consoleDomCurrent, setConsoleDomCurrent] = useState<any>({ x: 0, y: 0 });

	let consoleDomStart = { x: 0, y: 0 };
	let consoleDomCurrent = { x: 0, y: 0 };

	// const direction = {
	// 	directionX: 0,
	// 	directionY: 0,
	// 	valueX: 0,
	// 	valueY: 0,
	// 	moving: false,
	// };

	// const swipeStartCoordinates = { x: 0, y: 0 };
	// const swipeCurrentCoordinates = { x: 0, y: 0 };

	//
	const swipe = (e: any) => {
		const touch = e.targetTouches[0];
		consoleDomCurrent = { x: touch.screenX, y: touch.screenY };

		const directionY = touch.screenY - consoleDomStart.y < 0 ? 'UP' : 'DOWN';
		const directionX = touch.screenX - consoleDomStart.x < 0 ? 'LEFT' : 'RIGHT';
		// console.log('swipe', directionX);
		action({
			dirX: directionX,
			dirY: directionY,
			valueX: touch.screenX - consoleDomStart.x,
			valueY: touch.screenY - consoleDomStart.y,
			moving: 2,
		});
		// direction = {
		// 	directionX: 0,
		// 	directionY: 0,
		// 	valueX: 0,
		// 	valueY: 0,
		// };
		// console.log('swipe current');
		// if (e['targetTouches'] !== undefined) {
		// swipeCurrentCoordinates.y = touch.screenY;
		// swipeCurrentCoordinates.x = touch.screenX;
		// } else {
		// 	swipeCurrentCoordinates.y = e.screenY;
		// 	swipeCurrentCoordinates.x = e.screenX;
		// }
	};

	//
	const swipeStart = (e: any) => {
		const touch = e.targetTouches[0];
		consoleDomStart = { x: touch.screenX, y: touch.screenY };
		action({
			dirX: 'NONE',
			dirY: 'NONE',
			valueX: touch.screenX - consoleDomStart.x,
			valueY: touch.screenY - consoleDomStart.y,
			moving: 1,
		});
		// console.log('swipeStart', consoleDomStart);
		// if (e['targetTouches'] !== undefined) {
		// swipeStartCoordinates.y = touch.screenY;
		// swipeStartCoordinates.x = touch.screenX;
		// } else {
		// 	swipeStartCoordinates.y = e.screenY;
		// 	swipeStartCoordinates.x = e.screenX;
		// }
		// setConsoleDomStart(swipeStartCoordinates);
	};

	//
	const swipeEnd = (e: any) => {
		console.log('swipeEnd');
		// setConsoleDomStart({ x: 0, y: 0 });
		// setConsoleDomCurrent({ x: 0, y: 0 });
		// swipeStartCoordinates.y = 0;
		// swipeStartCoordinates.x = 0;
		// setConsoleDomStart(swipeStartCoordinates);
		// if (e['targetTouches'] !== undefined) {
		// 	const touch = e.targetTouches[0];
		// 	swipeEndCoordinates.y = touch.screenY;
		// } else {
		// 	swipeEndCoordinates.y = e.screenY;
		// }
		// console.log('swipeEnd', swipeEndCoordinates);
		// setConsoleDomEnd(swipeEndCoordinates);
		action({
			dirX: 'NONE',
			dirY: 'NONE',
			valueX: 40,
			valueY: 40,
			moving: 3,
		});
	};

	//
	useEffect(() => {
		const controllerDom = document.querySelector('.swiper-wrapper');
		if (controllerDom !== null) {
			if (controllerDom !== null) {
				controllerDom.addEventListener('touchstart', (e: any) => swipeStart(e), false);
				controllerDom.addEventListener('touchmove', (e: any) => swipe(e), false);
				controllerDom.addEventListener('touchend', (e: any) => swipeEnd(e), false);
				console.log('add');
			}
		}
		return () => {
			if (controllerDom !== null) {
				controllerDom.removeEventListener('touchstart', (e: any) => swipeStart(e), false);
				controllerDom.removeEventListener('touchmove', (e: any) => swipe(e), false);
				controllerDom.removeEventListener('touchend', (e: any) => swipeEnd(e), false);
			}
		};
	}, []);

	return (
		<div className="swiper-wrapper">
			<pre>{JSON.stringify(consoleDomStart, null, 1)}</pre>
			<pre>{JSON.stringify(consoleDomCurrent, null, 1)}</pre>
		</div>
	);
};
export default SwipeController;
