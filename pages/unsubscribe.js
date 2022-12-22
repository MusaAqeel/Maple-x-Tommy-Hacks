import React from 'react'
import { useState } from 'react';

const Unsubscribe = () => {

	const [email, setEmail] = useState("");

	const formSubmit = (e) => {
		e.preventDefault();
		const action = 'https://script.google.com/macros/s/AKfycbzYrmYQFhfbqKHHHdhsANT-w96mNJVuqkgXlesT9sKEwajNCQ-jU_PVNBe6AtOeXsHl/exec?req=remove&email=' + email;
		const body = {req: 'remove', email: email};
		console.log(email);
		fetch(action, {
			method: "POST",
			body: JSON.stringify(body),
		}).catch((err) => console.log(err))	
		.then((res) => { console.log(res) });
	}


	return (
		<div>
			<form onSubmit={(e) => formSubmit(e)} id="unsubscribeForm">
				<h1>Please enter in your email to unsubscribe from our mailing list</h1>
				<label>Email</label>
				<input onChange={(e) => setEmail(e.target.value)} id="emailInput" type="email" name="email" placeholder='Your Email Address' required></input>
				<input id="submit" type="submit"></input>
			</form>
		</div>
	);
};

export default Unsubscribe;
