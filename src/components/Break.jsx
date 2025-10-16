// React Bootstrap Imports
import Button from 'react-bootstrap/Button'

import { FaMinus, FaPlus } from 'react-icons/fa'
import { handleBreakIncrement, handleBreakDecrement } from './../features/slice'
import { useSelector, useDispatch } from 'react-redux'

const Break = () => {
	const dispatch = useDispatch()
	const minutes = useSelector((state) => state.slice.breakMinutes)
	return (
		<div className="break-section">
			<h3 className="break-section-title" id="break-label">
				Break Length
			</h3>
			<div className="break-section-settings">
				<Button
					className="break-decrease"
					id="break-decrement"
					onClick={() => dispatch(handleBreakDecrement())}
				>
					<FaMinus size={24} />
				</Button>
				<p className="values" id="break-length">
					{minutes < 10 ? '0' + minutes : minutes}
				</p>
				<Button
					className="break-increase"
					id="break-increment"
					onClick={() => dispatch(handleBreakIncrement())}
				>
					<FaPlus size={24} />
				</Button>
			</div>
		</div>
	)
}
export default Break;