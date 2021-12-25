import noPoster from "../assets/images/no-poster.jpg";

const CardPelicula = ({pelicula}) => {
  const {Title, Poster, Year} = pelicula;
  return (
    <div className="col-sm-6 col-md-3 my-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">{Title}</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              src={Poster !== "N/A" ? Poster : noPoster}
              alt={Title}
              style={{ width: "90%", height: "400px", objectFit: "cover" }}
            />
          </div>
          <p>{Year}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPelicula;
