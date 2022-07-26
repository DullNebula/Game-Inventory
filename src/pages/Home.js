import React, { useEffect } from "react";
import GameDetail from "../components/GameDetails";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameActions";
//Components
import Game from "../components/Game";
//Style and animations
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn, popUp } from "../animation";

const Home = () => {
  //get the current location
  const location = useLocation();

  const pathId = location.pathname.split("/")[2];

  //Fetch Games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]); //this useeffect works when APP() gets rendered/loads
  //Add [] after useeffect to make sure this will fetch the games when app get mounted i.e
  //fetch ONLY ONE TIME and useEffect will run when dispatch happens ,[dispatch]
  //we now get the data from state (BIG STATE CALLED REDUX STORE/STATE)

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="searched">
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => (
                <Game
                  name={game.name}
                  released={game.released}
                  id={game.id}
                  image={game.background_image}
                  key={game.id} //When getting an error
                />
              ))}
            </Games>
          </div>
        ) : (
          " "
        )}

        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id} //When getting an error
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id} //When getting an error
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id} //When getting an error
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};
const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3.7rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 70vh;
  position: relative;
  top: -0.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 2.1rem;
  grid-row-gap: 4rem;
`;

export default Home;