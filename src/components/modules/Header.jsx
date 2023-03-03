import Logo from './../../assets/images/clock-2.png'

const Header = () => {
	return (
		<h1 className="clock-header">
			25 + 5 Clock
			<img id="clock-header-logo" src={Logo} alt="Clock Logo" />
		</h1>
	)
}
export default Header;