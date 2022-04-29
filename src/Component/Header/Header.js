import React, { Component } from "react";
import Button from "../Button/Button";
class Header extends Component {
	handleKeyPress = event => {
		if (event.key === "Enter") {
			console.log("enter press here! ");
		}
	};

	render() {
		return (
			<header>
				<input
					id='input'
					type='text'
					onKeyPress={this.handleKeyPress}
					placeholder='Film Suchen'
				/>
				{/* <Button /> */}
			</header>
		);
	}
}

export default Header;
