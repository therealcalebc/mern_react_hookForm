import React, { useState } from "react";
import styles from "./HookForm.module.css";

const HookForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [emailAddress, setEmailAddress] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	return (
		<>
			<form className={styles.HookForm}>
				<div className={styles.FormField}>
					<label htmlFor='firstNameInput'>First Name: </label>
					<input
						type='text'
						id='firstNameInput'
						onChange={(e) => setFirstName(e.target.value)}
						value={firstName}
					/>
				</div>
				<div className={styles.FormField}>
					<label htmlFor='lastNameInput'>Last Name: </label>
					<input
						type='text'
						id='lastNameInput'
						onChange={(e) => setLastName(e.target.value)}
						value={lastName}
					/>
				</div>
				<div className={styles.FormField}>
					<label htmlFor='emailAddressInput'>Email: </label>
					<input
						type='text'
						id='emailAddressInput'
						onChange={(e) => setEmailAddress(e.target.value)}
						value={emailAddress}
					/>
				</div>
				<div className={styles.FormField}>
					<label htmlFor='passwordInput'>Password: </label>
					<input
						type='password'
						id='passwordInput'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<div className={styles.FormField}>
					<label htmlFor='confirmPasswordInput'>
						Confirm Password:{" "}
					</label>
					<input
						type='password'
						id='confirmPasswordInput'
						onChange={(e) => setConfirmPassword(e.target.value)}
						value={confirmPassword}
					/>
				</div>
			</form>
			<div className={styles.FormDataViewer}>
				<div className={styles.FormDataField}>
					<label>First Name: </label>
					<input type='text' value={firstName} disabled />
				</div>
				<div className={styles.FormDataField}>
					<label>Last Name: </label>
					<input type='text' value={lastName} disabled />
				</div>
				<div className={styles.FormDataField}>
					<label>Email: </label>
					<input type='text' value={emailAddress} disabled />
				</div>
				<div className={styles.FormDataField}>
					<label>Password: </label>
					<input type='text' value={password} disabled />
				</div>
				<div className={styles.FormDataField}>
					<label>Confirm Password: </label>
					<input type='text' value={confirmPassword} disabled />
				</div>
			</div>
		</>
	);
};

export default HookForm;
