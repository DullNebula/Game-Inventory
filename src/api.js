import config from "./config.js";
var apiKey = config.MY_KEY;
var secretkey = config.SECRET_KEY;
//BASE URL
console.log(config)
console.log(apiKey)
const base_url = "https://api.rawg.io/api/";

//getting the month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//getting the day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//POPULAR GAMES,UPCOMING GAMES AND ALL OTHERS RECEIVED FROM API.
const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${apiKey}&dates&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//exporting urls

export const popularGamesUrl = () => {
  return `${base_url}${popular_games}`;
};
export const upcomingGamesUrl = () => {
  return `${base_url}${upcoming_games}`;
};
export const newGamesUrl = () => {
  return `${base_url}${newGames}`;
};



//GAMES DETAILS
export const gamesDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${apiKey}`;



//SCREEN SHOTS
export const gamesScreenUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${apiKey}`;

//Fetch searched games
export const searchedGameUrl = (game_name) => `
    ${base_url}games?search=${game_name}&page_size=9&key=${apiKey}`;