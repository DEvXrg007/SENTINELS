
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/Mainpage';
import Display from './components/Display';
import Prediction from './components/Prediction';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="flex flex-col  pb-0 overflow-y-auto pb-0 radial sm:px-0 sm:w-full sm:overflow-x-hidden sm:scrollbar scrollbar overflow-x-hidden relative">
                <Navbar/>
                <MainPage/>
                <Display/>
                <Prediction/>
              </div>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div className="h-screen flex flex-col   px-20 overflow-y-auto pb-12 radial sm:px-0 sm:pb-5">
              <Navbar />
              <div className="flex items-center justify-center">
                <About />
              </div>
            </div>
          }
        />
        
      </Routes>
    </BrowserRouter>
      
      
    </>
  );
}

export default App;
