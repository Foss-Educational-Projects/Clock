import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from "react-redux";
import { increaseSession, decreaseSession } from "../features/slice";

const Session = () => {
	const dispatch = useDispatch()
	const timeResumed = useSelector((state) => state.slice.resume)
	const session = useSelector((state) => state.slice.session)
	return (
		<div className="session-section">
			<h3 className="session-section-title" id="session-label">
				Session Length
			</h3>
			<div className="session-section-settings">
				<Button
					{...(timeResumed
						? { disabled: true }
						: { disabled: false })}
					className="session-decrease"
					id="session-decrement"
					onClick={() => dispatch(decreaseSession())}
				>
					<i className="fa-solid fa-minus"></i>
				</Button>
				<p className="values" id="session-length">
					{session}
				</p>
				<Button
					{...(timeResumed
						? { disabled: true }
						: { disabled: false })
					}
					className="session-increase"
					id="session-increment"
					onClick={() => dispatch(increaseSession())}
				>
					<i className="fa-solid fa-plus"></i>
				</Button>
			</div>
		</div>
	)
}
export default Session;