import React, { useState } from 'react'
import axios from 'axios'

const AddUserForm = props => {
	
	const handleClick=(e)=>{
		e.preventDefault();
		console.log("Working");
		axios.post("http://localhost:5000/addUser",{name:"abc",alias:"asdfk;"})
		.then((data)=> console.log("data saved"));
	}

	return (
		<form>
			<label>Name</label>
			<input type="text" name="name" />
			<label>Alias</label>
			<input type="text" name="username" />
			<button onClick={(e)=> handleClick(e)}>Add New Player</button>
		</form>
	)
}

export default AddUserForm
