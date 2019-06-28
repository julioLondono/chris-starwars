import React from "react";
import "../../styles/home.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
export class Details extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	render() {
		const index = parseInt(this.props.match.params.theid);
		const type = this.props.match.params.type;

		return (
			<Context.Consumer>
				{({ store }) => {
					const list = type === "people" ? store.people : store.planets;
					return (
						<div>
							<div className="container-fluid text-center mt-5">
								<div className="row justify-content">
									<div className="col-6">
										<img
											alt=""
											src="data:image/jpeg;base64,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"
										/>
									</div>
								</div>
								<div className="col-6">
									<h3>{list[index].name}</h3>
									{console.log(index)}
									<p />
								</div>
								<div className="container">
									<div className="row">
										<div className="col-2">
											{" "}
											<p>
												{" "}
												{type === "people" ? "gender" : "Population"}{" "}
												<p>{type === "people" ? list[index].gender : list[index].population}</p>
											</p>{" "}
										</div>
										<div className="col-2">
											{" "}
											<p>
												{type === "people" ? "height" : "orbital_period"}{" "}
												<p>
													{type === "people"
														? list[index].height
														: list[index].orbital_period}
												</p>
											</p>{" "}
										</div>
										<div className="col-2">
											{" "}
											<p>
												{" "}
												{type === "people" ? "hair_color" : "climate"}{" "}
												<p>
													{type === "people" ? list[index].hair_color : list[index].climate}
												</p>
											</p>{" "}
										</div>
										<div className="col-2">
											{" "}
											<p>
												{" "}
												{type === "people" ? "birth_year" : "diameter"}{" "}
												<p>
													{type === "people" ? list[index].birth_year : list[index].diameter}
												</p>
											</p>{" "}
										</div>
										<div className="col-2">
											{" "}
											<p>
												{" "}
												{type === "people" ? "eye_color" : "gravity"}{" "}
												<p>{type === "people" ? list[index].eye_color : list[index].gravity}</p>
											</p>{" "}
										</div>
										<div className="col-2">
											{" "}
											<p>
												{" "}
												{type === "people" ? "skin_color" : "terrain"}{" "}
												<p>
													{type === "people" ? list[index].skin_color : list[index].terrain}
												</p>
											</p>{" "}
										</div>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}
Details.propTypes = {
	match: PropTypes.object
};
