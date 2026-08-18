import Card from './Card'
import React from 'react'

const CardList = ({cards, onCardClick}) => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  )
}

export default CardList
