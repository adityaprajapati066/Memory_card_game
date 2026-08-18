# 🧠 Memory Card Game

A fun and interactive **Memory Card Game** built with **React, Vite, and Tailwind CSS**.

The goal is simple: **click each card only once**. If you click the same card twice, your current score resets. Try to remember the cards and beat your best score! 🎮

## 🚀 Features

* 🃏 Interactive memory card game
* 🔀 Cards shuffle after every successful click
* 🎯 Score tracking
* 🏆 Best score tracking
* 🔄 Score resets when the same card is clicked twice
* ⚡ Fast development with Vite
* 🎨 Responsive UI using Tailwind CSS
* ⚛️ Built with React Hooks and functional components

## 🛠️ Technologies Used

* **React**
* **Vite**
* **Tailwind CSS**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

## 📂 Project Structure

```text
memory-card/
├── public/
├── src/
│   ├── components/
│   │   ├── CardList.jsx
│   │   └── Scoreboard.jsx
│   │
│   ├── data/
│   │   └── cards.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

## 🎮 How to Play

1. Start the game.
2. Click on any card.
3. The cards will shuffle automatically.
4. Remember which cards you have already clicked.
5. Click each card only once.
6. If you click a previously selected card, your score resets to `0`.
7. Try to achieve your highest possible score!

## 📊 Scoring

* Every new card clicked → **+1 point**
* Clicking the same card twice → **Score resets to 0**
* Your highest score is saved as the **Best Score**

## 💻 Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go into the project directory:

```bash
cd memory-card
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 🔧 Available Commands

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Checks the project for linting issues using Oxlint.


## 👨‍💻 Author

**Aditya Prajapati**

GitHub: Add your GitHub profile link here.

## 📄 License

This project is created for learning and practice purposes.
