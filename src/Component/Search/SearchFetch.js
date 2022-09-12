import Button from "../Button/Button";
import React, { Component } from "react";
import { Link } from "react-router-dom";

let searchArray = "";

class SearchFetch extends Component {
	constructor(props) {
		super(props);
		this.state = { search: [] };
	}

	componentDidMount() {
		let input = document.getElementById("input").value;
		searchArray = input;
		console.log(searchArray);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=14a38df4244c367a387400bb64bbcc05&query=${searchArray}`,
		)
			.then(response => response.json())
			.then(json => this.setState({ search: json.results }));
		console.log("test");
	}

	search = () => {
		let input = document.getElementById("input").value;
		searchArray = input;
		console.log(searchArray);
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=14a38df4244c367a387400bb64bbcc05&query=${searchArray}`,
		)
			.then(response => response.json())
			.then(json => this.setState({ search: json.results }));
		console.log("test");
	};

	render() {
		return (
			<div>
				<Button search={this.search} />
				<div class='homeBtnBack'>
					<Link to='/'>
						<button>Home</button>
					</Link>
				</div>
				<div class='h2Section'>
					<h2>Alle Filme</h2>
				</div>
				<section className='searchSectionMain'>
					{this.state.search.map(e => (
						<div className='searchSection'>
							<p>{e.release_date}</p>
							<p className='votingSearch'>{e.vote_average}</p>
							<img
								className='homeImg'
								src={`https://image.tmdb.org/t/p/w200${e.poster_path}`}
								alt=''
							/>
							<p style={{ marginTop: "20px" }}>{e.title}</p>
							<button className='btnLink'>
								<Link className='Link' to={`/details/${e.id}`}>
									Watch Trailer
								</Link>
							</button>
						</div>
					))}
				</section>
			</div>
		);
	}
}

export default SearchFetch;
