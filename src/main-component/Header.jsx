import Link from "next/link";
import { authClient } from "@/lib/auth-client"
import LoginToggale from "@/app/components/LoginToggale";
import HeaderButtons from "@/app/components/HeaderButtons";


export default async function Header() {
  
const { data: session } = await authClient.getSession();
console.log(session);

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur-md border-b border-base-200 shadow-sm">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* Mobile hamburger */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-base-100 rounded-2xl w-56 border border-base-200">
              <li><Link href="/" className="font-medium text-base-content hover:text-violet-600">Home</Link></li>
              <li><Link href="/courses" className="font-medium text-base-content hover:text-violet-600">Courses</Link></li>
              <li><Link href="/profile" className="font-medium text-base-content hover:text-violet-600">My Profile</Link></li>
              <li className="mt-2 border-t border-base-200 pt-2">
                <Link href="/login" className="font-medium">Login</Link>
              </li>
              <li><Link href="/register" className="font-medium">Register</Link></li>
            </ul>
          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-md group-hover:shadow-violet-200 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent tracking-tight">
              SkillSphere
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <Link href="/" className="text-sm font-semibold text-base-content/70 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200 px-4">
                Home
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-sm font-semibold text-base-content/70 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200 px-4">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/profile" className="text-sm font-semibold text-base-content/70 hover:text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-200 px-4">
                My Profile
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side */}
        <div className="navbar-end gap-2">
          
<div className=" tooltip tooltip-bottom tooltip-error" data-tip="Sorry for this. I tried for 4–5 hours to fix the issue where user data isn’t staying in cookies after login, but I couldn’t solve it, so I added the toggle button for now.
"><LoginToggale></LoginToggale></div>

          <HeaderButtons></HeaderButtons>

        </div>
      </div>
    </header>
  );
}