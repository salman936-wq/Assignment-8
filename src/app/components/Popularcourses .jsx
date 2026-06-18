import Link from "next/link";
import CourseCard from "./Coursecard";
import CourseData from "../../../public/courses.json";


// image = "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80"
// title = "Complete React & Next.js Developer"
// instructor = "Sarah Chen"
// rating = "4.9"
// duration = "24h 30m"
// level = "Intermediate"
// category = "Web Dev"

const getRandomCourseData = ()=> {
const randomSixData = CourseData
.sort(()=> 0.5 - Math.random())
.slice(0, 6);
return randomSixData
}

export default function PopularCourses() {

const allCourseDatas = getRandomCourseData();


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
              Handpicked by our editorial team. Start with working for thousands of learners right now.
            </p>
          </div>
          <Link href="/courses" className="btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold shrink-0 transition-all duration-300">
            View All Courses →
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{
  allCourseDatas.map(data => {
    // eslint-disable-next-line react/jsx-key
    return <CourseCard key={data.id} id={data.id} image={data.image} title={data.title} instructor={data.instructor} rating={data.rating} duration={data.duration} level={data.level} category={data.category}></CourseCard>
  })
}
        </div>


      </div>
    </section>
  );
}