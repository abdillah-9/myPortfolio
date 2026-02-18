import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './Global.css';

export default function App(){
  return(
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Home></Home>} path="/"/>
        <Route element={<About></About>} path="/about"/>
      </Routes>
    </BrowserRouter>
  )
}