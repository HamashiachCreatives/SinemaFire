import { useEffect, useState } from "react";
import './styles.css'
import data from './films.json'
import MoviesList from "./api/MoviesList";
import Banner from "./banner/Banner";

function App() {
  const [movie,setMovie] = useState([]);
  useEffect(()=>{
    setMovie(data);
  },[setMovie]);
  return (
    <div className="App">
      <Banner
        movie={movie} setMovie={setMovie}
      />

      <MoviesList
        movie={movie}
      />
      
    </div>
  );
}

export default App;
