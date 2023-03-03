import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import {
	countDown,
	resumeTimer,
	resetTimer
} from '../features/slice'

var resume = true
var interval
var duration = 1
const Control = () => {
	const dispatch = useDispatch()
	const resumeCountDown = () => {
		interval = setInterval(() => dispatch(countDown()), duration)
		resume = false
		dispatch(resumeTimer(true))
		console.log(resume + '0')
	}

	const stopCountDown = () => {
		clearInterval(interval)
		resume = true
		dispatch(resumeTimer(false))
		console.log(resume + '1')
	}

	const resetToDefault = () => {
		dispatch(resetTimer())
		resume=true
		clearInterval(interval)
	}
	return (
		<div className="timer-controls">
			<Button
				className="timer-start"
				id="start_stop"
				onClick={() => {
					resume === true
						? resumeCountDown()
						: stopCountDown()
				}}
			>
				<i className="fa-solid fa-play"></i>
			</Button>
			<Button
				className="timer-pause"
				onClick={() => {
					resume === undefined || resume === true
						? resumeCountDown()
						: stopCountDown()
				}}
			>
				<i className="fa-solid fa-pause"></i>
			</Button>
			<Button
				className="timer-reset"
				id="reset"
				onClick={resetToDefault}
			>
				<i className="fa-solid fa-arrows-rotate"></i>
			</Button>
		</div>
	)
}
export default Control;