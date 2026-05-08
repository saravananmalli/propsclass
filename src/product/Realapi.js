import axios from "axios";
import React, { useEffect, useState } from "react";

const Realapi = () => {

    const [userdata, setuserdata] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const [users, setUsers] = useState([]);

    const [editId, setEditId] = useState(null);

    // Handle Input
    const handle = (e) => {
        setuserdata({
            ...userdata,
            [e.target.name]: e.target.value
        });
    };

    // ================= GET API =================

    const getUsers = async () => {
        try {
            const response = await axios.get(
                "https://x8ki-letl-twmt.n7.xano.io/api:6HtskbK4/kasirajan"
            );

            setUsers(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    // ================= POST API =================

    const addUser = async () => {

        try {

            await axios.post(
                "https://x8ki-letl-twmt.n7.xano.io/api:6HtskbK4/kasirajan",
                userdata
            );

            alert("User Added");

            setuserdata({
                name: "",
                email: "",
                phone: ""
            });

            getUsers();

        } catch (error) {
            console.log(error);
        }
    };

    // ================= DELETE API =================

    const deleteUser = async (id) => {

        try {

            await axios.delete(
                `https://x8ki-letl-twmt.n7.xano.io/api:6HtskbK4/kasirajan/${id}`
            );

            alert("User Deleted");

            getUsers();

        } catch (error) {
            console.log(error);
        }
    };

    // ================= EDIT BUTTON =================

    const editUser = (user) => {

        setuserdata({
            name: user.name,
            email: user.email,
            phone: user.phone
        });

        setEditId(user.id);
    };

    // ================= UPDATE API =================

    const updateUser = async () => {

        try {

            await axios.put(
                `https://x8ki-letl-twmt.n7.xano.io/api:6HtskbK4/kasirajan/${editId}`,
                userdata
            );

            alert("User Updated");

            setuserdata({
                name: "",
                email: "",
                phone: ""
            });

            setEditId(null);

            getUsers();

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={{ padding: "20px" }}>

            <h1>React CRUD API</h1>

            <label>Name</label><br />

            <input
                name="name"
                type="text"
                value={userdata.name}
                onChange={handle}
            />

            <br /><br />

            <label>Email</label><br />

            <input
                name="email"
                type="text"
                value={userdata.email}
                onChange={handle}
            />

            <br /><br />

            <label>Phone</label><br />

            <input
                name="phone"
                type="text"
                value={userdata.phone}
                onChange={handle}
            />

            <br /><br />

            {
                editId ? (
                    <button onClick={updateUser}>
                        Update User
                    </button>
                ) : (
                    <button onClick={addUser}>
                        Add User
                    </button>
                )
            }

            <hr />

            <h2>User List</h2>

            <table border="1" cellPadding="10">

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        users.map((user) => (

                            <tr key={user.id}>

                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>

                                <td>

                                    <button
                                        onClick={() => editUser(user)}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>
                        ))
                    }

                </tbody>

            </table>

        </div>
    );
};

export default Realapi;