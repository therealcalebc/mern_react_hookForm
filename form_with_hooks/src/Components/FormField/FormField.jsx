import React from "react";
import styles from "./FormField.module.css";

const FormField = (props) => {
	return (
		<div className={styles.FormField}>
			<label htmlFor={props.forId}>{props.labelText}</label>
			<input
				type='text'
				id={props.forId}
				onChange={props.onInputChange}
				value={props.inputValue}
			/>
		</div>
	);
};

export default FormField;
