import './App.css';
import DetailsPage from './components/DetailsPage';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom"
import Login from './googleOauth/Login';
import Home from './components/Home';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/details/:id" element={<DetailsPage/>} />
      </Routes>
    </>
  );
}

export default App;
