import { useContext } from "react";

import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet";
import { authContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { userLogin, googleLogin } = useContext(authContext)
    const navigate = useNavigate()
    const location =useLocation()
    // console.log(location)
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email)

        userLogin(email, password)
            .then(result => {
                
                const user = result.user
                navigate(location?.state?location.state:'/')
                console.log(user)

            })
            .catch(error => {
                console.log(error)
            })

    }
    const handleGoogle = () => {
        googleLogin()
            .then(result => {
                console.log(result)
                // navigate(location?.state?location.state:'/')
                navigate(location?.state?location.state:'/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center   lg:text-left">


                </div>
                <div className="card bg-base-100 w-full   shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body  ">
                        <h1 className="text-2xl lg:text-3xl font-bold">Login now!</h1>

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
                            <input type="password" name="password" placeholder="password" className="input input-bordered w-72 lg:w-96" required />
                            {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        </div>
                        <p className="text-center mt-1 text-lg" >Or</p>
                        {/* <button className="btn w-72 lg:w-96  border-2"><div className="flex justify-center items-center text-center  py-2   rounded-lg mt-1 ">
                        <h2 className="pl-8 text-2xl"> <FcGoogle /></h2>
                            <p className="text-lg"> Continue with Google</p>
                        </div></button> */}
                        <div onClick={handleGoogle} className="flex justify-center items-center text-center  py-2   rounded-lg mt-1 w-72 lg:w-96  border-2 btn ">
                            <h2 className="pl-8 text-2xl"> <FcGoogle /></h2>
                            <p className="text-lg"> Continue with Google</p>
                        </div>
                        <p > Are you new in site? <Link className="link link-warning" to="/register">SignUp</Link> </p>

                        <div className="form-control mt-6 w-72 lg:w-96">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;