"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Search } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [showLoginOptions, setShowLoginOptions] = useState(false)
  const loginRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    return pathname === path ? "bg-[#a1ebb4] text-black" : "text-black hover:bg-[#a1ebb4]"
  }

  const handleLoginClick = (type: string) => {
    router.push(`/login/${type}`)
    setShowLoginOptions(false)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setShowLoginOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <nav className="px-6 py-4 bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold">
            <span className="items-left text-black">do</span>
            <span className="text-[#34c759]">Hub</span>
            <span className="text-black">.com</span>
          </Link>
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#34c759] focus:border-transparent"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/explore" className={`px-4 py-2 rounded-lg transition-colors ${isActive("/explore")}`}>
            Explore
          </Link>
          <Link href="/courses" className={`px-4 py-2 rounded-lg transition-colors ${isActive("/courses")}`}>
            Courses
          </Link>
          <Link href="/problems" className={`px-4 py-2 rounded-lg transition-colors ${isActive("/problems")}`}>
            Problems
          </Link>
          <Link href="/premium" className={`px-4 py-2 rounded-lg transition-colors ${isActive("/premium")}`}>
            Premium
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative" ref={loginRef}>
            <button
              onClick={() => setShowLoginOptions(!showLoginOptions)}
              className="px-6 py-2 rounded-lg bg-[#34c759] text-white font-medium hover:bg-opacity-90 transition-colors"
            >
              Login
            </button>
            {showLoginOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <button
                  onClick={() => handleLoginClick("individual")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Individual User
                </button>
                <button
                  onClick={() => handleLoginClick("academic")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Academic User
                </button>
                <button
                  onClick={() => handleLoginClick("admin")}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Admin
                </button>
              </div>
            )}
          </div>
          <Link
            href="/signup"
            className="px-6 py-2 rounded-lg bg-[#34c759] text-white font-medium hover:bg-opacity-90 transition-colors"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  )
}

