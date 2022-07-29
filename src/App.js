import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import GlobalStyles from "./components/GlobalStyle";
import {Route, Routes, Router} from "react-router-dom";
import User from "./pages/User"


function App() {
  return (
    <React.Fragment>
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Routes>
                <Route path = "/" element = {<Home />}/>
  
                <Route path = "/User" element = {<User/>}/>
                    
                <Route path = "/game/*" element = {<Home/>}/>
            </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
