interface IProps {
	controller: any;
}
const Airship = ({ controller }: IProps) => {
	const airShip = document.querySelector('.airship');
	// let currentYPosition: number = 0;
	// let currentXPosition: number = 0;
	// let currentYPosition = 0;
	// if (airShip instanceof HTMLElement) {
	// 	currentYPosition = parseInt(airShip?.style.top);
	// 	currentXPosition = parseInt(airShip?.style.left);
	// }
	// if (document !== null) {
	const dirY = controller.valueY;
	const dirX = controller.valueX;
	// console.log('ministro', currentYPosition, controller.valueY);
	// const dirY = document.querySelector('.airship').left;
	// }
	// const topPosition = controller.valueY;
	return (
		<div className="airship" style={{ top: `${dirY}px`, left: `${dirX}px` }}>
			<pre style={{ fontSize: '1rem' }}>{JSON.stringify(controller, null, 1)}</pre>
		</div>
	);
};

export default Airship;
