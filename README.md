# 🎬 Movie Discovery App

A sleek and responsive **React + Vite** application that allows users to explore, search, and stream trending movies. This app integrates with **TMDB API** and is styled using **Tailwind CSS** for a clean and modern UI.

---

## 🚀 Features

- 🔍 Search and explore trending or popular movies  
- 🎞️ Stream trailers or full content directly  
- 📈 See what's trending now  
- 💌 Clean responsive UI with Tailwind CSS  
- ⚡ Lightning-fast performance with Vite  

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite  
- **Styling**: Tailwind CSS  
- **API**: [TMDB API](https://www.themoviedb.org/)  
- **State Management**: React Hooks (`useState`, `useEffect`)  
- **Build Tools**: ESLint, PostCSS  

---

## 📦 Getting Started

### 1. Clone the repository

git clone https://github.com/your-username/movie-app.git  
cd movie-app

### 2. Install dependencies

npm install

### 3. Add environment variables

Create a `.env` file in the root with your TMDB API credentials:

VITE_TMDB_URL=https://api.themoviedb.org/3  
VITE_TMDB_API_KEY=your_api_key_here

### 4. Start the development server

npm run dev

Open `http://localhost:5173` to view the app.

---

## 🧩 Folder Structure

src/  
├── assets/            # Static images  
├── components/        # Reusable components like Search, MovieCard  
├── pages/             # Page components  
├── App.jsx            # Root component  
├── main.jsx           # Entry point  
└── index.css          # Tailwind CSS + custom styles

---

## 🧪 Linting & Formatting

This project uses **ESLint** with basic rules.  
You can expand it further for production apps.

> For TypeScript support, check out the [React + Vite + TS Template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)

---

## 📸 Preview

![App Preview](./screenshot.png)

---

## 📄 License

MIT License.  
Feel free to fork and customize it for your own movie projects!

---

## 🙌 Acknowledgments

- [TMDB API](https://www.themoviedb.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Vite](https://vitejs.dev/)  

---

> Built with ❤️ using React, Tailwind & Vite
