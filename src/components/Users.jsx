import React from "react";

const Users = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    // create user in the db
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data after creating user in the db,", data);
        if (data.insertedId) {
          alert("User created successfully");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <h2>Users</h2>
      {/* add user */}
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" placeholder="name" />
          <br />
          <input type="email" name="email" placeholder="email" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </div>
  );
};

export default Users;
