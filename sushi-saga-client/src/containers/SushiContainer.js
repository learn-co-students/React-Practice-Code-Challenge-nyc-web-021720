import React, { Fragment } from "react";
import Sushi from "../components/Sushi";
import MoreButton from "../components/MoreButton";

const SushiContainer = (props) => {
	return (
		<Fragment>
			<div className="belt">
				{props.sushis.map((sushi) => {
					return (
						<Sushi
							sushi={sushi}
							key={sushi.id}
							eatSushi={props.eatSushi}
							eaten={props.eaten}
						/>
					);
				})}
				<MoreButton getNextSushis={props.getNextSushis} />
			</div>
		</Fragment>
	);
};

export default SushiContainer;
