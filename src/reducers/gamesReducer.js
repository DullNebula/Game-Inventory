const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
    //Creating the inital state as variable
  };
  
  const gamesReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_GAMES":
        return {
          ...state,
          popular: action.payload.popular,
          newGames: action.payload.newGames,
          upcoming: action.payload.upcoming,
        }; //Returning all states of each section to its default
      case "FETCH_SEARCHED":
        return {
          ...state,
          searched: action.payload.searched,
        };
      case "CLEAR_SEARCHED":
        return {
          ...state,
          searched: [],
        };
      default:
        return { ...state };
    }
  };
  export default gamesReducer;