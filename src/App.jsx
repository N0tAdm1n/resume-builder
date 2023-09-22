import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InfoForm from "./components/InfoForm";
import Resume from "./components/Resume";
import ProjectForm from "./components/ProjectForm";
import { uid } from "uid";

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
		let id = uid();

		setProjectFormList((prevComponents) => {
			return [
				...prevComponents,
				<ProjectForm
					key={id}
					changeProjectName={changeProjectName}
					changeProjectDescription={changeProjectDescription}
					projectData={projectData}
					id={id}
				/>,
			];
		});

		setProjectData((prevData) => {
			return [
				...prevData,
				{
					id: id,
					name: "",
					time: "",
					description: "1",
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

	function changeProjectDescription(value, id) {
		setProjectData((prevData) => {
			return prevData.map((project) => {
				if (project.id == id) {
					return {
						...project,
						description: value,
					};
				} else {
					return project;
				}
			});
		});
	}

	return (
		<>
			<InfoForm
				formData={personalData}
				changeValue={changeValue}
			/>
			{projectFormList}
			<button onClick={handleNewProject}>Add Project</button>
			<Resume data={personalData} />
			{/* output */}
			{projectData.map((project) => {
				return (
					<div>
						<p>{project.name}</p>
						<p>{project.description}</p>
					</div>
				);
			})}
		</>
	);
}

export default App;
