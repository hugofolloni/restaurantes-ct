import React from "react";
import UFRJMap from "./UFRJMap";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LeftMenu from "./LeftMenu";

const App = () => {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'row'}}>
        <LeftMenu/>
        <Router>
            <Routes>
                <Route path="/map" element={<UFRJMap />} />
            </Routes>
        </Router>
    </div>
    
  );
}

export default App;