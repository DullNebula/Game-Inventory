import { combineReducers } from "redux";
//Combines multiple reducers into one
import gamesReducer from "./gamesReducer";
import detailReducer from "./detailReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});
//rootReducer lists all the reducers to be combined

export default rootReducer;