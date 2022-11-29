import React from "react";
import UFRJMap from "./UFRJMap";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LeftMenu from "./LeftMenu";
import Restaurante from "./Restaurante";
import Homepage from "./Homepage";
import Lista from "./Lista";

const App = () => {
  return (
    <div className="App">
        <LeftMenu/>
        <Router>
            <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/list" element={<Lista/>}/>
                <Route path="/map" element={<UFRJMap />} />
                <Route path="/restaurant" element={<Restaurante/>}/>
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;