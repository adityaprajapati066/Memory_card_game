import React from 'react'

const Scoreboard = ({ score, bestScore }) => {
  return (
    <div className="flex justify-center gap-6">
      <div className="rounded-lg bg-white px-6 py-3 shadow">
        <p className="text-sm text-gray-900">Score</p>

        <p className="text-2xl font-serif font-bold text-blue-600">
          {score}
        </p>
      </div>

      <div className="rounded-lg bg-white px-6 py-3 shadow">
        <p className="text-sm text-gray-900">Best Score</p>

        <p className="text-2xl font-bold font-serif text-green-600">
          {bestScore}
        </p>
      </div>
    </div>
  )
}

export default Scoreboard
