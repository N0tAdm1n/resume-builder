import React from "react";

function Resume({ data }) {
	return (
		<div>
			<p className="person__name">{data.personName}</p>
			<p className="person__age">{data.personAge}</p>
			<p className="person__email">{data.personEmail}</p>
			<p className="person__phone">{data.personPhone}</p>
		</div>
	);
}

export default Resume;
