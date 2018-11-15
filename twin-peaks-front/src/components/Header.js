import React from 'react'

const Header = ({ userList, changeUser, currentUser }) => {

    return (
      <div className="header">
        <h1>Twin Peaks Gazette</h1>
        <label>change user</label>
        <select onChange={changeUser}>
          <option>Select a User</option>
          {userList.filter(user => user.id !== currentUser).map(user => <option key={user.id} value={user.id}>{user.name}</option>)}
          </select>
      </div>
    )

}

export default Header