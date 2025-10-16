import { useSelector } from 'react-redux'

import Alarm from './../assets/audios/alarm.mp3'
import Control from './Control'

const Timer = () => {
	const rest = useSelector(state => state.slice.rest)
	const sessionMinutes = useSelector((state) => state.slice.sessionMinutes)
	const sessionSeconds = useSelector((state) => state.slice.sessionSeconds)
	const breakMinutes = useSelector((state) => state.slice.breakMinutes)
	const breakSeconds = useSelector((state) => state.slice.breakSeconds)

	return (
		<div className="timer">
			<div className="timer-display">
				<h2 className="timer-header" id="timer-label">
					{rest ? 'Break' : 'Session'}
				</h2>
				<div className="timer-clock">
					<audio preload="auto" src={Alarm} id="bell" />
					{
						rest ? 
							<p id="time-left">
								<b className='time__minutes'>
									{breakMinutes < 10 ? '0' + breakMinutes : breakMinutes}
								</b>
								:
								<b className='time__seconds'>
									{breakSeconds < 10 ? '0' + breakSeconds : breakSeconds}
								</b>
							</p>
							:
							<p id="time-left">
								<b className='time__minutes'>
									{sessionMinutes < 10 ? '0' + sessionMinutes : sessionMinutes}
								</b>
								:
								<b className='time__seconds'>
									{sessionSeconds < 10 ? '0' + sessionSeconds : sessionSeconds}
								</b>
							</p>
					}
					
				</div>
			</div>
			<Control />
		</div>
	)
}
export default Timer;