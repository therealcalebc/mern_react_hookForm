import React from "react";
import styles from "./Form.module.css";
import FormField from "../FormField/FormField";

const Form = (props) => {
	return (
		<form className={styles.Form}>
			<FormField
				forId={props.forIds[0]}
				labelText={props.labelTexts[0]}
				onInputChange={(e) => props.onInputChanges[0](e.target.value)}
				inputValue={props.inputValues[0]}
			/>
			<FormField
				forId={props.forIds[1]}
				labelText={props.labelTexts[1]}
				onInputChange={(e) => props.onInputChanges[1](e.target.value)}
				inputValue={props.inputValues[1]}
			/>
			<FormField
				forId={props.forIds[2]}
				labelText={props.labelTexts[2]}
				onInputChange={(e) => props.onInputChanges[2](e.target.value)}
				inputValue={props.inputValues[2]}
			/>
			<FormField
				forId={props.forIds[3]}
				labelText={props.labelTexts[3]}
				onInputChange={(e) => props.onInputChanges[3](e.target.value)}
				inputValue={props.inputValues[3]}
			/>
			<FormField
				forId={props.forIds[4]}
				labelText={props.labelTexts[4]}
				onInputChange={(e) => props.onInputChanges[4](e.target.value)}
				inputValue={props.inputValues[4]}
			/>
		</form>
	);
};

export default Form;
