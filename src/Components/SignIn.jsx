import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import Swal, { swal }  from 'sweetalert2/dist/sweetalert2.js'
import Navbar from "./Navbar";
import axios from "axios";

const SignIn = () => {

    const {createEmailandPasswor} = useContext(AuthContext)

    const handelSignUp = (e) => {
        e.preventDefault()
        const from = e.target
        const password = from.password.value;
        const email = from.email.value;
        const name = from.name.value;
        // const data = {password, email}
        createEmailandPasswor(email, password, name)
        .then(result => {
          // const createdAt = result.user?.metadata?.creationTime; 
             const createdAt = result.user?.metadata?.creationTime;
          console.log(createdAt);
          const newUser  = {name, email, createdAt}
            console.log(result.user);


            axios.post('http://localhost:5000/users', newUser)
            .then(data => {
              console.log(data.data);
              if(data.data.insertedId){
                Swal.fire({
                  title: "Good job!",
                  text: "You register successfully",
                  icon: "success"
                });
              }
            })



            // Save User data in the server using fetch
            // fetch("http://localhost:5000/users", {
            //     method:"POST",
            //     headers:{
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(newUser)
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log('User Created To Db',data);
            //     if(data.insertedId){
            //       Swal.fire({
            //         title: 'Success!',
            //         text: 'Successfully Added Users',
            //         icon: 'success',
            //         confirmButtonText: 'Cool'
            //       })
            //     }
            //     from.reset();

            // })

        })
        .catch(error => {
            console.log(error.message);
        })

    }

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center font-bold pt-5">Login now!</h1>
            <form onSubmit={handelSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Name" name = 'name'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email" name = 'email'
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password" name = 'password'
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
