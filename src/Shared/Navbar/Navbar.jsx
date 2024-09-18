
import { useContext } from "react";
import { Link,  } from "react-router-dom";
// import { authContext } from "../../../Provider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { authContext } from "../../Provider/AuthProvider";
const Navbar = () => {

    const { user, userLogout } = useContext(authContext)
    const userName = user?.displayName
    const profilePic = user ?
      user.photoURL : <CgProfile />
    // console.log(userName)
    const handleLogOut = () => {
      userLogout()
  
    }

    const navItem = <>

        <li className="text-black text-lg font-semibold">  <Link> Home </Link></li>
        <li className="text-black text-lg font-semibold">  <Link to="/"> Services </Link> </li>

    </>
    const dashboardItems = <>
        <li className="text-black text-lg font-semibold" >  <Link to="/"> Add Service </Link></li>
        {/* <li className="text-black text-lg font-semibold" >  <Link to="/addServices"> Add Service </Link></li> */}
        <li className="text-black  font-semibold">  <Link to="/"> Manage Service  </Link></li>
        <li className="text-black font-semibold">  <Link to="/"> Booked-Services  </Link></li>
        <li className="text-black  font-semibold">  <Link to="/"> Service-To-Do </Link></li>
    </>

    return (
        <div className="navbar bg-white py-6  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                        {
                            navItem
                        }
                        {
                            //    user &&   <li className="">
                            //    {/* <Link>Dashboard</Link> */}
                            //    <ul className="p-1 modal ">
                            //      {
                            //        dashboardItems
                            //      }
                            //    </ul>

                            //  </li>

                            user && <li className="w-40 ">
                                <details>
                                    <summary className="text-lg text-black font-semibold">Dashboard</summary>
                                    <ul className="p-2 z-40  ">
                                        {
                                            dashboardItems
                                        }
                                    </ul>



                                </details>
                            </li>
                        }

                    </ul>
                </div>
                {/* <img src="/Tlogo.jpg" className="w-10 lg:w-20 h-10 lg:h-20" /> */}
                <h1 className="text-xl lg:text-2xl font-extrabold text-sky-500">TechTriage</h1>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a>Item 1</a></li> */}
                    {navItem}
                    {
                        user && <li className="w-40">
                            <details>
                                <summary className="text-lg text-black font-semibold">Dashboard</summary>
                                <ul className="p-2 z-40 bg-white ">
                                    {
                                        dashboardItems
                                    }
                                </ul>



                            </details>
                        </li>
                    }
                    {/* <li><a>Item 3</a></li> */}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="flex items-center gap-4"> <div className="avatar tooltip tooltip-bottom" data-tip={userName}>
                        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                            <img src={profilePic} />
                        </div>
                    </div> <button onClick={handleLogOut} className="btn btn-sm lg:btn-md btn-error">LogOut</button></div> : <button className=""><Link to="/login"> <button className="btn btn-xs lg:btn-md btn-info text-white">Login</button> </Link> </button>
                }

            </div>
        </div>
    );
};

export default Navbar;