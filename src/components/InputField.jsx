import React from "react";

function InputField({ value, name, changeValue, placeholder }) {
	return (
		<div>
			<input
				type="text"
				value={value}
				name={name}
				onChange={(e) => changeValue(e)}
				placeholder={placeholder}
			/>
		</div>
	);
}

export default InputField;
