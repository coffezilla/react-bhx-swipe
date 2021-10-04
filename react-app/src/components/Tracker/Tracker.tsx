/* eslint-disable */
import { useEffect, useState } from 'react';
import moment from 'moment';

const Tracker = () => {
	let widthBar = 0;
	const [timelineBarSize, setTimelineBarSize] = useState<any>(widthBar);

	const totalTime = 30;
	const trailEvents: any[] = [];
	let currentEvent = 0;
	// let currentEventBar = 0;
	const allEvents = [
		{ from: 1, goal: 0, message: '1lancamento' },
		{ from: 2, goal: 0, message: '2lancamento' },
		{ from: 1, goal: 1, message: '3gol' },
		{ from: 2, goal: 0, message: '4lancamento' },
		{ from: 2, goal: 1, message: '5gol' },
		{ from: 1, goal: 0, message: '6lancamento' },
		{ from: 1, goal: 1, message: '7gol' },
		{ from: 2, goal: 0, message: '8lancamento' },
		{ from: 2, goal: 0, message: '9lancamento' },
		{ from: 2, goal: 0, message: '10lancamento' },
	];

	let startDate = new Date('09-16-2021 01:23:45');
	let startDateFormated = moment(startDate).format('MM/DD/YYYY HH:mm:ss');

	const widthtimelineBarPercentage = 96.3 / totalTime;
	const totalEvents = allEvents.length;
	const secondsDiff = Math.floor(totalTime / totalEvents);

	const currentDate = new Date();
	const myNewDate = moment(currentDate).format('MM/DD/YYYY HH:mm:ss');

	const timelineCurrentTime = moment(currentDate).diff(startDateFormated, 'seconds');

	const secondsBetweenMatchEvent = 30 / totalEvents;

	const endDateFormated = moment(startDateFormated)
		.add(totalTime, 'seconds')
		.format('MM/DD/YYYY HH:mm:ss');

	// put all events into an array
	for (let i = 0; i < totalEvents; i += 1) {
		const endDate = moment(startDateFormated)
			.add(secondsDiff, 'seconds')
			.format('MM/DD/YYYY HH:mm:ss');
		startDateFormated = endDate;
		trailEvents.push(endDate);
	}

	const executeMatchEvent = (currentDate: any) => {
		const myNewDate = currentDate;
		if (trailEvents.includes(myNewDate)) {
			console.log('MATCH EVENT', currentEvent);
			// console.log('DONE', currentEvent, allEvents[currentEvent].message);
			currentEvent += 1;
		} else {
			console.log('SECOND', timelineCurrentTime);
			widthBar += widthtimelineBarPercentage;
			setTimelineBarSize(widthBar);
		}
	};

	const checkMatchEventLoop = () => {
		const currentDate = new Date();
		const myNewDate = moment(currentDate).format('MM/DD/YYYY HH:mm:ss');

		if (endDateFormated > myNewDate) {
			setTimeout(() => {
				executeMatchEvent(myNewDate);
				checkMatchEventLoop();
			}, 1000);
		} else {
			console.log('Acabou');
		}
	};

	const startMatch = () => {
		console.log('start match');

		// setInterval(() => {
		// 	console.log('fuck', widthtimelineBarPercentage);
		// 	widthBar += widthtimelineBarPercentage;
		// 	setTimelineBarSize(widthBar);
		// }, 1000);

		// current events
		currentEvent = Math.floor(timelineCurrentTime / secondsBetweenMatchEvent);
		currentEvent = currentEvent < 0 ? 0 : currentEvent;
		console.log(currentEvent);

		// current bar
		widthBar = widthtimelineBarPercentage * timelineCurrentTime;

		// // post past events
		trailEvents.forEach((date) => {
			if (date <= myNewDate) {
				executeMatchEvent(date);
			}
		});
		checkMatchEventLoop();
	};

	useEffect(() => {
		startMatch();
	}, []);

	return (
		<>
			<h1>Tracker</h1>
			{/* <pre>{JSON.stringify(formHour, null, 1)}</pre> */}
			{/* <pre>{moment('11-24-1989').format('DD/MM/YYYY')}</pre> */}

			<form>
				{/* <p>Hora:</p>
				<input type="text" name="hour" onChange={handleChange} />
				<p>Minuto:</p>
				<input type="text" name="minute" onChange={handleChange} />
				<p>segundo:</p>
				<input type="text" name="second" onChange={handleChange} /> */}
				<div id="timeline_events">
					<div id="timeline_events__bar" style={{ width: `${timelineBarSize}%` }}></div>
					<ul>
						<li>COMEÇOU</li>
						<li>1</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>

						<li>6</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>

						<li>11</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>

						<li>16</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>

						<li>21</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>

						<li>26</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>Segundo</li>
						<li>FINAL</li>
					</ul>
				</div>

				<button type="button" onClick={startMatch}>
					Iniciar partida
				</button>
			</form>
		</>
	);
};

export default Tracker;
