import React from "react";
import styles from "./FormDataField.module.css";

const FormDataField = (props) => {
	return (
		<div className={styles.FormDataField}>
			<label>{props.labelText}</label>
			<input type='text' value={props.valueString} disabled />
		</div>
	);
};

export default FormDataField;
