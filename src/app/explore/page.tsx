import Navbar from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"

export default function ExplorePage() {
  const categories = [
    { name: "Web Development", image: "/placeholder.svg", courses: 50 },
    { name: "Data Science", image: "/placeholder.svg", courses: 40 },
    { name: "Mobile App Development", image: "/placeholder.svg", courses: 30 },
    { name: "Machine Learning", image: "/placeholder.svg", courses: 35 },
    { name: "DevOps", image: "/placeholder.svg", courses: 25 },
    { name: "Cybersecurity", image: "/placeholder.svg", courses: 20 },
    { name: "UX/UI Design", image: "/placeholder.svg", courses: 15 },
    { name: "Blockchain", image: "/placeholder.svg", courses: 10 },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">Explore Our Learning Universe</h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Discover a wide range of courses and learning paths to help you achieve your goals. Whether you're just
          starting out or looking to advance your career, we have something for everyone.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <Image
                src="/images/course.png"
                alt={category.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600 mb-4">{category.courses} courses available</p>
                <Link
                  href={`/courses?category=${category.name.toLowerCase().replace(" ", "-")}`}
                  className="inline-block w-full text-center px-4 py-2 bg-[#34c759] text-white rounded hover:bg-opacity-90 transition-colors"
                >
                  Explore Courses
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

