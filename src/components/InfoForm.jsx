import React from "react";
import InputField from "./InputField";

function InfoForm({ formData, changeValue }) {
	return (
		<div>
			<InputField
				value={formData.personName}
				name="personName"
				placeholder="Name"
				changeValue={changeValue}
			/>
			<InputField
				value={formData.personAge}
				name="personAge"
				placeholder="Age"
				changeValue={changeValue}
			/>
			<InputField
				value={formData.personEmail}
				name="personEmail"
				placeholder="Email"
				changeValue={changeValue}
			/>
			<InputField
				value={formData.personPhone}
				name="personPhone"
				placeholder="Phone"
				changeValue={changeValue}
			/>
		</div>
	);
}

export default InfoForm;
