import React from 'react';
import Main from "./pages/Main"
import {
    Routes,
    Route,
} from "react-router-dom";
import Avia from './pages/Avia';
import AviaInfo from './pages/AviaInfo';


function App() {

    return (
      <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/avia" element={<Avia />} />
          <Route path="/avia/info" element={<AviaInfo  />} />
      </Routes>
  );
}

export default App;
