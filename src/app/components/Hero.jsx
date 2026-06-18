import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-violet-950 to-indigo-950 min-h-[92vh] flex items-center">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Over 50,000 students enrolled this month
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              Learn Without{" "}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Limits.
              </span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-xl">
              Master in-demand skills with world-class instructors. From web development to data science — your next breakthrough starts here.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/courses" className="btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none hover:from-violet-500 hover:to-indigo-500 btn-lg rounded-2xl font-bold shadow-xl shadow-violet-900/40 hover:shadow-violet-900/60 hover:scale-105 transition-all duration-300 px-8">
                Explore Courses
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="#" className="btn btn-outline border-gray-600 text-gray-200 hover:bg-white/10 hover:border-white hover:text-white btn-lg rounded-2xl font-bold px-8 transition-all duration-300">
                Watch Demo
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              <div>
                <p className="text-3xl font-black text-white">12K+</p>
                <p className="text-sm text-gray-400 mt-0.5">Expert Courses</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-black text-white">480+</p>
                <p className="text-sm text-gray-400 mt-0.5">Instructors</p>
              </div>
              <div className="w-px bg-gray-700" />
              <div>
                <p className="text-3xl font-black text-white">2M+</p>
                <p className="text-sm text-gray-400 mt-0.5">Learners</p>
              </div>
            </div>
          </div>

          {/* Right — decorative card stack */}
          <div className="relative hidden lg:block">
            <div className="absolute -top-8 -left-8 w-72 h-72 bg-violet-600/20 rounded-3xl blur-2xl" />

            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Full-Stack Development</p>
                  <p className="text-gray-400 text-sm">42 lessons · 18h total</p>
                </div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  React, Next.js, and TypeScript
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  Node.js & REST APIs
                </div>
                <div className="flex items-center gap-3 text-gray-300 text-sm">
                  <div className="w-5 h-5 rounded-full bg-violet-500/40 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-violet-400" />
                  </div>
                  Databases & Deployment
                </div>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full w-2/3" />
              </div>
              <p className="text-xs text-gray-400">67% complete · Keep going!</p>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl px-5 py-3 shadow-xl flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-yellow-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white" />
              </div>
              <div>
                <p className="text-gray-900 font-bold text-sm">+2,400 joined</p>
                <p className="text-gray-500 text-xs">this week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}