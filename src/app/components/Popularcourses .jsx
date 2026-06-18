import Link from "next/link";
import CourseCard from "./Coursecard";

export default function PopularCourses() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-violet-600 text-sm font-bold uppercase tracking-widest mb-3">Most Enrolled</p>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Popular Courses
            </h2>
            <p className="text-gray-500 mt-3 text-lg max-w-xl">
              Handpicked by our editorial team. Start with what's working for thousands of learners right now.
            </p>
          </div>
          <Link href="/courses" className="btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold shrink-0 transition-all duration-300">
            View All Courses →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80"
            title="Complete React & Next.js Developer"
            instructor="Sarah Chen"
            rating="4.9"
            duration="24h 30m"
            level="Intermediate"
            category="Web Dev"
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
            title="Data Science with Python & ML"
            instructor="Dr. James Wright"
            rating="4.8"
            duration="32h 10m"
            level="Beginner"
            category="Data Science"
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80"
            title="UI/UX Design Masterclass 2025"
            instructor="Mia Torres"
            rating="4.9"
            duration="18h 45m"
            level="All Levels"
            category="Design"
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80"
            title="AWS Cloud Practitioner Certified"
            instructor="Ravi Patel"
            rating="4.7"
            duration="20h 00m"
            level="Beginner"
            category="Cloud"
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80"
            title="Cybersecurity Fundamentals"
            instructor="Elena Kozlov"
            rating="4.8"
            duration="15h 20m"
            level="Intermediate"
            category="Security"
          />
          <CourseCard
            image="https://images.unsplash.com/photo-1535868463750-c78d9543614f?w=600&q=80"
            title="iOS App Development with Swift"
            instructor="Tom Nakamura"
            rating="4.6"
            duration="28h 50m"
            level="Intermediate"
            category="Mobile"
          />
        </div>
      </div>
    </section>
  );
}