import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Grid bg */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative text-center max-w-2xl mx-auto">
        {/* 404 number */}
        <div className="relative inline-block mb-6">
          <p className="text-[200px] font-black text-white/5 leading-none select-none">404</p>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <p className="text-8xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent leading-none">
                404
              </p>
            </div>
          </div>
        </div>

        {/* Icon */}
        <div className="w-24 h-24 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
          Page not found
        </h1>
        <p className="text-violet-300 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Looks like this lesson doesn't exist yet — or maybe it moved. Let's get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Link href="/" className="btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none btn-lg rounded-2xl font-bold shadow-xl shadow-violet-900/40 hover:from-violet-700 hover:to-indigo-700 hover:scale-105 transition-all duration-300 px-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link href="/courses" className="btn btn-outline border-gray-600 text-gray-200 hover:bg-white/10 hover:border-white hover:text-white btn-lg rounded-2xl font-bold px-8 transition-all duration-300">
            Browse Courses
          </Link>
        </div>

        {/* Quick links */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 max-w-md mx-auto">
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Popular destinations</p>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/courses" className="flex items-center gap-2 text-gray-300 hover:text-violet-300 text-sm font-medium transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-500 group-hover:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              All Courses
            </Link>
            <Link href="/profile" className="flex items-center gap-2 text-gray-300 hover:text-violet-300 text-sm font-medium transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-500 group-hover:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              My Profile
            </Link>
            <Link href="/login" className="flex items-center gap-2 text-gray-300 hover:text-violet-300 text-sm font-medium transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-500 group-hover:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              Sign In
            </Link>
            <Link href="/register" className="flex items-center gap-2 text-gray-300 hover:text-violet-300 text-sm font-medium transition-colors group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-500 group-hover:text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}