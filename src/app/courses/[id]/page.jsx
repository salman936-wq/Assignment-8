export const metadata = {
  title: "Complete React & Next.js Developer — SkillSphere",
};

export default function CourseDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Course Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-violet-950 to-indigo-950 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="badge bg-violet-500/20 text-violet-300 border-none font-semibold px-3 py-2 text-sm">Web Development</span>
                <span className="badge bg-amber-500/20 text-amber-300 border-none font-semibold px-3 py-2 text-sm">🔥 Bestseller</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Complete React & Next.js Developer 2025
              </h1>
              <p className="text-violet-200 text-lg leading-relaxed mb-8">
                Build production-ready web applications from scratch. Master React 19, Next.js 15 App Router, TypeScript, Tailwind CSS, authentication, databases, and deployment to real servers.
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  <span className="font-bold text-amber-400">4.9</span>
                  <span>(12,450 ratings)</span>
                </div>
                <div>84,200 students</div>
                <div>Last updated June 2025</div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-white font-bold">SC</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Sarah Chen</p>
                  <p className="text-gray-400 text-sm">Senior Engineer · Ex-Google</p>
                </div>
              </div>
            </div>

            {/* Enrollment card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-48 bg-gradient-to-br from-violet-500 to-indigo-700 flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white/80 text-sm font-medium">Preview available</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-4xl font-black text-gray-900">$89</span>
                  <span className="text-gray-400 line-through text-lg">$199</span>
                  <span className="text-green-600 font-bold text-sm">55% off</span>
                </div>
                <p className="text-red-500 text-sm font-medium mb-5">⏰ 2 days left at this price</p>
                <button className="w-full btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none hover:from-violet-700 hover:to-indigo-700 rounded-2xl font-bold text-base mb-3 hover:shadow-xl hover:shadow-violet-200 transition-all duration-300">
                  Enroll Now
                </button>
                <button className="w-full btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-50 rounded-2xl font-semibold">
                  Try for Free
                </button>
                <p className="text-center text-gray-400 text-xs mt-4">30-Day Money-Back Guarantee</p>

                <div className="border-t border-gray-100 mt-5 pt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    24.5 hours on-demand video
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    42 articles & resources
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                    Certificate of completion
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* What you'll learn */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Build production Next.js 15 apps with App Router",
                  "Master React 19 hooks and server components",
                  "TypeScript from zero to advanced patterns",
                  "Tailwind CSS and responsive design",
                  "Authentication with NextAuth.js & OAuth",
                  "PostgreSQL, Prisma ORM, and database design",
                  "Deploy to Vercel and custom VPS servers",
                  "Testing with Jest and React Testing Library",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-4">Course Description</h2>
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                <p>
                  This is the most comprehensive and up-to-date full-stack course available in 2025. Whether you're a complete beginner or a developer looking to level up, this course takes you from the fundamentals all the way to building and shipping real-world applications.
                </p>
                <p>
                  You'll build 6 complete projects — including a job board, a SaaS dashboard, a real-time chat app, and more. Every project is designed to give you hands-on experience with the patterns and tools used in production at real companies.
                </p>
              </div>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-2">Course Curriculum</h2>
              <p className="text-gray-500 text-sm mb-6">42 lessons · 24h 30m total</p>

              <div className="space-y-3">
                {/* Section 1 */}
                <div className="border border-gray-200 rounded-2xl overflow-hidden">
                  <div className="flex items-center justify-between p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-sm">1</div>
                      <div>
                        <p className="font-bold text-gray-900">Getting Started with React & Next.js</p>
                        <p className="text-xs text-gray-400">6 lessons · 2h 10m</p>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {["What is Next.js and why use it?", "Setting up your dev environment", "Creating your first Next.js project", "Understanding the App Router", "Pages, layouts, and loading states"].map((lesson, i) => (
                      <div key={i} className="flex items-center gap-4 px-5 py-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                        <span className="text-sm text-gray-700 flex-1">{lesson}</span>
                        <span className="text-xs text-gray-400">~25 min</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Section 2 */}
                <div className="border border-gray-200 rounded-2xl">
                  <div className="flex items-center justify-between p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-sm">2</div>
                      <div>
                        <p className="font-bold text-gray-900">React 19 Deep Dive</p>
                        <p className="text-xs text-gray-400">8 lessons · 3h 45m</p>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="border border-gray-200 rounded-2xl">
                  <div className="flex items-center justify-between p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center text-violet-700 font-bold text-sm">3</div>
                      <div>
                        <p className="font-bold text-gray-900">TypeScript Essentials & Advanced Patterns</p>
                        <p className="text-xs text-gray-400">6 lessons · 2h 30m</p>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <button className="btn btn-ghost text-violet-600 hover:bg-violet-50 rounded-xl font-semibold text-sm">
                    Show all 42 lessons ↓
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 text-lg mb-4">This course includes</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  Lifetime access
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2v-1M8 21H6a2 2 0 01-2-2v-1m4 0V9m4 11V9m-6 6h8" /></svg>
                  Mobile & desktop access
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                  Community forum access
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                  Certificate of completion
                </div>
              </div>
              <button className="w-full btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none rounded-2xl font-bold mt-6 hover:shadow-lg transition-all duration-300">
                Enroll for $89
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}