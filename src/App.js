import Hero from "./app/component/Hero";
import MovieList from "./app/component/MovieList";
import Nav from "./app/component/Nav";

function App() {
  return (
    <div className="bg-slate-900 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <Nav />
      <Hero  />
      <MovieList 
      title='Top Rated 🔥' 
      filter="sort_by=rating"
      />
      <MovieList 
      title='Action 🔫' 
      filter="genres=action"
      />
      <MovieList 
      title='Funny 😆' 
      filter="genres=funny"
      />
      <MovieList 
      title='comedy 🎭' 
      filter="genres=comedy"
      />
      <MovieList 
      title='War ⚔️' 
      filter="genres=war"
      />
      <MovieList 
      title='Thriller 🧟‍♂️🕺🏼' 
      filter="genres=thriller"
      />
    </div>
    <div className="text-white text-center py-4">
    Build by <a href="https://ahnaftahsin.netlify.app/" className="font-bold">Ahnaf Tahsin</a>
    </div>
</div>
);
}

export default App;
