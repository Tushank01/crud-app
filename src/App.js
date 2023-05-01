import React, { useState, Fragment, useEffect } from 'react'
import axios from 'axios'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const [userData,setUserData]=useState([]);
	const [name,setName]=useState("");
	const [alias,setAlias]=useState("");

	useEffect(()=>{
		axios.get("http://localhost:5000/getUsers")
		.then((data)=> setUserData(data.data));
	},[userData])

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(userData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	const handleClick=(e)=>{
		e.preventDefault();
		console.log("Working");

		axios.post("http://localhost:5000/addUser",{name:name,alias:alias});

	}

	return (
		<div className="container">
			<h1>CRUD App</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>						
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add Player</h2>
							{/* <AddUserForm addUser={addUser} /> */}
							<form>
								<label>Name</label>
								<input onChange={(e)=> setName(e.target.value)} type="text" name="name" />
								<label>Alias</label>
								<input onChange={(e)=> setAlias(e.target.value)} type="text" name="alias" />
								<button onClick={(e)=> handleClick(e)}>Add New Player</button>
							</form>
						</Fragment>
					)}
				</div>
				<div className="flex-large">
				<h2>User Table</h2>
					<UserTable users={userData} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
