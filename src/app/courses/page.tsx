import Navbar from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"

export default function CoursesPage() {
  const courses = [
    {
      title: "Introduction to React",
      level: "Beginner",
      duration: "4 weeks",
      image: "/placeholder.svg",
      price: "$49.99",
    },
    {
      title: "Advanced Python Programming",
      level: "Intermediate",
      duration: "6 weeks",
      image: "/placeholder.svg",
      price: "$69.99",
    },
    {
      title: "Machine Learning Fundamentals",
      level: "Intermediate",
      duration: "8 weeks",
      image: "/placeholder.svg",
      price: "$79.99",
    },
    {
      title: "Full-Stack Web Development",
      level: "Advanced",
      duration: "12 weeks",
      image: "/placeholder.svg",
      price: "$99.99",
    },
    {
      title: "iOS App Development with Swift",
      level: "Intermediate",
      duration: "10 weeks",
      image: "/placeholder.svg",
      price: "$89.99",
    },
    {
      title: "Data Visualization with D3.js",
      level: "Intermediate",
      duration: "6 weeks",
      image: "/placeholder.svg",
      price: "$59.99",
    },
    {
      title: "Cybersecurity Essentials",
      level: "Beginner",
      duration: "8 weeks",
      image: "/placeholder.svg",
      price: "$74.99",
    },
    {
      title: "Cloud Computing with AWS",
      level: "Advanced",
      duration: "10 weeks",
      image: "/placeholder.svg",
      price: "$109.99",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Explore our wide range of courses designed to help you master new skills and advance your career. From
          beginner to advanced levels, we have something for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <Image
                src="/images/course.png"
                alt={course.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-2">Level: {course.level}</p>
                <p className="text-gray-600 mb-2">Duration: {course.duration}</p>
                <p className="text-2xl font-bold text-[#34c759] mb-4">{course.price}</p>
                <Link
                  href={`/courses/${course.title.toLowerCase().replace(/ /g, "-")}`}
                  className="inline-block w-full text-center px-6 py-2 bg-[#34c759] text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

