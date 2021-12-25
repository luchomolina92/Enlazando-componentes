import React, { useEffect, useState } from "react";
import CardPelicula from "./CardPelicula";

const MoviesInitialState = [];

function SearchMovies() {
  const [movies, setMovies] = useState(MoviesInitialState);

  // Credenciales de API
  const apiKey = "862faad5"; // Intenta poner cualquier cosa antes para probar
  const url = "http://www.omdbapi.com/";

  const getMovie = async (e) => {
    e.preventDefault();
    const keyword = e.target.search.value;

    const res = await fetch(`${url}?apikey=${apiKey}&s=${keyword}`);
    const data = await res.json();

    data.Response !== "False"
      ? setMovies(() => [...data.Search])
      : setMovies(MoviesInitialState);
  };
	
  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={getMovie}>
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input type="text" className="form-control" name="search" />
                </div>
                <button className="btn btn-info">Search</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Resultado de búsqueda</h2>
            </div>
            {/* Listado de películas */}
						{movies.map((movie, i) => <CardPelicula key={i} pelicula={movie} />)}
          </div>
          {movies.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
