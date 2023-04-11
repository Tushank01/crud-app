import React from 'react'
const UserTable = props => (
  <table>
    <thead>
      <tr>
      <th className="name-col">Name</th>
        <th className="alias-col">Alias</th>
        <th className="changes-col">Changes</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Players</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
