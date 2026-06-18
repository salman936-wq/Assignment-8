"use client"
import { redirect } from "next/navigation";
import { useStateContext } from "@/context/StateContext";


export default function ProfilePage() {

  const {login} = useStateContext();
  const isLoggedIn = login;
  if (isLoggedIn) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile hero banner */}
      <div className="h-48 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 lg:px-8 pb-16">
        {/* Avatar + name row */}
        <div className="relative -mt-16 mb-8 flex flex-col sm:flex-row sm:items-end gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center border-4 border-white shadow-xl">
              <span className="text-5xl font-black text-white">JD</span>
            </div>
            <button className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center shadow-md hover:bg-violet-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
          <div className="pb-2">
            <h1 className="text-2xl font-black text-gray-900">Jane Doe</h1>
            <p className="text-gray-500 text-sm">jane.doe@example.com · Member since Jan 2024</p>
          </div>
          <div className="sm:ml-auto pb-2 flex gap-3">
            <div className="text-center px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-violet-700">8</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Courses</p>
            </div>
            <div className="text-center px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-violet-700">3</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Certs</p>
            </div>
            <div className="text-center px-5 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-2xl font-black text-violet-700">124h</p>
              <p className="text-xs text-gray-400 font-medium mt-0.5">Learned</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Edit profile form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-black text-gray-900 mb-6">Edit Profile</h2>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="Jane"
                      className="w-full border border-gray-200 text-gray-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full border border-gray-200 text-gray-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    defaultValue="jane.doe@example.com"
                    className="w-full border border-gray-200 text-gray-700 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Photo URL</label>
                  <input
                    type="url"
                    placeholder="https://example.com/your-photo.jpg"
                    className="w-full border border-gray-200 text-gray-700 placeholder-gray-400 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Bio</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about yourself..."
                    className="w-full border border-gray-200 text-gray-700 placeholder-gray-400 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Occupation</label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer, Student..."
                    className="w-full border border-gray-200 text-gray-700 placeholder-gray-400 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button className="btn bg-gradient-to-r from-violet-600 to-indigo-600 text-white border-none rounded-2xl font-bold hover:from-violet-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-violet-200 transition-all duration-300 px-8">
                    Save Changes
                  </button>
                  <button className="btn btn-ghost text-gray-500 rounded-2xl font-semibold hover:bg-gray-100">
                    Cancel
                  </button>
                </div>
              </div>
            </div>

            {/* Password section */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-black text-gray-900 mb-6">Change Password</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 text-gray-700 placeholder-gray-400 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full border border-gray-200 text-gray-700 placeholder-gray-400 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100 transition-all" />
                </div>
                <button className="btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-2xl font-semibold transition-all duration-300 mt-2">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent activity */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-black text-gray-900 text-lg mb-5">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Watched "React Hooks Deep Dive"</p>
                    <p className="text-xs text-gray-400 mt-0.5">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Completed "Intro to TypeScript"</p>
                    <p className="text-xs text-gray-400 mt-0.5">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 font-medium">Earned "Web Fundamentals" cert</p>
                    <p className="text-xs text-gray-400 mt-0.5">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Danger zone */}
            <div className="bg-rose-50 rounded-3xl border border-rose-100 p-6">
              <h3 className="font-bold text-rose-700 mb-2">Danger Zone</h3>
              <p className="text-rose-500 text-sm mb-4">Once you delete your account, there's no going back.</p>
              <button className="btn btn-sm btn-outline border-rose-300 text-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-600 rounded-xl font-semibold transition-all">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}