"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"

export default function ProblemsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")

  const problems = [
    { title: "Reverse a String", difficulty: "Easy", category: "Strings" },
    { title: "Binary Search", difficulty: "Easy", category: "Algorithms" },
    { title: "Merge Sort", difficulty: "Medium", category: "Algorithms" },
    { title: "Depth-First Search", difficulty: "Medium", category: "Graphs" },
    { title: "Dynamic Programming: Knapsack Problem", difficulty: "Hard", category: "Dynamic Programming" },
    { title: "Implement a Red-Black Tree", difficulty: "Hard", category: "Data Structures" },
  ]

  const filteredProblems =
    selectedDifficulty === "All" ? problems : problems.filter((problem) => problem.difficulty === selectedDifficulty)

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold mb-8">Practice Problems</h1>
        <div className="mb-8">
          <label htmlFor="difficulty" className="mr-4">
            Filter by difficulty:
          </label>
          <select
            id="difficulty"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-white border border-gray-300 rounded px-3 py-2"
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProblems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold mb-2">{problem.title}</h2>
              <p className="text-gray-600 mb-2">Difficulty: {problem.difficulty}</p>
              <p className="text-gray-600 mb-4">Category: {problem.category}</p>
              <button className="bg-[#34c759] text-white px-4 py-2 rounded hover:bg-opacity-90 transition-colors">
                Solve Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

