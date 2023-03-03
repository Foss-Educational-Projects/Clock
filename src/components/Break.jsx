import Button from 'react-bootstrap/Button'
import { increaseBreak, decreaseBreak } from './../features/slice'
import { useSelector, useDispatch } from 'react-redux'

const Break = () => {
	const dispatch = useDispatch()
	const timeResumed = useSelector((state) => state.slice.resume)
	const rest = useSelector((state) => state.slice.break)
	return (
		<div className="break-section">
			<h3 className="break-section-title" id="break-label">
				Break Length
			</h3>
			<div className="break-section-settings">
				<Button
					{...(timeResumed
						? { disabled: true }
						: { disabled: false })}
					className="break-decrease"
					id="break-decrement"
					onClick={() => dispatch(decreaseBreak())}
				>
					<i className="fa-solid fa-minus"></i>
				</Button>
				<p className="values" id="break-length">
					{rest}
				</p>
				<Button
					{...(timeResumed
						? { disabled: true }
						: { disabled: false })}
					className="break-increase"
					id="break-increment"
					onClick={() => dispatch(increaseBreak())}
				>
					<i className="fa-solid fa-plus"></i>
				</Button>
			</div>
		</div>
	)
}
export default Break;