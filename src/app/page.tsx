import Navbar from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-2/3 mb-8 md:mb-0">
            <h1 className="text-5xl font-bold mb-6">
              Welcome to <span className="text-[#34c759]">doHub</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-6">Unlock your potential with doHub</h2>
            <p className="text-xl mb-8 leading-relaxed">
              Learn, practice, and master new skills at your own pace. Dive into a world of expertly crafted courses and
              hands-on practice problems! that take your knowledge to the next level.Welcome again!.
            </p>
            <div className="flex space-x-4">
              <Link
                href="/explore"
                className="inline-block px-8 py-3 text-lg font-semibold bg-[#34c759] text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Explore Courses
              </Link>
              <Link
                href="/problems"
                className="inline-block px-8 py-3 text-lg font-semibold bg-white text-[#34c759] border-2 border-[#34c759] rounded-lg hover:bg-[#34c759] hover:text-white transition-colors"
              >
                Practice Now
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 px-" >
            <Image
              src="/images/hero.png"
              alt="Learning illustration"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Featured Courses Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Web Development Bootcamp", students: "10,000+", rating: 4.8, image: "/placeholder.svg" },
              { title: "Data Science Fundamentals", students: "8,000+", rating: 4.7, image: "/placeholder.svg" },
              { title: "Mobile App Development", students: "6,000+", rating: 4.9, image: "/placeholder.svg" },
              { title: "Machine Learning Essentials", students: "5,000+", rating: 4.6, image: "/placeholder.svg" },
              { title: "UX/UI Design Masterclass", students: "7,000+", rating: 4.8, image: "/placeholder.svg" },
              { title: "Cybersecurity Fundamentals", students: "4,000+", rating: 4.7, image: "/placeholder.svg" },
            ].map((course, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <Image
                  src="/images/course.png"
                  alt={course.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.students} students</p>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span>{course.rating}/5</span>
                  </div>
                  <Link
                    href="/courses"
                    className="inline-block w-full text-center px-6 py-2 bg-[#34c759] text-white rounded hover:bg-opacity-90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose doHub Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Why Choose doHub?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Instructors",
                description: "Learn from industry professionals and experienced educators.",
              },
              {
                title: "Hands-on Projects",
                description: "Apply your knowledge with real-world projects and assignments.",
              },
              { title: "Flexible Learning", description: "Study at your own pace, anytime and anywhere." },
              {
                title: "Interactive Coding Environments",
                description: "Practice coding in our built-in IDE and get instant feedback.",
              },
              {
                title: "Career Support",
                description: "Get guidance on job searching, resume building, and interview preparation.",
              },
              {
                title: "Diverse Course Catalog",
                description: "Explore a wide range of topics across various tech domains.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#34c759] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to start your learning journey?</h2>
          <p className="text-xl mb-8">Join thousands of students who are already mastering new skills on doHub.</p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 text-lg font-semibold bg-white text-[#34c759] rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </main>
  )
}

