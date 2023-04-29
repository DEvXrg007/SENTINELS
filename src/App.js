import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/Mainpage';
import Display from './components/Display';
import Prediction from './components/Prediction';

function App() {
  return (
    <>
      <Navbar/>
      <MainPage/>
      <Display/>
      <Prediction/>
    </>
  );
}

export default App;
