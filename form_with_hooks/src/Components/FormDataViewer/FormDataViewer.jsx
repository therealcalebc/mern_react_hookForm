import React from "react";
import styles from "./FormDataViewer.module.css";
import FormDataField from "../FormDataField/FormDataField";

const FormDataViewer = (props) => {
	return (
		<div className={styles.FormDataViewer}>
			<FormDataField
				labelText='First Name:'
				valueString={props.firstName}
			/>
			<FormDataField
				labelText='Last Name:'
				valueString={props.lastName}
			/>
			<FormDataField
				labelText='Email:'
				valueString={props.emailAddress}
			/>
			<FormDataField labelText='Password:' valueString={props.password} />
			<FormDataField
				labelText='Confirm Password:'
				valueString={props.confirmPassword}
			/>
		</div>
	);
};

export default FormDataViewer;
