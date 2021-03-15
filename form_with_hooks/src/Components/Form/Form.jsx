import React from "react";
import styles from "./Form.module.css";
import FormField from "../FormField/FormField";

const Form = ({ fields }) => {
	const {
		firstNameProps,
		lastNameProps,
		emailAddrProps,
		passwordProps,
		passwordConfProps,
	} = fields;

	const lengthValidator = (
		inputValue = "",
		inputFieldLabel = "",
		{ required = false, minimumLength = 0 }
	) => {
		if (inputValue === "") {
			if (required === true) return `${inputFieldLabel} is required`;
			else return "";
		}
		if (minimumLength > 0 && inputValue.length < minimumLength)
			return `${inputFieldLabel} must be at least ${minimumLength} characters`;
		return "";
	};

	const lengthAndMatchValidator = (
		inputValue = "",
		inputFieldLabel = "",
		{
			required = false,
			minimumLength = 0,
			matchInputValue = "",
			matchFieldLabel = "",
		}
	) => {
		if (inputValue === "") {
			if (required === true) return `${inputFieldLabel} is required`;
			else return "";
		}
		if (minimumLength > 0 && inputValue.length < minimumLength)
			return `${inputFieldLabel} must be at least ${minimumLength} characters`;
		if (matchInputValue !== "" && inputValue !== matchInputValue)
			return `${inputFieldLabel} does not match ${matchFieldLabel}`;
		return "";
	};

	firstNameProps.validation = {
		validate: lengthValidator,
		params: { minimumLength: 2 },
	};
	lastNameProps.validation = {
		validate: lengthValidator,
		params: { minimumLength: 2 },
	};
	emailAddrProps.validation = {
		validate: lengthValidator,
		params: { required: true, minimumLength: 5 },
	};
	passwordProps.validation = {
		validate: lengthAndMatchValidator,
		params: {
			required: true,
			minimumLength: 8,
			matchInputValue: passwordConfProps.inputValue,
			matchFieldLabel: passwordConfProps.labelText,
		},
	};
	passwordConfProps.validation = {
		validate: lengthAndMatchValidator,
		params: {
			required: true,
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
