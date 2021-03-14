import React, { useState } from "react";
import Form from "../Form/Form";
import FormDataViewer from "../FormDataViewer/FormDataViewer";

const HookForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddr, setEmailAddr] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConf, setPasswordConf] = useState("");

	const formFieldProps = {
		firstNameProps: {
			forId: "firstNameInput",
			labelText: "First Name",
			inputValue: firstName,
			setInputValue: setFirstName,
		},
		lastNameProps: {
			forId: "lastNameInput",
			labelText: "Last Name",
			inputValue: lastName,
			setInputValue: setLastName,
		},
		emailAddrProps: {
			forId: "emailAddrInput",
			labelText: "Email",
			inputValue: emailAddr,
			setInputValue: setEmailAddr,
		},
		passwordProps: {
			forId: "passwordInput",
			labelText: "Password",
			inputValue: password,
			setInputValue: setPassword,
		},
		passwordConfProps: {
			forId: "passwordConfInput",
			labelText: "Confirm Password",
			inputValue: passwordConf,
			setInputValue: setPasswordConf,
		},
	};

	return (
		<>
			<Form fields={formFieldProps} />
			<FormDataViewer
				firstName={firstName}
				lastName={lastName}
				emailAddr={emailAddr}
				password={password}
				passwordConf={passwordConf}
			/>
		</>
	);
};

export default HookForm;
