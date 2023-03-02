import React, { useRef } from "react";
import Button from 'react-bootstrap/Button'

import { useSelector, useDispatch } from "react-redux";

import Logo from "./../assets/images/clock-2.png"

import Alarm from './../assets/audios/alarm.mp3';

import { increaseSession, decreaseSession, setSession } from "../features/sessionSlice";
import { increaseBreak, decreaseBreak, setBreak } from "../features/breakSlice";
import { countDown, resumeTimer, setCountDown, resetTimer } from "../features/timerSlice";

var resume = true
var interval;
var duration = 1;
const Clock = () => {
	const dispatch = useDispatch()
	const currentTimer = "Session";
	const session = useSelector(state => state.session.value)
	const rest = useSelector(state => state.break.value)
	const timeResumed = useSelector(state => state.time.resume);
	const min = useSelector(state => state.time.min)
	const sec = useSelector(state => state.time.sec)

	const resumeCountDown = () => {
		interval = setInterval(() => dispatch(countDown()), duration)
		resume = false;
		dispatch(resumeTimer(true))
		console.log(resume + "0")
	}
	const stopCountDown = () => {
		clearInterval(interval)
		resume = true;
		dispatch(resumeTimer(false))
		console.log(resume + "1")
	}

	const resetToDefault = () => {
		dispatch(setBreak(5))
		dispatch(setSession(25))
		dispatch(resetTimer())
	}
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
						<Button {...(timeResumed ? {disabled: true} : {disabled: false})} className="break-decrease" id="break-decrement" onClick={() => dispatch(decreaseBreak())}>
							<i className="fa-solid fa-minus"></i>
						</Button>
						<p className="values" id="break-length">{rest}</p>
						<Button {...(timeResumed ? {disabled: true} : {disabled: false})} className="break-increase" id="break-increment" onClick={() => dispatch(increaseBreak())}>
							<i className="fa-solid fa-plus"></i>
						</Button>
					</div>
				</div>
				<div className="session-section">
					<h3 className="session-section-title" id="session-label">Session Length</h3>
					<div className="session-section-settings">
						<Button {...(timeResumed ? {disabled: true} : {disabled: false})} className="session-decrease" id="session-decrement" onClick={() => dispatch(decreaseSession())}>
							<i className="fa-solid fa-minus"></i>
						</Button>
						<p className="values" id="session-length">{session}</p>
						<Button {...(timeResumed ? {disabled: true} : {disabled: false})} className="session-increase" id="session-increment" onClick={() => dispatch(increaseSession())}>
							<i className="fa-solid fa-plus"></i>
						</Button>
					</div>
				</div>
			</div>
			<div className="timer">
				<div className="timer-display">
					<h2 className="timer-header" id="timer-label">{currentTimer}</h2>
					<div className="timer-clock">
						<audio src={Alarm} id="bell" />
						<p id="time-left">{min}:{sec}</p>
					</div>
				</div>
				<div className="timer-controls">
					<Button className='timer-start' id="start_stop" onClick={() => { (resume === undefined || resume === true) ? resumeCountDown() : stopCountDown() }}>
						<i className="fa-solid fa-play"></i>
					</Button>
					<Button className='timer-pause' onClick={() => { (resume === undefined || resume === true) ? resumeCountDown() : stopCountDown() }}>
						<i className="fa-solid fa-pause"></i>
					</Button>
					<Button className='timer-reset' id="reset" onClick={resetToDefault}>
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
