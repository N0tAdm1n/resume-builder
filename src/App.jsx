import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InfoForm from "./components/InfoForm";

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
		</>
	);
}

export default App;
