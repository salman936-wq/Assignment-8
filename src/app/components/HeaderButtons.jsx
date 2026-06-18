"use client";
import Link from 'next/link';
import React from 'react';
import { useStateContext } from "@/context/StateContext";

const HeaderButtons = () => {
    const { login, setLogin } = useStateContext();
    const isLoggedIn = login;
    return (
<>
{
isLoggedIn ?

<div className="hidden lg:flex items-center gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm text-sm font-semibold text-base-content/70 hover:text-violet-600 hover:bg-violet-50 rounded-xl">
              Login
            </Link>
            <Link href="/register" className="btn btn-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none hover:from-violet-700 hover:to-indigo-700 rounded-xl font-semibold shadow-md hover:shadow-violet-200 transition-all duration-300 px-5">
              Register
            </Link>
          </div>


          
:
<>
<div className="hidden lg:flex items-center gap-2">

<button onClick={() => setLogin(true)} className="btn btn-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none hover:from-violet-700 hover:to-indigo-700 rounded-xl font-semibold shadow-md hover:shadow-violet-200 transition-all duration-300 px-5">
              Logout
            </button>
            
          </div>
          {/* Avatar */}
          <div className="dropdown dropdown-end ml-1">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-9 rounded-full ring-2 ring-violet-200 ring-offset-1">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">U</span>
                </div>
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-48 border border-base-200">
              <li><Link href="/profile" className="font-medium hover:text-violet-600">Profile</Link></li>
              <li><Link href="/login" className="font-medium hover:text-violet-600">Login</Link></li>
              <li><Link href="/register" className="font-medium hover:text-violet-600">Register</Link></li>
            </ul>
          </div>

          </>
}
            
</>
    );
};

export default HeaderButtons;