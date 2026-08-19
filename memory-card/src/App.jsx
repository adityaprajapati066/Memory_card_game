import { useEffect, useState } from "react";
import CardList from "./components/CardList";
import Scoreboard from "./components/Scoreboard";
import cardsData from "./data/cards";

function App() {
  const [cards, setCards] = useState(cardsData);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect (()=>{
    const timer = setInterval(()=>{
      setTime(new Date());
    },1000);

    return () => clearInterval(timer);
  },[]);
  

  function shuffleCards() {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }

  function handleCardClick(card) {
    const alreadyClicked = clickedCards.includes(card.id);

    if (alreadyClicked) {
      setScore(0);
      setClickedCards([]);
      return;
    }

    const newClickedCards = [...clickedCards, card.id];

    setClickedCards(newClickedCards);

    const newScore = score + 1;

    setScore(newScore);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }

    shuffleCards();
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 via-green-700 to-yellow-500">
       <div className="flex justify-between p-2">
        <p className="bg-linear-80 rounded font-bold from-white  ">{time.toLocaleTimeString()}</p>
        <p className="font-bold bg-linear-120 from-green-200 rounded">{time.toLocaleDateString()}</p>
       </div>
      <header className="bg-green-700/40 px-6 py-8 text-center text-white">
        <h1 className="bg-linear-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-4xl font-bold text-transparent">
          Memory Card Game
        </h1>
         
        
          
        <p className="mt-3 text-lg text-amber-500 ">
          Get points by clicking on a card, but don't click
          the same card twice!
        </p>

        <div className="mt-6">
          <Scoreboard
            score={score}
            bestScore={bestScore}
          />
        </div>
      </header>

      <main>
        <CardList
          cards={cards}
          onCardClick={handleCardClick}
        />
      </main>
    </div>
  );
}

export default App;