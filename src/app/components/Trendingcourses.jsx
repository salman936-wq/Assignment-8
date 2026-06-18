import Link from "next/link";

export default function TrendingCourses() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-violet-400 text-sm font-bold uppercase tracking-widest mb-3">Hot Right Now</p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Trending Courses
            </h2>
            <p className="text-gray-400 mt-3 text-lg max-w-xl">
              What learners are jumping into this week. Don't miss the surge.
            </p>
          </div>
          <Link href="/courses" className="btn btn-outline border-gray-700 text-gray-300 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold shrink-0 transition-all duration-300">
            All Courses →
          </Link>
        </div>

        {/* Trending list */}
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <span className="text-4xl font-black text-gray-700 group-hover:text-violet-500 transition-colors duration-300 w-10 text-center shrink-0">1</span>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate">Generative AI for Developers</h3>
              <p className="text-gray-400 text-sm">Marcus Liu · 14h 20m</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <span className="badge bg-rose-500/20 text-rose-400 border-none font-semibold text-xs px-3 py-2">🔥 Hot</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-white font-bold text-sm">4.9</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-violet-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Item 2 */}
          <div className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <span className="text-4xl font-black text-gray-700 group-hover:text-violet-500 transition-colors duration-300 w-10 text-center shrink-0">2</span>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2v-1M8 21H6a2 2 0 01-2-2v-1m4 0V9m4 11V9m-6 6h8m-8 0H5m12 0h1M9 9h6M5 9V6a2 2 0 012-2h10a2 2 0 012 2v3" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate">Flutter & Dart — Zero to App Store</h3>
              <p className="text-gray-400 text-sm">Priya Nair · 22h 05m</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <span className="badge bg-violet-500/20 text-violet-400 border-none font-semibold text-xs px-3 py-2">New</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-white font-bold text-sm">4.8</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-violet-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Item 3 */}
          <div className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <span className="text-4xl font-black text-gray-700 group-hover:text-violet-500 transition-colors duration-300 w-10 text-center shrink-0">3</span>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate">Business Analytics for Managers</h3>
              <p className="text-gray-400 text-sm">Dr. Anna Müller · 10h 30m</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <span className="badge bg-green-500/20 text-green-400 border-none font-semibold text-xs px-3 py-2">Trending</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-white font-bold text-sm">4.7</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-violet-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Item 4 */}
          <div className="group flex items-center gap-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/30 rounded-2xl p-5 transition-all duration-300 cursor-pointer">
            <span className="text-4xl font-black text-gray-700 group-hover:text-violet-500 transition-colors duration-300 w-10 text-center shrink-0">4</span>
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 shrink-0 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold text-lg truncate">Kubernetes & Docker Mastery</h3>
              <p className="text-gray-400 text-sm">Luis Gonzalez · 19h 40m</p>
            </div>
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <span className="badge bg-blue-500/20 text-blue-400 border-none font-semibold text-xs px-3 py-2">Popular</span>
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span className="text-white font-bold text-sm">4.8</span>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 group-hover:text-violet-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}