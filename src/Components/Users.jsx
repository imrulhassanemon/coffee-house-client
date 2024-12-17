import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios";

const Users = () => {
  const users = useLoaderData();
  const [deletedUser, setDeletedUser] = useState(users);

  // useEffect(()=>{
  //   fe
  // })

//   const increase = () => {
//     const number = num + 1;
//     return setNum(number);
//   };

  const handelUserDelete = (id)=> {
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
        

        //     delete from the database  


        // using axios 

        

        
        // using fetch 
        fetch(`http://localhost:5000/users/${id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
              Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
        const remaininguser = deletedUser.filter(user => user._id !== id)
        setDeletedUser(remaininguser)
        })

        }
      });
  }

  return (
    <>
      <Navbar></Navbar>
      <div>
        <div className="text-3xl text-center">
          The total User is {deletedUser.length}
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Created Time</th>
                <th>Action</th>   
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {deletedUser.map((user) => (
                  <tr key={user._id}>
                    <th>1</th>
                    <td>{user.name}</td>
                    <td>{user.email}t</td>
                    <td>{user.createdAt? user.createdAt: 'NULL'}</td>
                    <td className="text-3xl  flex gap-5 text-white">
                        <button onClick={()=>handelUserDelete(user._id) }><MdDeleteForever className="bg-red-500 rounded-md p-1" /></button>
                        <FiEdit3 className="bg-emerald-700 p-1 rounded-md " />
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Users;
