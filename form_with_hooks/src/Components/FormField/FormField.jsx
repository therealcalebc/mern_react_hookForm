import React, { useState } from "react";
import styles from "./FormField.module.css";

const FormField = ({ fieldProps }) => {
	const {
		forId,
		labelText,
		inputValue,
		setInputValue,
		validation: { validate, params },
	} = fieldProps;

	const [errMsg, setErrMsg] = useState("");

	const onInputChange = (e) => {
		setInputValue(e.target.value);
		const eM = validate(e.target.value, labelText, params);
		setErrMsg(eM);
	};

	return (
		<div className={styles.FormField}>
			<div>
				<label htmlFor={forId}>{labelText}:</label>
				<input
					type='text'
					id={forId}
					onChange={onInputChange}
					value={inputValue}
				/>
			</div>
			{errMsg !== "" ? <p className={styles.errMsg}>{errMsg}</p> : ""}
		</div>
	);
};

export default FormField;
