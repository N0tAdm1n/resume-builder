import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InfoForm from "./components/InfoForm";
import Resume from "./components/Resume";

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

	return (
		<>
			<InfoForm
				formData={personalData}
				changeValue={changeValue}
			/>
			<Resume data={personalData} />
		</>
	);
}

export default App;
