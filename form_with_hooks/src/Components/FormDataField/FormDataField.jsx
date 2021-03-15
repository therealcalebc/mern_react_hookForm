import React from "react";
import styles from "./FormDataField.module.css";

const FormDataField = ({ fieldProps }) => {
	const { labelText, inputValue } = fieldProps;
	return (
		<div className={styles.FormDataField}>
			<label>{labelText}</label>
			<input type='text' value={inputValue} disabled />
		</div>
	);
};

export default FormDataField;
