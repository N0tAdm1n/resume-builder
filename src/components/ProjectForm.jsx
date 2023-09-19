import React from "react";

function ProjectForm({ projectData, changeProjectName, index }) {
	return (
		<div>
			<input
				type="text"
				placeholder="Project-Name"
				onChange={(e) => changeProjectName(e.target.value, index)}
				value={projectData[index]}
			/>
		</div>
	);
}

export default ProjectForm;
