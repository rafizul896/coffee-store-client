import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    const handleDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remainingUsers = users.filter(user => user._id !== id);
                            setUsers(remainingUsers)
                            Swal.fire({
                                title: "Deleted!",
                                text: "user has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }
    return (
        <div>
            <h1 className="text-xl text-center font-semibold py-5">Total Users : {loadedUsers.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row */}
                        {
                            users.map((user, indx) => <tr key={user._id}>
                                <th>{indx + 1}</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="p-2 text-xl bg-[#EA4744] text-white rounded-md"><MdDelete /></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;