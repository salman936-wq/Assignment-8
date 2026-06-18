export default function TopInstructors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-600 text-sm font-bold uppercase tracking-widest mb-3">World-Class Faculty</p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
            Meet Our Instructors
          </h2>
          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Industry veterans and academics who've taught millions. Every course is built around real-world expertise.
          </p>
        </div>

        {/* Instructors grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Instructor 1 */}
          <div className="group text-center">
            <div className="relative inline-block mb-5">
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-violet-400 to-indigo-500 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-violet-200 group-hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-black text-white">SC</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Sarah Chen</h3>
            <p className="text-violet-600 text-sm font-medium mt-1">Full-Stack Engineer</p>
            <p className="text-gray-400 text-xs mt-1">Ex-Google · 8 courses</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span className="text-sm font-bold text-gray-700">4.9</span>
              <span className="text-xs text-gray-400">(12.4k)</span>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-violet-50 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full">Web Development</span>
            </div>
          </div>

          {/* Instructor 2 */}
          <div className="group text-center">
            <div className="relative inline-block mb-5">
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-rose-400 to-pink-500 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-rose-200 group-hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-black text-white">JW</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Dr. James Wright</h3>
            <p className="text-violet-600 text-sm font-medium mt-1">Data Scientist · PhD</p>
            <p className="text-gray-400 text-xs mt-1">Ex-Meta · 12 courses</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span className="text-sm font-bold text-gray-700">4.8</span>
              <span className="text-xs text-gray-400">(9.7k)</span>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-rose-50 text-rose-700 text-xs font-semibold px-3 py-1 rounded-full">Data Science</span>
            </div>
          </div>

          {/* Instructor 3 */}
          <div className="group text-center">
            <div className="relative inline-block mb-5">
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-amber-200 group-hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-black text-white">MT</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Mia Torres</h3>
            <p className="text-violet-600 text-sm font-medium mt-1">Lead UX Designer</p>
            <p className="text-gray-400 text-xs mt-1">Ex-Apple · 6 courses</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span className="text-sm font-bold text-gray-700">4.9</span>
              <span className="text-xs text-gray-400">(8.1k)</span>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-amber-50 text-amber-700 text-xs font-semibold px-3 py-1 rounded-full">UI/UX Design</span>
            </div>
          </div>

          {/* Instructor 4 */}
          <div className="group text-center">
            <div className="relative inline-block mb-5">
              <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-teal-400 to-cyan-500 mx-auto flex items-center justify-center shadow-lg group-hover:shadow-teal-200 group-hover:scale-105 transition-all duration-300">
                <span className="text-4xl font-black text-white">RP</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Ravi Patel</h3>
            <p className="text-violet-600 text-sm font-medium mt-1">Cloud Architect</p>
            <p className="text-gray-400 text-xs mt-1">Ex-AWS · 9 courses</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              <span className="text-sm font-bold text-gray-700">4.7</span>
              <span className="text-xs text-gray-400">(7.3k)</span>
            </div>
            <div className="mt-4">
              <span className="inline-block bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">Cloud Computing</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a href="#" className="btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold px-8 transition-all duration-300">
            View All Instructors →
          </a>
        </div>
      </div>
    </section>
  );
}