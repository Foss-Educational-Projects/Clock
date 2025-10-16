import Button from 'react-bootstrap/Button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux";
import { handleSessionIncrement, handleSessionDecrement } from "../features/slice";

const Session = () => {
	const dispatch = useDispatch()
	const minutes = useSelector((state) => state.slice.sessionMinutes)
	return (
		<div className="session-section">
			<h3 className="session-section-title" id="session-label">
				Session Length
			</h3>
			<div className="session-section-settings">
				<Button
					className="session-decrease"
					id="session-decrement"
					onClick={() => dispatch(handleSessionDecrement())}
				>
					<FaMinus size={24} />
				</Button>
				<p className="values" id="session-length">
					{minutes < 10 ? '0' + minutes : minutes}
				</p>
				<Button
					className="session-increase"
					id="session-increment"
					onClick={() => dispatch(handleSessionIncrement())}
				>
					<FaPlus size={24} />
				</Button>
			</div>
		</div>
	)
}
export default Session;