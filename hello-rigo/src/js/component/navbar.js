import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export class Navbar extends React.Component {
	state = {
		isOpen: false
	};

	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

	render() {
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="btn-group" onClick={this.toggleOpen}>
						<button
							type="button"
							className="btn btn-secondary dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false">
							Favorites
						</button>
						<div className={menuClass}>
							<Context.Consumer>
								{({ store }) => {
									return store.favorites.map((favorites, index) => {
										return (
											<a key={index} className="dropdown-item">
												{" "}
												{favorites.name}{" "}
											</a>
										);
									});
								}}
							</Context.Consumer>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}
