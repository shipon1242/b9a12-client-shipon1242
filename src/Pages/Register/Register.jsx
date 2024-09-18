import { useContext } from "react";
// import { authContext } from "../../../Provider/AuthProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import toast, { Toaster } from 'react-hot-toast';
import { authContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { userSignUp} = useContext(authContext)
const navigate =useNavigate()
    


    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        const photo =form.photo.value;
        // console.log(name,email,password,photo)
        if (password.length < 6) {
            return toast.error("password must be at least 6  character ")
          }
          else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
            return toast.error("password must be at least one digit and one uppercase and lowercase letter")
          }

        userSignUp(email,password)
        .then(result=>{
            // console.log(result.user)
            navigate("/")
            
        })
        .catch(error=>{
            console.log(error)
        })
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <Helmet>
            <title>Register</title>
        </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center   lg:text-left">


            </div>
            <div className="card bg-base-100 w-full   shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body  ">
                    <h1 className="text-2xl lg:text-3xl font-bold">Register now!</h1>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered w-72 lg:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered w-72 lg:w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="input input-bordered w-72 lg:w-96" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-72 lg:w-96" />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <Toaster />
                    <p>if you have an account? <Link className="link link-error" to="/login">Login</Link> </p>
                    <div className="form-control mt-6 w-72 lg:w-96">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Register;