import React from "react";
import { useRef } from "react";
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from "react-redux";

import { increaseBreak, decreaseBreak, resetBreak } from "../features/breakSlice";
import { increaseSession, decreaseSession, resetSession } from "../features/sessionSlice";
import { resumeTimer } from "../features/timerSlice";

import Logo from "./../assets/images/clock-2.png"
const Clock = () => {
	const sec = useRef(null);
	const min = useRef(null);
	let dataResumed = false;
	const breakValue = useSelector(state => state.break.value)
	const sessionValue = useSelector(state => state.session.value)
	const timerResumed = useSelector(state => state.timer.value)

	const dispatch = useDispatch();
	const resetAll = () => {
		dispatch(resetBreak())
		dispatch(resetSession())
	}
	const toggleTimer = () => {
		dispatch(resumeTimer(true))
		timerFeature();
		!dataResumed ? false : true;
		console.log(dataResumed)
	}
	const clockFeature = () => {
		if (parseInt(sec.current.textContent) < 9) {
			sec.current.textContent = `0${parseInt(sec.current.textContent) + 1}`;
		}
		else {
			sec.current.textContent = parseInt(sec.current.textContent) + 1;
		}
	}
	const timerFeature = () => {
		let timerInterval = setInterval(clockFeature, 1000)
		if (!dataResumed) {
			clearInterval(timerInterval)
		}
	}
	return (
		<div className="clock">
			<h1 className="clock-header">
				25 + 5 Clock
				<img id="clock-header-logo" src={Logo} alt="Clock Logo" />
			</h1>
			<div className="break-and-session">
				<div className="break-section">
					<h3 className="break-section-title">Break</h3>
					{(() => {
						if (timerResumed) {
							return (
								<div className="break-section-settings">
									<Button disabled={true} className="break-increase" onClick={() => dispatch(increaseBreak())}>
										<i className="fa-solid fa-plus"></i>
									</Button>
									<p className="values">{breakValue}</p>
									<Button disabled={true} className="break-decrease" onClick={() => dispatch(decreaseBreak())}>
										<i className="fa-solid fa-minus"></i>
									</Button>
								</div>
							)
						}
						else {
							return (
								<div className="break-section-settings">
									<Button className="break-increase" onClick={() => dispatch(increaseBreak())}>
										<i className="fa-solid fa-plus"></i>
									</Button>
									<p className="values">{breakValue}</p>
									<Button className="break-decrease" onClick={() => dispatch(decreaseBreak())}>
										<i className="fa-solid fa-minus"></i>
									</Button>
								</div>
							)
						}
					})()}
				</div>
				<div className="session-section">
					<h3 className="session-section-title">Session</h3>
					{(() => {
						if (timerResumed) {
							return (
								<div className="session-section-settings">
									<Button disabled={true} className="session-increase" onClick={() => dispatch(increaseSession())}>
										<i className="fa-solid fa-plus"></i>
									</Button>
									<p className="values">{sessionValue}</p>
									<Button disabled={true} className="session-decrease" onClick={() => dispatch(decreaseSession())}>
										<i className="fa-solid fa-minus"></i>
									</Button>
								</div>
							)
						}
						else {
							return (
								<div className="session-section-settings">
									<Button className="session-increase" onClick={() => dispatch(increaseSession())}>
										<i className="fa-solid fa-plus"></i>
									</Button>
									<p className="values">{sessionValue}</p>
									<Button className="session-decrease" onClick={() => dispatch(decreaseSession())}>
										<i className="fa-solid fa-minus"></i>
									</Button>
								</div>
							)
						}
					})()}
				</div>
			</div>
			<div className="timer">
				<div className="timer-display">
					<h2 className="timer-header">Remaining</h2>
					<div className="timer-clock">
						<p ref={min}>{sessionValue}</p>
						<p>:</p>
						<p ref={sec}>00</p>
					</div>
				</div>
				<div className="timer-controls">
					<Button className='timer-start' data-resumed={dataResumed} onClick={toggleTimer}>
						<i className="fa-solid fa-play"></i>
					</Button>
					<Button className='timer-pause' data-resumed={dataResumed} onClick={toggleTimer}>
						<i className="fa-solid fa-pause"></i>
					</Button>
					<Button className='timer-reset' onClick={resetAll}>
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
