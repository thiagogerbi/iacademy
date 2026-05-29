"use client"
import Image from "next/image"

export default function PopularCourses() {
  return (
    <section className="w-full py-16 flex flex-col items-center bg-white">
      <h2 className="text-4xl font-bold text-blue-700 text-center mb-2">
        Popular online courses
      </h2>
      <div className="w-40 h-px bg-gray-200 mt-4 mb-8 mx-auto" />
      <p className="text-center text-sm text-gray-600 max-w-xl mb-10">
        You need to be sure there isn’t unknownthing embarrassing hidden in the
        middle of text. All the Lorem Ipsum generators on the Internet tend
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {/* Card 1 */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="relative w-full h-56">
            <Image
              src="/assets/curso-1.jpg"
              alt="Course image"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 right-3 bg-blue-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              $42
            </span>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">By Martin Luthor</p>
            <h3 className="font-semibold text-lg mb-2">
              European Paintings: From Leonardo to Rembrandt
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              You need to be sure there isn’t unknown embarrassing hidden in middle.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>146 Students</span>
              <span>06 Reviews</span>
              <button className="text-blue-600 font-medium">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="relative w-full h-56">
            <Image
              src="/img/course2.jpg"
              alt="Course image"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 right-3 bg-blue-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              $42
            </span>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">By Martin Luthor</p>
            <h3 className="font-semibold text-lg mb-2">
              Measure and Improve Innovation at the Workplace
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              You need to be sure there isn’t unknown embarrassing hidden in middle.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>146 Students</span>
              <span>06 Reviews</span>
              <button className="text-blue-600 font-medium">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="relative w-full h-56">
            <Image
              src="/img/course3.jpg"
              alt="Course image"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 right-3 bg-blue-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              $42
            </span>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">By Martin Luthor</p>
            <h3 className="font-semibold text-lg mb-2">
              UX Design: Human Factors and Culture in Design
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              You need to be sure there isn’t unknown embarrassing hidden in middle.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>146 Students</span>
              <span>06 Reviews</span>
              <button className="text-blue-600 font-medium">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="relative w-full h-56">
            <Image
              src="/img/course4.jpg"
              alt="Course image"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 right-3 bg-blue-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              $42
            </span>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">By Martin Luthor</p>
            <h3 className="font-semibold text-lg mb-2">
              Personnel Management for Public Libraries
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              You need to be sure there isn’t unknown embarrassing hidden in middle.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>146 Students</span>
              <span>06 Reviews</span>
              <button className="text-blue-600 font-medium">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="relative w-full h-56">
            <Image
              src="/img/course5.jpg"
              alt="Course image"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 right-3 bg-blue-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              $42
            </span>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">By Martin Luthor</p>
            <h3 className="font-semibold text-lg mb-2">
              Budgeting and Finance for Public Libraries
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              You need to be sure there isn’t unknown embarrassing hidden in middle.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>146 Students</span>
              <span>06 Reviews</span>
              <button className="text-blue-600 font-medium">Apply Now</button>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="shadow-lg rounded-xl overflow-hidden bg-white">
          <div className="relative w-full h-56">
            <Image
              src="/img/course6.jpg"
              alt="Course image"
              fill
              className="object-cover"
            />
            <span className="absolute top-3 right-3 bg-blue-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
              $42
            </span>
          </div>
          <div className="p-5">
            <p className="text-sm text-gray-500 mb-1">By Martin Luthor</p>
            <h3 className="font-semibold text-lg mb-2">
              Modern Masterpieces of World Literature
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              You need to be sure there isn’t unknown embarrassing hidden in middle.
            </p>
            <div className="flex justify-between text-sm text-gray-500">
              <span>146 Students</span>
              <span>06 Reviews</span>
              <button className="text-blue-600 font-medium">Apply Now</button>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-10 px-8 py-3 border-2 border-blue-500 text-blue-600 rounded-full hover:bg-blue-500 hover:text-white transition font-medium cursor-pointer">
        Ver Cursos
      </button>
    </section>
  )
}
