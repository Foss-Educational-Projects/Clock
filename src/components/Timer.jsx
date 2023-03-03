import { useSelector } from 'react-redux'

import Alarm from './../assets/audios/alarm.mp3'
import Control from './Control'

const Timer = () => {
    const currentTimer = useSelector(state => state.slice.timerType)
    const min = useSelector((state) => state.slice.min)
    const sec = useSelector((state) => state.slice.sec)

	return (
		<div className="timer">
			<div className="timer-display">
				<h2 className="timer-header" id="timer-label">
					{currentTimer}
				</h2>
				<div className="timer-clock">
					<audio preload="auto" src={Alarm} id="bell" />
					<p id="time-left">
						{min}:{sec}
					</p>
				</div>
			</div>
			<Control />
		</div>
	)
}
export default Timer;