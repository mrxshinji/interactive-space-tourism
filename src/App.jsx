import {Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Data from './data.json'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';
import Technology from './pages/Technology/Technology'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function App() {
  // get data 
  const data = Data;

  //get location
  const location = useLocation()
  // App return
  return (
    <div className="container">
      <Header />
      <TransitionGroup className="main">
        <CSSTransition
          key={location.pathname}
          classNames="appear"
          timeout={1000}
          exit={false}
        >
          <Routes>
            <Route end path="/" element={<Home />} />
            <Route path="/destination" element={<Destination data={data.destinations}/>} />
            <Route path="/crew" element={<Crew data={data.crew}/>} />
            <Route path="/technology" element={<Technology data={data.technology}/>} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
