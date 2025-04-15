import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home=() => {

		const [selectedColor, setSelectedColor] = useState("yellow");

	return (
		<div className="card">
			<div className="traffic-light">
				<div className={"light red" + ((selectedColor === "red") ? " glow" : "")}></div>
				<div className={"light yellow" + ((selectedColor === "yellow") ? " glow" : "")}></div>
				<div className={"light green" + ((selectedColor === "green") ? " glow" : "")}></div>
			</div>
		</div>
	);
};

export default Home;


