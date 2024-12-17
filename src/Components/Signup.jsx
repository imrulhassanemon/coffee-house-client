import { useContext } from "react";
import Navbar from "./Navbar";
import { AuthContext } from "./AuthProvider";
import axios from "axios";

const Signup = () => {
  const { signIn } = useContext(AuthContext);

  const handelSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        console.log(result);
        // email.reset()
        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = {
          email,
          lastSignInTime,
        };

        // using axios

        axios.post("http://localhost:5000/users/", loginInfo).then((data) => {
          console.log(data.data);
          if(data.data.insertedId){
            alert('Login to database')
          }
        });

        // using fetch
        // fetch(`http://localhost:5000/users/`, {
        //   method: "PATCH",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify(loginInfo),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log("sign in input updated", data);
        //   });
      })
      .catch(error => {
        console.log(error);
      })
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-4xl text-center font-bold pt-5">Register!</h1>
            <form onSubmit={handelSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
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

export default Signup;
