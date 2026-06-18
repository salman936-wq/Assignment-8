import Image from "next/image";
import Hero from "./components/Hero";
import PopularCourses from "./components/Popularcourses ";
import LearningTips from "./components/Learningtips";
import TopInstructors from "./components/Topinstructors";
import TrendingCourses from "./components/Trendingcourses";

export default function Home() {
  return (
    <>
    <Hero></Hero>
    <PopularCourses></PopularCourses>
    <LearningTips></LearningTips>
    <TopInstructors></TopInstructors>
    <TrendingCourses></TrendingCourses>
        {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-violet-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Start Learning for Free Today
          </h2>
          <p className="text-violet-200 text-lg mb-10 max-w-2xl mx-auto">
            Join over 2 million learners. No credit card required. Access select courses instantly and upgrade any time.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/register" className="btn bg-white text-violet-700 hover:bg-violet-50 border-none btn-lg rounded-2xl font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 px-8">
              Get Started Free
            </a>
            <a href="/courses" className="btn btn-outline border-white/50 text-white hover:bg-white/10 hover:border-white btn-lg rounded-2xl font-bold px-8 transition-all duration-300">
              Browse Courses
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
