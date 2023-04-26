import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import MovieItem from "./templates/MovieItem";
import SeeMoreButton from "./components/SeeMoreButton";
import Switch from "./components/Switch";
import Navigation from "./components/Navigation";
function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <Heading title="MyMovies" size="16" as="h1" />
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer">
            <Heading title="Now Showing" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer2">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section className="VerticalMovieListContainer">
          <div className="flexContainer justify-space-between VerticalMovieListTitleLayout">
            <Heading title="Popular" size="16" as="h2" />
            <SeeMoreButton />
          </div>
          <div className="flexContainer2 movieListContainerLayout">
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
            <MovieItem />
          </div>

        </section>
      </main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
}

export default App;
