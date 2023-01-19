import React from "react";

const Clock = () => {
	return (
		<div className="clock">
			<h1>25 + 5 Clock</h1>
			<div className="break-and-session">
				<div className="break-section">
					<h3 className="break-section-title">Break</h3>
					<div className="break-section-settings">
						<button className="break-increase"><i class="fa-solid fa-plus"></i></button>
						<p>break-value</p>
						<button className="break-decrease"><i class="fa-solid fa-minus"></i></button>
					</div>
				</div>
				<div className="session-section">
					<h3 className="session-section-title">Session</h3>
					<div className="session-section-settings">
						<button className="session-increase"><i class="fa-solid fa-plus"></i></button>
						<p>break-value</p>
						<button className="session-decrease"><i class="fa-solid fa-minus"></i></button>
					</div>
				</div>
			</div>
			<div className="timer">
				<div className="timer-display">
					<h2 className="timer-header">Session</h2>
					<div className="timer-clock">25:00</div>
				</div>
				<div className="timer-controls">
					<button className='timer-start'><i class="fa-solid fa-play"></i></button>
					<button className='timer-pause'><i class="fa-solid fa-pause"></i></button>
					<button className='timer-reset'><i class="fa-solid fa-arrows-rotate"></i></button>
				</div>
			</div>
			<footer>
				Developed By <strong>Foster Z</strong>
			</footer>
		</div>
	);
};
export default Clock;
