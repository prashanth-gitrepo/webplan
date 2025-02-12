"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Navbar from "@/components/navbar"

export default function LoginPage() {
  const router = useRouter()
  const { type } = useParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginType, setLoginType] = useState("")

  useEffect(() => {
    if (type && typeof type === "string") {
      setLoginType(type)
    }
  }, [type])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log("Login submitted:", { email, password, loginType })
    // Redirect to home page after successful login
    router.push("/")
  }

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-md mx-auto mt-16 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">{capitalizeFirstLetter(loginType)} Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              Email or ID
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34c759]"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#34c759]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#34c759] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  )
}

// Add this function to enable Static Site Generation (SSG) for dynamic routes
export function generateStaticParams() {
  return [
    { type: "email" },
    { type: "social" },
    // Add more types if necessary
  ]
}
