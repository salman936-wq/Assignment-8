'use client'
import React from 'react';

const CourseHero = ({title, instructor, duration, rating, level, description, image, category, profileLetter}) => {
    return (
        <div className="bg-linear-to-br from-slate-900 via-violet-950 to-indigo-950 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left content */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 mb-5">
                <span className="badge bg-violet-500/20 text-violet-300 border-none font-semibold px-3 py-2 text-sm">{category}</span>
                <span className="badge bg-amber-500/20 text-amber-300 border-none font-semibold px-3 py-2 text-sm">{level}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                {title}
              </h1>
              <p className="text-violet-200 text-lg leading-relaxed mb-8">
                {description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  <span className="font-bold text-amber-400">{rating}</span>
                  <span>(123 ratings)</span>
                </div>
                <div>84,200 students</div>
                <div>Last updated June 2025</div>
              </div>

              {/* Instructor */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-400 to-indigo-500 flex items-center justify-center">
                  <span className="text-white font-bold">{profileLetter}</span>
                </div>
                <div>
                  <p className="text-white font-semibold">{instructor}</p>
                 
                </div>
              </div>
            </div>

            {/* Enrollment card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

              <div className={`relative h-48 flex items-center justify-center mb-4`}>
                <img src={image} alt="" />
              </div>
              <div className="p-6">
                
              
                <button className="w-full btn bg-linear-to-r from-violet-600 to-indigo-600 text-white border-none hover:from-violet-700 hover:to-indigo-700 rounded-2xl font-bold text-base mb-3 hover:shadow-xl hover:shadow-violet-200 transition-all duration-300">
                  Enroll Now
                </button>
                <button className="w-full btn btn-outline border-violet-200 text-violet-700 hover:bg-violet-50 rounded-2xl font-semibold">
                  Try for Free
                </button>
                <p className="text-center text-gray-400 text-xs mt-4">30-Day Money-Back Guarantee</p>

                <div className="border-t border-gray-100 mt-5 pt-5 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {duration} on-demand video
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
    );
};

export default CourseHero;