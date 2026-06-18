'use client'
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form"

export default function RegisterPage() {

  const handelGoogleSignin = async() => {
    const data = await authClient.signIn.social({
    provider: "google",
  });
  }

  const {register, handleSubmit} = useForm();
  
  const handelSubmitDetails = async (data) => {
    const {email, name, password, url} = data;

    const { data: res, error } = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    password: password, // required
    image: url,
    callbackURL: "/",
});
console.log(res, error);
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-950 via-violet-950 to-indigo-950 flex items-center justify-center px-4 py-16">
      {/* Blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <span className="text-2xl font-black text-white">SkillSphere</span>
          </Link>
          <h1 className="text-3xl font-black text-white mt-6 mb-2">Create your account</h1>
          <p className="text-gray-400">Join 2 million learners. Start free today.</p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          {/* Form */}
<form onSubmit={handleSubmit(handelSubmitDetails)} className="space-y-5">
  {/* Full Name */}
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
    <input
      type="text"
      placeholder="Jane Doe"
      {...register("name")}
      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-200"
    />

  </div>

  {/* Email Address */}
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
    <input
      type="email"
      placeholder="jane@example.com"
      {...register("email")}
      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-200"
    />

  </div>

  {/* Photo URL */}
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">Photo URL</label>
    <input
      type="url"
      placeholder="https://example.com/avatar.jpg"
      {...register("url")}
      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-200"
    />
  </div>

  {/* Password */}
  <div>
    <label className="block text-sm font-semibold text-gray-300 mb-2">Password</label>
    <input
      type="password"
      placeholder="At least 8 characters"
      {...register("password")}
      className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-violet-500 focus:bg-white/10 transition-all duration-200"
    />
  </div>

  {/* Terms & Conditions */}
  <div className="flex items-start gap-3">
    <input 
        type="checkbox" 
        {...register("terms", { required: true })} 
        id="terms" 
        className="checkbox checkbox-sm checkbox-primary rounded mt-0.5" 
    />
    <label htmlFor="terms" className="text-sm text-gray-400 leading-relaxed cursor-pointer">
      I agree to SkillSpheres{" "}
      <a href="#" className="text-violet-400 hover:text-violet-300 underline">Terms of Service</a>{" "}
      and{" "}
      <a href="#" className="text-violet-400 hover:text-violet-300 underline">Privacy Policy</a>
    </label>
  </div>

  {/* Submit Button */}
  <button 
    type="submit"
    className="w-full btn bg-linear-to-r from-violet-600 to-indigo-600 text-white border-none rounded-2xl font-bold text-base py-4 hover:from-violet-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-violet-900/50 hover:scale-[1.01] transition-all duration-300 mt-2"
  >
    Create Free Account
  </button>
</form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <button onClick={handelGoogleSignin} className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold py-3.5 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-[1.01] border border-gray-200 cursor-pointer">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-violet-400 hover:text-violet-300 font-semibold transition-colors">
              Sign in →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}