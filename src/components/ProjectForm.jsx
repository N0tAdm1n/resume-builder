import React from "react";

function ProjectForm({
	projectData,
	changeProjectName,
	id,
	changeProjectDescription,
}) {
	return (
		<div>
			<input
				type="text"
				placeholder="Project-Name"
				onChange={(e) => changeProjectName(e.target.value, id)}
			/>
			<input
				type="text"
				placeholder="Project-Description"
				onChange={(e) => changeProjectDescription(e.target.value, id)}
			/>
		</div>
	);
}

export default ProjectForm;
