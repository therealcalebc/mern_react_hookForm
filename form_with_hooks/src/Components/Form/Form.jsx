import React from "react";
import styles from "./Form.module.css";
import FormField from "../FormField/FormField";

const Form = (props) => {
	const validateLength = (
		inputValue = "",
		inputFieldLabel = "",
		{ minimumLength = 0 }
	) => {
		if (minimumLength > 0 && inputValue.length < minimumLength)
			return `${inputFieldLabel} must be at least ${minimumLength} characters!`;
		return "";
	};

	const validateLengthAndMatch = (
		inputValue = "",
		inputFieldLabel = "",
		{ minimumLength = 0, matchInputValue = "", matchFieldLabel = "" }
	) => {
		if (minimumLength > 0 && inputValue.length < minimumLength)
			return `${inputFieldLabel} must be at least ${minimumLength} characters!`;
		if (matchInputValue !== "" && inputValue !== matchInputValue)
			return `${inputFieldLabel} does not match ${matchFieldLabel}`;
		return "";
	};
	const {
		firstNameProps,
		lastNameProps,
		emailAddrProps,
		passwordProps,
		passwordConfProps,
	} = props.fields;
	firstNameProps.validation = {
		validate: validateLength,
		params: { minimumLength: 2 },
	};
	lastNameProps.validation = {
		validate: validateLength,
		params: { minimumLength: 2 },
	};
	emailAddrProps.validation = {
		validate: validateLength,
		params: { minimumLength: 5 },
	};
	passwordProps.validation = {
		validate: validateLengthAndMatch,
		params: {
			minimumLength: 8,
			matchInputValue: passwordConfProps.inputValue,
			matchFieldLabel: passwordConfProps.labelText,
		},
	};
	passwordConfProps.validation = {
		validate: validateLengthAndMatch,
		params: {
			minimumLength: 8,
			matchInputValue: passwordProps.inputValue,
			matchFieldLabel: passwordProps.labelText,
		},
	};
	return (
		<form className={styles.Form}>
			<FormField fieldProps={firstNameProps} />
			<FormField fieldProps={lastNameProps} />
			<FormField fieldProps={emailAddrProps} />
			<FormField fieldProps={passwordProps} />
			<FormField fieldProps={passwordConfProps} />
		</form>
	);
};

export default Form;
