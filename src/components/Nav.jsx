import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
        <li><NavLink to='/'>Statistics</NavLink></li>
        <li><NavLink to='/appliedjobs'>Applied Jobs</NavLink></li>
        <li><NavLink to='/blogs'>Blog</NavLink></li>
    </>
    return (
        <div className="bg-[#f9f9ff]">
            <div className="navbar max-w-6xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="text-2xl text-[#1A1919] font-bold">CareerHub</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/'><button className="btn bg-[#7E90FE] text-white font-bold">Star Applying</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Nav;