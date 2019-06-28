import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
export const Card = props => {
	return (
		<div className="col-lg-3 col-md-6 mb-4">
			<div className="card h-100">
				<img className="card-img-top" src={props.images} alt="" />

				<div className="card-body">
					<p className="card-title">
						Full name:
						{props.name} <br />
						{props.type === "people" ? "Gender" : "Population"}:{""}
						{props.otherInfo}
					</p>
					<p className="card-text">
						{props.gender}
						{props.population}
					</p>
				</div>
				<div className="card-footer">
					<Link to={"/details/" + props.type + "/" + props.camel}>
						<button className="btn btn-primary"> Details </button>
					</Link>
					<Context.Consumer>
						{({ actions }) => {
							return (
								<button
									className="ml-3 btn btn-primary"
									onClick={() => actions.addToFavorites(props.cricket)}>
									{" "}
									Add to Favorites!{" "}
								</button>
							);
						}}
					</Context.Consumer>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	button: PropTypes.string,
	images: PropTypes.string,
	name: PropTypes.string,
	gender: PropTypes.string,
	population: PropTypes.string,
	camel: PropTypes.number,
	type: PropTypes.string,
	otherInfo: PropTypes.string,
	cricket: PropTypes.object,
	height: PropTypes.string,
	hair_color: PropTypes.string,
	climate: PropTypes.string,
	diameter: PropTypes.string,
	gravity: PropTypes.string,
	orbital_period: PropTypes.string,
	residents: PropTypes.string,
	rotation_period: PropTypes.string,
	surface_water: PropTypes.string,
	terrain: PropTypes.string,
	birth_year: PropTypes.string,
	eye_color: PropTypes.string,
	homeworld: PropTypes.string,
	mass: PropTypes.string,
	skin_color: PropTypes.string,
	species: PropTypes.string
};
