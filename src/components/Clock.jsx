import React from "react";
import Logo from "./../assets/images/clock-2.png"
const Clock = () => {
	const text = 0;
	return (
		<div className="clock">
			<h1 className="clock-header">
			25 + 5 Clock
			<img id="clock-header-logo" src={Logo} alt="Clock Logo" />
			</h1>
			<div className="break-and-session">
				<div className="break-section">
					<h3 className="break-section-title">Break</h3>
					<div className="break-section-settings">
						<button className="break-increase"><i className="fa-solid fa-plus"></i></button>
						<p className="values">{text}</p>
						<button className="break-decrease"><i className="fa-solid fa-minus"></i></button>
					</div>
				</div>
				<div className="session-section">
					<h3 className="session-section-title">Session</h3>
					<div className="session-section-settings">
						<button className="session-increase"><i className="fa-solid fa-plus"></i></button>
						<p className="values">{text}</p>
						<button className="session-decrease"><i className="fa-solid fa-minus"></i></button>
					</div>
				</div>
			</div>
			<div className="timer">
				<div className="timer-display">
					<h2 className="timer-header">Remaining</h2>
					<div className="timer-clock">
					25:00
					</div>
				</div>
				<div className="timer-controls">
					<button className='timer-start'><i className="fa-solid fa-play"></i></button>
					<button className='timer-pause'><i className="fa-solid fa-pause"></i></button>
					<button className='timer-reset'><i className="fa-solid fa-arrows-rotate"></i></button>
				</div>
			</div>
			<footer className="clock-footer">
				Developed By <strong>Foster Z</strong>
			</footer>
		</div>
	);
};
export default Clock;
