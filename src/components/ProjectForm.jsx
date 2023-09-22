import React from "react";

function ProjectForm({ projectData, changeProjectName, id }) {
	return (
		<div>
			<input
				type="text"
				placeholder="Project-Name"
				onChange={(e) => changeProjectName(e.target.value, id)}
				value={projectData[id]}
			/>
		</div>
	);
}

export default ProjectForm;
