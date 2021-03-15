import React from "react";
import styles from "./FormDataViewer.module.css";
import FormDataField from "../FormDataField/FormDataField";

const FormDataViewer = ({ fields }) => {
	const {
		firstNameProps,
		lastNameProps,
		emailAddrProps,
		passwordProps,
		passwordConfProps,
	} = fields;

	return (
		<div className={styles.FormDataViewer}>
			<FormDataField fieldProps={firstNameProps} />
			<FormDataField fieldProps={lastNameProps} />
			<FormDataField fieldProps={emailAddrProps} />
			<FormDataField fieldProps={passwordProps} />
			<FormDataField fieldProps={passwordConfProps} />
		</div>
	);
};

export default FormDataViewer;
