import React, { Component } from "react";

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
			</header>
		);
	}
}

export default Header;
