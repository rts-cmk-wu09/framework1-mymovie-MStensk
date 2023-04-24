import "./App.css";
import Heading from "./components/Heading";
import MovieCard from "./templates/MovieCard";
import SeeMoreButton from "./components/SeeMoreButton";
import Switch from "./components/Switch";

function App() {
  return (
    <div className="App">
      <header className="gridContainer">
        <h1 style={{ fontSize: "16px", justifySelf: "center", gridColumn: "2", margin: "1.4em" }}>MyMovies</h1>
        <Switch />
      </header>
      <main>
        <section>
          <div className="flexContainer">
            <h2 style={{ fontSize: "16px" }}>Now Showing</h2>
            <SeeMoreButton />
          </div>
          <div className="flexContainer2">
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default App;
