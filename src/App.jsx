import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InfoForm from "./components/InfoForm";
import Resume from "./components/Resume";
import ProjectForm from "./components/ProjectForm";

function App() {
	const [personalData, setPersonalData] = useState({
		personName: "Shamir",
		personAge: "",
		personEmail: "",
		personPhone: "",
	});

	function changeValue(e) {
		setPersonalData((prevData) => {
			return {
				...prevData,
				[e.target.name]: e.target.value,
			};
		});
	}

	const [projectData, setProjectData] = useState([]);
	const [projectFormList, setProjectFormList] = useState([]);

	function handleNewProject() {
		setProjectFormList((prevComponents) => {
			return [
				...prevComponents,
				<ProjectForm
					key={projectFormList.length}
					changeProjectName={changeProjectName}
					projectData={projectData}
					index={projectData.length}
				/>,
			];
		});

		setProjectData((prevData) => {
			return [
				...prevData,
				{
					id: projectData.length,
					name: "",
				},
			];
		});
	}

	function changeProjectName(value, id) {
		setProjectData((prevData) => {
			return prevData.map((project) => {
				if (project.id == id) {
					return {
						...project,
						name: value,
					};
				} else {
					return project;
				}
			});
		});
	}

	console.log(projectData);

	return (
		<>
			<InfoForm
				formData={personalData}
				changeValue={changeValue}
			/>
			{projectFormList}
			<button onClick={handleNewProject}>Add Project</button>
			<Resume data={personalData} />
			{projectData.map((project) => (
				<p>{project.name}</p>
			))}
		</>
	);
}

export default App;
