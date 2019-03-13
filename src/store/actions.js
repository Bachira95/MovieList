export const addMovie = title => {
  const newMovie = {
    title: title,
    watched: false
  };
  return {
    type: "ADD_MOVIE",
    payload: newMovie
  };
};

export const toggleWatched = movie => {
  movie.watched = !movie.watched;
  return {
    type: "TOGGLE_WATCHED"
  };
};

export const deletMovie = movie => {
  return {
    type: "DELETE_MOVIE",
    payload: movie
  };
};
