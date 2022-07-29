//Initial state for the reducer ALWAYS DO THIS
const initialState = {
    game: { platforms: [] },
    screen: { results: [] },
    isLoading: true,
  };
  
  //REDUCERS
  const detailReducer = (state = initialState, action) => {
    switch (action.type) {
      case "GET_DETAIL":
        return {
          ...state, //Game update
          game: action.payload.game,
          screen: action.payload.screen,
          isLoading: false,
        };
      //True to false as details get loaded
      case "LOADING_DETAIL":
        return {
          ...state,
          isLoading: true,
        };
      default:
        return { ...state };
    }
  };
  
  export default detailReducer;