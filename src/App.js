import { useState } from "react";
import MovieGetter from "./components/api/MovieGetter";
import './styles.css'

function App() {
  const [movie,setMovie] = useState([]);
  return (
    <div className="App">
      <MovieGetter movie={movie} setMovie={setMovie}
        />
    </div>
  );
}

export default App;
