
'use client'
import { redirect } from "next/navigation";
import { useStateContext } from "@/context/StateContext";
import CourseData from "../../../../public/courses.json";
import CourseHero from "@/app/components/CourseHero";
import { Suspense } from "react";

const getDataFromJson = (id) => {
  const array = CourseData.filter(data => data.id == id);
  return array[0];
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function CourseDetailPage({ params }) {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const {login} = useStateContext();
  const isLoggedIn = login;
  if (isLoggedIn) {
    redirect("/login");
  }

  const { id } = await params;
  const {title, instructor, duration, rating, level, description, image, category} = getDataFromJson(id);
  const profileLetter = instructor.split(' ').map(name => name[0]).join('');


  return (
    <div className=" bg-gray-50">
      {/* Course Hero */}
      <Suspense fallback={<div>Loading...</div>}>
        <CourseHero title={title} instructor={instructor} duration={duration} rating={rating} level={level} description={description} image={image} category={category} profileLetter={profileLetter}></CourseHero>
      </Suspense>
    </div>
  );
}