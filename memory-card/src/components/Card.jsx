import React from 'react'

const Card = ({ card, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer overflow-hidden rounded-xl bg-white shadow-md transition duration-200 hover:scale-105 hover:shadow-2xl hover:border-amber-400 shadow-amber-300"
    >
      <img
        src={card.image}
        alt={card.name}
        className="h-90 w-full object-cover"
      />

      <h3 className="p-4 text-xl font-bold text-gray-800 text-center mask-linear-from-neutral-900"  >
        {card.name}
      </h3>
    </div>
  )
}

export default Card
