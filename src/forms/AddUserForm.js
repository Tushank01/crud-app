import React, { useState } from 'react'

const AddUserForm = props => {
	
	const handleClick=(e)=>{
		e.preventDefault();
		fetch('http://localhost:5000/addUser', {
			Method: 'POST',
			Headers: {
				Accept: 'application.json',
				'Content-Type': 'application/json'
			},
			Body: {
				name:"abc",
				alias:"absfgdf"
			},
			Cache: 'default'
		})
		console.log("Working");
	}

	return (
		<form
			// onSubmit={event => {
			// 	event.preventDefault()
			// 	if (!user.name || !user.username) return

			// 	props.addUser(user)
			// 	setUser(initialFormState)

			// }}
		>
			<label>Name</label>
			<input type="text" name="name" />
			<label>Alias</label>
			<input type="text" name="username" />
			<button onClick={(e)=> handleClick(e)}>Add New Player</button>
			{/* <label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Alias</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<button onClick={(e)=> handleClick(e)}>Add New Player</button> */}
		</form>
	)
}

export default AddUserForm
