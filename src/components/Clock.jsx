import React from "react";
import Button from 'react-bootstrap/Button'

import { useSelector, useDispatch } from "react-redux";

import Logo from "./../assets/images/clock-2.png"

import Alarm from './../assets/audios/alarm.mp3';

import { increaseSession, decreaseSession } from "../features/sessionSlice";

const Clock = () => {
	const dispatch = useDispatch();
	const session = useSelector(state => state.session.value)
	const min = useSelector(state => state.time.min)
	const sec = useSelector(state => state.time.sec)

	return (
		<div className="clock">
			<h1 className="clock-header">
				25 + 5 Clock
				<img id="clock-header-logo" src={Logo} alt="Clock Logo" />
			</h1>
			<div className="break-and-session">
				<div className="break-section">
					<h3 className="break-section-title" id="break-label">Break Length</h3>
					<div className="break-section-settings">
						<Button className="break-decrease" id="break-decrement">
							<i className="fa-solid fa-minus"></i>
						</Button>
						<p className="values" id="break-length">5</p>
						<Button className="break-increase" id="break-increment">
							<i className="fa-solid fa-plus"></i>
						</Button>
					</div>
				</div>
				<div className="session-section">
					<h3 className="session-section-title" id="session-label">Session Length</h3>
					<div className="session-section-settings">
						<Button className="session-decrease" id="session-decrement" onClick={() => dispatch(decreaseSession())}>
							<i className="fa-solid fa-minus"></i>
						</Button>
						<p className="values" id="session-length">{session}</p>
						<Button className="session-increase" id="session-increment" onClick={() => dispatch(increaseSession())}>
							<i className="fa-solid fa-plus"></i>
						</Button>
					</div>
				</div>
			</div>
			<div className="timer">
				<div className="timer-display">
					<h2 className="timer-header" id="timer-label">Session</h2>
					<div className="timer-clock">
						<p id="time-left">{min}:{sec}</p>
					</div>
				</div>
				<div className="timer-controls">
					<Button className='timer-start' id="start_stop">
						<i className="fa-solid fa-play"></i>
					</Button>
					<Button className='timer-pause'>
						<i className="fa-solid fa-pause"></i>
					</Button>
					<Button className='timer-reset' id="reset">
						<i className="fa-solid fa-arrows-rotate"></i>
					</Button>
				</div>
			</div>
			<footer className="clock-footer">
				Developed By <strong>Foster Z</strong>
			</footer>
		</div>
	);
};
export default Clock;
