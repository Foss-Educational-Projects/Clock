// React Bootstrap Imports
import Button from 'react-bootstrap/Button'

// React Icon Imports
import { LuPlay } from "react-icons/lu";
import { RiResetLeftLine } from "react-icons/ri";
import { IoPauseOutline } from "react-icons/io5";

// React Redux Imports
import { useDispatch } from 'react-redux'

// Redux Slice Imports
import {
	resetTimer,
	startTimer,
	pauseTimer,
	handleSessionTimer,
	handleBreakTimer
} from '../features/slice'
import { useState } from 'react';
import { useSelector } from 'react-redux';

// Root Component (Control)
const Control = () => {
	const dispatch = useDispatch()
	const rest = useSelector((state) => state.slice.rest)
	const [ start, setStart ] = useState(true)

	const handleStartTimer = () => {
		// setStart(!start)
		const interval = setInterval(() => {
			if(start) {
				clearInterval(interval)
				setStart(false)
			}
			setStart(true)
			clearInterval(interval)
			console.log("Interval Working")
				dispatch(handleSessionTimer())
				console.log("handleBreakTimer Working")
		}, 1000)
	}
	
	return (
		<div className="timer-controls">
			<Button
				className="timer-start"
				id="start_stop"
				onClick={handleStartTimer}
			>
				<LuPlay size={24} />
			</Button>
			<Button
				className="timer-pause"
				id='pause'
				onClick={() => dispatch(pauseTimer())}
			>
				<IoPauseOutline size={24} />
			</Button>
			<Button
				className="timer-reset"
				id="reset"
				onClick={() => dispatch(resetTimer())}
			>
				<RiResetLeftLine size={24} />
			</Button>
		</div>
	)
}
export default Control;