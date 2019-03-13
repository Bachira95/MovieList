const initialState = {
  movies: [
    {
      title: "Spider-lad",
      watched: true
    },
    {
      title: "Bu Waleed Goes on an Adventure",
      watched: true
    },
    {
      title: "Taken",
      watched: false
    },
    {
      title: "Star Wars",
      watched: true
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case "TOGGLE_WATCHED":
      return {
        ...state,
        movies: [...state.movies]
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: state.movies.filter(movie => movie !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
