import CourseCard from "@/app/components/Coursecard";
import CourseData from "../../../public/courses.json";

export const metadata = {
  title: "Courses — SkillSphere",
};

const getRandomCourseData = ()=> {
const randomEightData = CourseData
.sort(()=> 0.5 - Math.random())
.slice(0, 8);
return randomEightData
}

export default function CoursesPage() {

const allCourseDatas = getRandomCourseData();
const totalCourses = CourseData.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page hero */}
      <div className="bg-linear-to-br from-slate-900 via-violet-950 to-indigo-950 py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl font-black text-white mb-4">All Courses</h1>
          <p className="text-violet-300 text-lg max-w-xl mx-auto mb-10">
            12,000+ courses taught by real practitioners. Whatever you want to learn — we've got it.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-0 bg-white rounded-2xl overflow-hidden shadow-xl shadow-black/20">
              <div className="flex-1 flex items-center gap-3 px-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search for anything — React, Machine Learning, Figma..."
                  className="flex-1 py-4 text-gray-700 placeholder-gray-400 bg-transparent outline-none text-sm"
                />
              </div>
              <button className="px-7 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold text-sm hover:from-violet-700 hover:to-indigo-700 transition-all duration-300">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="text-sm font-semibold text-gray-500 mr-2">Filter:</span>
          <button className="btn btn-sm bg-violet-600 text-white border-none rounded-xl font-semibold">All</button>
          <button className="btn btn-sm btn-outline border-gray-200 text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold transition-all">Web Dev</button>
          <button className="btn btn-sm btn-outline border-gray-200 text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold transition-all">Data Science</button>
          <button className="btn btn-sm btn-outline border-gray-200 text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold transition-all">Design</button>
          <button className="btn btn-sm btn-outline border-gray-200 text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold transition-all">Cloud</button>
          <button className="btn btn-sm btn-outline border-gray-200 text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold transition-all">Mobile</button>
          <button className="btn btn-sm btn-outline border-gray-200 text-gray-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 rounded-xl font-semibold transition-all">Security</button>

          {/* Sort */}
          <div className="ml-auto">
            <select className="select select-bordered select-sm text-sm rounded-xl border-gray-200 focus:border-violet-400 focus:outline-none font-medium text-gray-600">
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-500 text-sm mb-8">Total <span className="font-bold text-gray-900">{totalCourses}</span> courses</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
{
  allCourseDatas.map(data => {
    // eslint-disable-next-line react/jsx-key
    return <CourseCard key={data.id} id={data.id} image={data.image} title={data.title} instructor={data.instructor} rating={data.rating} duration={data.duration} level={data.level} category={data.category}></CourseCard>
  })
}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-14">
          <div className="join">
            <button className="join-item btn btn-outline border-gray-200 rounded-l-xl">«</button>
            <button className="join-item btn bg-violet-600 text-white border-none">1</button>
            <button className="join-item btn btn-outline border-gray-200">2</button>
            <button className="join-item btn btn-outline border-gray-200">3</button>
            <button className="join-item btn btn-outline border-gray-200">...</button>
            <button className="join-item btn btn-outline border-gray-200">24</button>
            <button className="join-item btn btn-outline border-gray-200 rounded-r-xl">»</button>
          </div>
        </div>
      </div>
    </div>
  );
}